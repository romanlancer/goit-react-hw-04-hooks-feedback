import PropTypes from 'prop-types';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <ul>
      <li>
        <span>good: {good}</span>
      </li>
      <li>
        <span>neutral: {neutral}</span>
      </li>
      <li>
        <span>bad: {bad}</span>
      </li>
      <li>
        <span>total: {total}</span>
      </li>
      <li>
        <span>Positive feedback: {positivePercentage}</span> %
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
