import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export const StatisticsList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(data => (
        <li className="item" key={data.id}>
          <StatisticsItem label={data.label} percentage={data.percentage} />
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};
