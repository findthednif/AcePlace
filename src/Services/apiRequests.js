const url =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party';
const token = '590d816108872ecd15567db2634d97ed19a40814';
const getCompanies = async (query) => {
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${  token}`,
    },
    body: JSON.stringify({ query }),
  };
  const responce = await fetch(url, options);
  if (responce.ok) {
    const data = await responce.json();
    return data;
  }
  return null;
};
export default getCompanies;