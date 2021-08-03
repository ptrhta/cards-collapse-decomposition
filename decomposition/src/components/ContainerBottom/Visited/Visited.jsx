import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import './Visited.css';

// Посещаемое - cписок с ссылками

export default function Visited(props) {
    const visitedList = props.visitedList;

    return (
        <div className="visited">
            <h2 className="title">Посещаемое</h2>
            <ul className="visited-list">
            {visitedList.map((item) =>
                <li key={uuid()}>
                    <a href={item.link} className="row visited-row">
                        <p className="visited-text text"><span>{item.title}</span> - {item.description}</p>
                    </a>
                </li>
            )}
            </ul>
        </div>
    )
}

Visited.propTypes = {
    visitedList: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    )
}