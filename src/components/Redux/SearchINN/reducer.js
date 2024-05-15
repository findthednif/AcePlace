const initialState = {
  inputData: '',
  data: [],
  loading: false,
};
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'input_change':
      return { ...state, inputData: action.payload };
    case 'data_loading':
      return { ...state, loading: true };
    case 'data_received':
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};
export default inputReducer;
