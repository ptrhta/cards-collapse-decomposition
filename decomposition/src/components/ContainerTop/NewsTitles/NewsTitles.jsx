import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import './NewsTitles.css';

// Выводит список новостей с иконкой

export default function NewsTitles(props) {
    const newsTitles = props.newsTitles;

    return (
        <ul className="newsTitles">
            {newsTitles.map((item) =>
                <li key={uuid()}>
                    <a href={item.link} className="row newsTitles-row">
                        <img alt="Канал" src={item.icon} className="newsTitles-icon" />
                        <p className="newsTitles-text">{item.text}</p>
                    </a>
                </li>
          )}
        </ul>
    )
}

NewsTitles.propTypes = {
    newsTitles: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
      })
    )
}