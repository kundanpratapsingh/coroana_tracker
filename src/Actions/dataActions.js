export const fetchProductsBegin = () => {
  console.log("Action");
  return { type: "FETCH_PRODUCTS_BEGIN" };
};

export const fetchProductsSuccess = (result) => {
  return { type: "FETCH_PRODUCTS_SUCCESS", payload: { result } };
};

export const fetchProductsFailure = (error) => {
  return { type: "FETCH_PRODUCTS_FAILURE", payload: { error } };
};
