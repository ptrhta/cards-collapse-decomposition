import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import './ServicesList.css';

//Выводит список сервисов Яндекса

export default function ServicesList(props) {
    const services = props.services;

    return (
        <ul className="servicesList row">
            {services.map((item) =>
                <li className="servicesList-text" key={uuid()}>
                    <a href={item.url}>
                        {item.text}
                    </a>
                </li>
          )}
          <li>
            <a href="#" className="servicesList-text">
                Еще
            </a>
          </li>
        </ul>
    )
}

ServicesList.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      )
}