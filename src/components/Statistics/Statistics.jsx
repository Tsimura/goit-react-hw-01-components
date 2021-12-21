import PropTypes from 'prop-types';
import data from './data.json';

// https://github.com/goitacademy/react-homework/tree/master/homework-01

const Statistics = ({ label, percentage }) => {
  return (
    <ul className="stat-list">
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};
export default Statistics;
