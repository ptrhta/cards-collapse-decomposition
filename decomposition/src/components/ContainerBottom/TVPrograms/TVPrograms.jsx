import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import './TVPrograms.css';

// Телепрограмма - cписок с ссылками

export default function TVPrograms(props) {
    const programsList = props.programsList;

    return (
        <div className="tvPrograms">
            <h2 className="title">Телепрограмма</h2>
            <ul className="list">
            {programsList.map((item) =>
                <li key={uuid()}>
                    <a href={item.link} className="row tvPrograms-row">
                        <p className="tvPrograms-text text">
                            <span>{item.time}</span>
                            <span>{item.title}</span>
                            <span className="text-gray">{item.channel}</span>
                        </p>
                    </a>
                </li>
            )}
            </ul>
        </div>
    )
}

TVPrograms.propTypes = {
    programsList: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        channel: PropTypes.string.isRequired
      })
    )
}