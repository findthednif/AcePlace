import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

import {
  dataReceived,
  inputChange,
  dataLoading,
} from '../Redux/SearchINN/actions';
import getCompanies from '../../Services/apiRequests';

const { Search } = Input;
export default function SearchLine() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { inputData } = useSelector((state) => state.inputReducer);
  const { slug } = useParams();
  const changeInput = (event) => {
    dispatch(inputChange(event.target.value));
  };
  useEffect(() => {
    if (slug) {
      dispatch(dataLoading());
      dispatch(inputChange(slug));
      getCompanies(slug).then((result) => {
        dispatch(dataReceived(result));
      });
    }
  }, [slug, dispatch]);
  const searchConfirm = async () => {
    navigate(`/info/${inputData}`);
    getCompanies(inputData).then((result) => {
      dispatch(dataReceived(result));
    });
  };
  return (
    <Search
      value={inputData}
      style={{ width: '50%' }}
      placeholder='Введите ИНН'
      enterButton='Поиск'
      size='large'
      onChange={changeInput}
      onSearch={searchConfirm}
    />
  );
}
