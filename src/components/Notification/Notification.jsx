import PropsType from 'prop-types';

const Notification = ({ message }) => {
  return <h2>{message}</h2>;
};

Notification.propsType = {
  message: PropsType.string.isRequired,
};

export default Notification;
