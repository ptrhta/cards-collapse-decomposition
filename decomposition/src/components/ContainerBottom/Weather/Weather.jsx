import CloudIcon from '@material-ui/icons/Cloud';

import './Weather.css';

// Виджет с погодой

export default function Weather() {
    return (
        <div className="weather col">
            <h2 className="weather__title">Погода</h2>
            <div className="row">
            <   CloudIcon color="primary" fontSize="large" />
                <p className="weather__now">+17</p>
                <div className="col weather__col">
                    <p className="weather__more">Утром +17</p>
                    <p className="weather__more">Днем +20</p>
                </div>
            </div>
        </div>
    )
}