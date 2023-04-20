export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_CRYPTO_LIST":
      return {
        ...state,
        cryptoListData: action.payload,
      };
    //stato Globale per le icone
    // case "SET_ICON_SELECTED":
    //   return {};
    default:
      return state;
  }
};
