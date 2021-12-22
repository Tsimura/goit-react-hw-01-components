import StatisticsTitle from 'components/StatisticsTitle/StatisticsTitle';
import StatisticsList from 'components/StatisticsList/StatisticsList';
import data from '../Statistics/data.json';
const StatisticsSection = () => {
  return (
    <>
      <section className="statistics">
        <StatisticsTitle />
        <StatisticsList data={data} />
      </section>
    </>
  );
};

export default StatisticsSection;
