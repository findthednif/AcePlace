import { useSelector, useDispatch } from 'react-redux';
import { Card, Modal } from 'antd';

import './CompanyCard.css';
import { openModal, closeModal, setUrl } from '../Redux/RedirectModal/actions';

export default function CompanyCard({ title, management, address, inn }){
  const { modalOpen, url } = useSelector((state) => state.redirectReducer);
  const dispatch = useDispatch();

  const showConfirmModal = (query) => {
    dispatch(setUrl(query));
    dispatch(openModal());
  };

  const handleOk = () => {
    dispatch(closeModal());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const googleMapsLink = address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address.value,
    )}`
    : '#';

  return (
    <>
      <Card
        title={title}
        bordered
        type='number'
        style={{
          width: 500,
          height: 250,
          borderWidth: '2px',
        }}
      >
        <p>ИНН: {inn}</p>
        {management && (
          <>
            <p>Основатель: {management.name}</p>
            <p>Должность: {management.post}</p>
          </>
        )}
        {address && (
          <p>
            Адрес:
            <button
              type='button'
              className='addressButton'
              onClick={(e) => {
                e.preventDefault();
                showConfirmModal(googleMapsLink);
              }}
            >
              {address.value}
            </button>
          </p>
        )}
      </Card>

      <Modal
        mask={false}
        title='Подтвердите переход'
        open={modalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='Перейти'
        cancelText='Отмена'
      >
        <p>Страница будет открыта в Google Maps. Вы уверены?</p>
      </Modal>
    </>
  );
};
