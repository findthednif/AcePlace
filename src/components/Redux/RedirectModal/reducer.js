const initialState = {
  modalOpen: false,
  url: '',
};
const redirectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'open_modal':
      return { ...state, modalOpen: true };
    case 'close_modal':
      return { ...state, modalOpen: false };
    case 'set_url':
      return { ...state, url: action.payload };
    default:
      return state;
  }
};
export default redirectReducer;
