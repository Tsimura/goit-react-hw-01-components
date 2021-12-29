import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import data from './data.json';
import css from 'components/Statistics/Statistics.module.css';
export const Statistics = () => {
  return (
    <>
      <section className={css.statistics}>
        <StatisticsTitle stats={data} />
        <StatisticsList stats={data} />
      </section>
    </>
  );
};
