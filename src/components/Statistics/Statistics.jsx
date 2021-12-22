import PropTypes from 'prop-types';
import StatisticsSection from '../StatisticsSection/StatisticsSection';
import stats from './data.json';

const Statistics = () => {
  return (
    <>
      <StatisticsSection stats={stats} />
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};
export default Statistics;
