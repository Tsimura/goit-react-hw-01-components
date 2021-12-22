import PropTypes from 'prop-types';
import StatisticsSection from '../StatisticsSection/StatisticsSection';
import data from './data.json';

const Statistics = () => {
  return (
    <>
      <StatisticsSection data={data} />
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};
export default Statistics;
