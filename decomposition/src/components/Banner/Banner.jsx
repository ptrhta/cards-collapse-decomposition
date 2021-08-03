import PropTypes from 'prop-types';

//Баннер

export default function Banner(props) {
    const promo = props.promo;

    return (
        <img className="banner" src={promo} />
    )
}

Banner.propTypes = {
    promo: PropTypes.string.isRequired
}