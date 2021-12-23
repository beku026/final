import React, { useReducer } from "react";
export const favouriteContext = React.createContext();

const INIT_STATE = {
  favourite: {},
  favouriteLength: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_FAVOURITE":
      return {
        ...state,
        favourite: action.payload,
        favouriteLength: action.payload.products.length,
      };
    default:
      return state;
  }
};


const FavouriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addProductToFavourite(product) {
    let favourite = JSON.parse(localStorage.getItem("favourites"));
    if (!favourite) {
        favourite = {
        products: [],
      };
      localStorage.setItem("favourites", JSON.stringify(favourite));
    }
    let newProduct = {
      item: product,
      count: 1,
    };
    let filteredFavourite = favourite.products.filter(
      (item) => item.item.id === product.id
    );
    if (filteredFavourite.length > 0) {
        favourite.products = favourite.products.filter(
        (item) => item.item.id !== product.id
      );
    } else {
        favourite.products.push(newProduct);
    }
    localStorage.setItem("favourites", JSON.stringify(favourite));

    getFavourite(); //автоматически обновляет корзину
  }
  function getFavourite() {
    let favourite = JSON.parse(localStorage.getItem("favourites"));
    if (!favourite) {
        favourite = {
        products: [],
      };
    }
    dispatch({
      type: "GET_FAVOURITE",
      payload: favourite,
    });
  }
  function deleteFromFavourite(id) {
    let favourite = JSON.parse(localStorage.getItem("favourites"));
    if (!favourite) {
        favourite = {
        products: [],
      };
    }
    favourite.products = favourite.products.filter((item) => item.item.id !== id);
    localStorage.setItem("favourites", JSON.stringify(favourite));
    getFavourite();
  }

  function checkItemInFavourite(id) {
    //проверка добавлен ли товар
    let favourite = JSON.parse(localStorage.getItem("favourites"));
    if (!favourite) {
        favourite = {
        products: [],
      };
    }
    let filteredFavourite = favourite.products.filter((item) => item.item.id === id);
    return filteredFavourite.length > 0 ? true : false; // проверка есть ли такой элем в корзине
  }


  function changeProductCount(count, id) {
    //количество элементов в корзине
    if (count <= 0) {
      count = 1;
    }
    let favourite = JSON.parse(localStorage.getItem("favourites"));
    favourite.products = favourite.products.map((item) => {
      if (item.item.id === id) {
        item.count = count;
      }
      return item;
    });
    localStorage.setItem("favourites", JSON.stringify(favourite));
    getFavourite();
  }

  return (
    <favouriteContext.Provider
      value={{
        favourite: state.favourite,
        favouriteLength: state.favouriteLength,
        addProductToFavourite,
        getFavourite,
        deleteFromFavourite,
        checkItemInFavourite,
        changeProductCount,
      }}
    >
      {children}
    </favouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
