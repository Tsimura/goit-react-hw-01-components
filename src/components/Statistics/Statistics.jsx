import PropTypes from 'prop-types';
import data from './data.json';

// https://github.com/goitacademy/react-homework/tree/master/homework-01

const Statistics = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage + '%'}</span>
    </li>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};
export default Statistics;

// {
/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>...
   
  </ul>
</section>; */
// }

// {
/* 
<Statistics title="Upload stats" stats={data} />;
<Statistics stats={data} />; */
// }

// https://youtu.be/kfX5HTQD26E?t=5050
