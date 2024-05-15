export const closeModal = () => ({
  type: 'close_modal',
});
export const openModal = () => ({
  type: 'open_modal',
});
export const setUrl = (url) => ({
  type: 'set_url',
  payload: url,
});
