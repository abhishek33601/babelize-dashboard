interface Props {
  title: string;
  value: string;
}

const StatsCard = ({ title, value }: Props) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

export default StatsCard;