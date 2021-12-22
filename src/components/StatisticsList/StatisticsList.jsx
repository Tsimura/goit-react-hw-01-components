const StatisticsList = ({ data }) => {
  console.log(data);
  return (
    <ul className="stat-list">
      {data.map(data => (
        <li className="item" key={data.id}>
          <span className="label">{data.label}</span>
          <span className="percentage">{data.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

export default StatisticsList;
