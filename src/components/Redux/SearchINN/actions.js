export const inputChange = (inputData) => ({
  type: 'input_change',
  payload: inputData,
});
export const dataReceived = (data) => ({
  type: 'data_received',
  payload: data.suggestions,
});
export const dataLoading = () => ({
  type: 'data_loading',
});
