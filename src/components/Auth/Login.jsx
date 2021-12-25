import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "./Login.css";
const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    authWithGoogle,
  } = useAuth();
  // console.log(email)
  return (
    <section className="login">
      <div className="login-container">
        <label className="auth-label">Email</label>
        <input
          className="auth-input"
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="error-msg">{emailError}</p>

        <label className="auth-label">Password</label>
        <input
          className="auth-input"
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="error-msg">{passwordError}</p>

        <div className="btn-container">
          {hasAccount ? (
            <>
              {" "}
              <Link to="/">
                <button className="auth-btn" onClick={handleLogin}>
                  Sign in
                </button>
              </Link>
              <Link to="/forgot">
                <p className="forgot">Забыли пароль?</p>
              </Link>
              <p className="auth-text">
                Don't have an account?
                <span
                  className="auth-span"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign up
                </span>
              </p>
            </>
          ) : (
            <>
              <Link to="/">
                <button className="auth-btn" onClick={handleSignUp}>
                  Sign up
                </button>
              </Link>

              <p className="auth-text">
                Have an account?
                <span
                  className="auth-span"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign in
                </span>
              </p>
            </>
          )}
        </div>
        <button
          style={{
            borderRadius: "10px",
            backgroundColor: "#4a4a4a",
            color: "white",
            border: "none",
          }}
          onClick={authWithGoogle}
        >
          <img
            width="30px"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt="google-logo"
          />
          Войти с помощью google аккаунта
        </button>
      </div>
    </section>
  );
};

export default Login;
