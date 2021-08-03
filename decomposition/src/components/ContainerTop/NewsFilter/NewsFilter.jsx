import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import './NewsFilter.css';

// Компонент, отображающий заголовки в строку для переключения новостей

export default function NewsFilter(props) {
    const filters = props.filters;
    const selected = props.selected;
    const handleClickFilter = props.handleClickFilter;

    return (
        <ul className="newsFilter row">
            {filters.map((item) =>
            <li 
                key={uuid()}
                className={selected === item ? "filterItem filterItem--active" : "filterItem"}
                onClick={handleClickFilter}>
                    {item}
            </li>
          )}
        </ul>
    )
}

NewsFilter.propTypes = {
    filters:PropTypes.array.isRequired,
    selected:PropTypes.string.isRequired,
    handleClickFilter:PropTypes.func.isRequired
};