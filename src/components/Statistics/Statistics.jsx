import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>Upload stats</h2>)}
            <ul className={css.statList}>
                {stats.map(({id, label, percentage}) => (
                    <li className={css.item} key={id} style={{backgroundColor: getRandomHexColor()}}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,})) 
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}