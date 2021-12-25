import PropTypes from 'prop-types';
import css from 'components/StatisticsTitle/StatisticsTitle.module.css';

export const StatisticsTitle = ({ title = 'Upload stats' }) => {
  return <>{title && <h2 className={css.title}>{title}</h2>}</>;
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};
