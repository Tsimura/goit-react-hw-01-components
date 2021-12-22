import StatisticsTitle from 'components/StatisticsTitle/StatisticsTitle';
import StatisticsList from 'components/StatisticsList/StatisticsList';
import stats from '../Statistics/data.json';
const StatisticsSection = () => {
  return (
    <>
      <section className="statistics">
        <StatisticsTitle stats={stats} />
        <StatisticsList stats={stats} />
      </section>
    </>
  );
};

export default StatisticsSection;
