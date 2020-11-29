import s from './Statistic.module.css';
import Statistic from './Statistic';
import PropTypes from 'prop-types';

function StatisticItem({ title, stats }) {
  const colors = ['#F44336', '#4CAF50', '#2196F3', '#E91E63', '#607D8B'];
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map((item, index) => (
          <li
            className={s.item}
            key={item.id}
            style={{ backgroundColor: colors[index] }}
          >
            <Statistic label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticItem.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticItem;
