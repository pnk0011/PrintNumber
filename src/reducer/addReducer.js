const intialState = [];

function AddReducer(state = intialState, action) {
  switch (action.type) {
    case "ADD_HISTORT":
      return [...state, action.payload];

    default:
      return state;
  }
}

export default AddReducer;
