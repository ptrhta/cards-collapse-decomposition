import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import './Rates.css';

// Вывод курса валют

export default function Rates(props) {
    const rates = props.rates;

    return (
        <div className="rates row">
        {rates.map((item) =>
            <p key={uuid()} className="rates-item">
                <span className="rates-currency">
                    {item.currency}
                </span>
                <span className="rates-rate">
                    {item.rate}
                </span>
                <span className="text-gray">
                    {item.growth}
                </span>
            </p>
          )}
        </div>
    )
}

Rates.propTypes = {
    rates: PropTypes.arrayOf(
      PropTypes.shape({
        currency: PropTypes.string.isRequired,
        rate: PropTypes.string.isRequired,
        growth: PropTypes.string.isRequired
      })
    )
}