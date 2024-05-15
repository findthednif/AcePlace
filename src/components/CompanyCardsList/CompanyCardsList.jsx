import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';

import CompanyCard from '../CompanyCard/CompanyCard';
import './CompanyCardsList.css';
import SearchLine from '../SearchLine/SearchLine';

export default function CompanyCardsList(){
  const { data, loading } = useSelector((state) => state.inputReducer);
  const cardsList = data.map((company) => {
    const info = company.data;
    return (
      <CompanyCard
        key={info.hid}
        inn={info.inn}
        title={company.value}
        address={info.address}
        management={info.management}
      />
    );
  });
  return (
    <>
      <SearchLine />
      {loading && <ReactLoading type='spin' color='#1890ff' />}
      {data.length !== 0 ? (
        <div className='cardsList'>{cardsList}</div>
      ) : (
        !loading && <h1>Запрашиваемый ИНН не найден</h1>
      )}
    </>
  );
};
