import PropTypes from 'prop-types';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage + ' %'}</span>
    </>
  );
};

StatisticsItem.protoType = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
