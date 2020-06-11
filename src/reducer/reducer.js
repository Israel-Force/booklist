import uuid from "react-uuid";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid(),
        },
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_PURPLE":
      return { ...state, isPurple: !action.isPurple };
    case "CHANGE_RED":
      return {
        ...state,
        isRed: !action.isRed,
        isPurple: false,
        isGreen: false,
        isBrown: false,
        isDark: false,
      };
    case "CHANGE_GREEN":
      return {
        ...state,
        isGreen: !action.isGreen,
        isPurple: false,
        isRed: false,
        isBrown: false,
        isDark: false,
      };
    case "CHANGE_BROWN":
      return {
        ...state,
        isBrown: !action.isBrown,
        isPurple: false,
        isGreen: false,
        isRed: false,
        isDark: false,
      };
    case "CHANGE_DARK":
      return {
        ...state,
        isDark: !action.isDark,
        isPurple: false,
        isGreen: false,
        isBrown: false,
        isRed: false,
      };
    default:
      return state;
  }
};

q;
export const burgerReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_BURGER":
      return { ...state, isBurger: !action.isBurger };
    default:
      return state;
  }
};
