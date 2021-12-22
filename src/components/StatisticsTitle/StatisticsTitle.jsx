import stats from 'components/Statistics/data.json';
const StatisticsTitle = () => {
  const titleEl = false;
  console.log(stats);
  return <>{titleEl && <h2 class="title">Upload stats</h2>}</>;
};
export default StatisticsTitle;
