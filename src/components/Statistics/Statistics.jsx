import PropTypes from 'prop-types';
import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import data from './data.json';

export const Statistics = () => {
  return (
    <>
      <section className="statistics">
        <StatisticsTitle stats={data} />
        <StatisticsList stats={data} />
      </section>
    </>
  );
};

Statistics.propTypes = {
  data: PropTypes.object,
};
