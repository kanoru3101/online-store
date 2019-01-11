const initialState = {
  products: {
    //   [Products.id]: {...product}
  }
};

export default function entitiesReducer(state = initialState, actions) {
  if (actions.payload && actions.payload.entities) {
    const newData = Object.entries(actions.payload.entities);
    const newState = newData.reduce(
      (acc, [key, value]) =>
        Object.assign(acc, { [key]: { ...acc[key], ...value } }),
      { ...state }
    );
    return newState;
  }

  return state;
}
