const StatisticsList = ({ stats }) => {
  //   console.log(stats);
  return (
    <ul className="stat-list">
      {stats.map(data => (
        <li className="item" key={data.id}>
          <span className="label">{data.label}</span>
          <span className="percentage">{data.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

export default StatisticsList;
