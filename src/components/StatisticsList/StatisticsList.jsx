import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import css from 'components/StatisticsList/StatisticsList.module.css';

import { getRandomHexColor } from 'components/helpers/getRandomHexColor';

export const StatisticsList = ({ stats }) => {
  return (
    <ul className={css.statList}>
      {stats.map(data => (
        <li
          className={css.item}
          key={data.id}
          style={{
            backgroundColor: getRandomHexColor(),
          }}
        >
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
