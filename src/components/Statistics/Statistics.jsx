import PropTypes from 'prop-types';
import StatisticsSection from '../StatisticsSection/StatisticsSection';
// import StatisticsList from 'components/StatisticsList/StatisticsList';
// import StatisticsTitle from '../StatisticsTitle/StatisticsTitle';
import data from './data.json';

// https://github.com/goitacademy/react-homework/tree/master/homework-01

const Statistics = () => {
  return (
    <>
      <StatisticsSection data={data} />
      {/* <StatisticsTitle /> */}
      {/* <StatisticsList data={data} /> */}
    </>
  );
};

// const Statistics = ({ label, percentage }) => {
//   return (
//     <li className="item">
//       <span className="label">{label}</span>
//       <span className="percentage">{percentage + '%'}</span>
//     </li>
//   );
// };
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};
export default Statistics;

// https://youtu.be/kfX5HTQD26E?t=5050
