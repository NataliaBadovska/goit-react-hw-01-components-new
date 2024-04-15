import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
    
    return <section className={css.statistics}>
        {title !== undefined && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(stat =>
              <li key={stat.id} className={css.item}>
                <span className={css.label}>{ stat.label }</span>
                <span className="percentage">{ stat.percentage }</span>
              </li> )}
     </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}
 