import React from "react";
import Card from "react-credit-cards";

import SupportedCards from "./Cards";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";
import "./Pay.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class App extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer } = this.state;

    return (
      <div key="Payment" style={{ paddingTop: "111px", backgroundImage: 'url(https://easywaygaming.com/wp-content/uploads/2021/06/428bf267e8b5f9cb8e612a2fcec856cf_Blitz2.jpg)',
      backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <div className="App-payment">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Card
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
            />
            <form
              ref={(c) => (this.form = c)}
              onSubmit={this.handleSubmit}
              style={{ marginTop: "50px" }}
            >
              <div className="form-group">
                <input
                  type="tel"
                  maxlength="19"
                  name="number"
                  className="form-control"
                  placeholder="Card Number"
                  // pattern="[\d| ]{16,22}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="row">
                <div className="col-6">
                  <input
                    type="tel"
                    name="expiry"
                    className="form-control"
                    placeholder="Valid Thru"
                    pattern="\d\d/\d\d"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="tel"
                    name="cvc"
                    maxLength="3"
                    className="form-control"
                    placeholder="CVC"
                    pattern="\d{3}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
              </div>
              <input type="hidden" name="issuer" value={issuer} />
              <div className="form-actions">
                <Link to="/invoic">
                  <Button variant="warning" type="submit" style={{width: '100px'}}>
                    PAY
                  </Button>
                </Link>
              </div>
            </form>
          </div>
          <hr style={{ margin: "30px 0" }} />
          <SupportedCards />
        </div>
      </div>
    );
  }
}
