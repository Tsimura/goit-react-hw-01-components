import PropTypes from 'prop-types';
import css from 'components/StatisticsItem/StatisticsItem.module.css';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage + '%'}</span>
    </>
  );
};

StatisticsItem.protoType = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
