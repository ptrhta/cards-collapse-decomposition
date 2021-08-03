import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import './Ether.css';

// Эфир - cписок с ссылками

export default function Ether(props) {
    const etherList = props.etherList;

    return (
        <div className="ether">
            <h2 className="title">Эфир</h2>
            <ul className="list">
            {etherList.map((item) =>
                <li key={uuid()}>
                    <a href={item.link} className="row ether-row">
                        <p className="ether-text text">
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

Ether.propTypes = {
    etherList: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        channel: PropTypes.string.isRequired
      })
    )
}