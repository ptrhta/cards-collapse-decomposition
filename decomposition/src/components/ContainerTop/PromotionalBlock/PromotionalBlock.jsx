import PropTypes from 'prop-types';

import './PromotionalBlock.css';

// Выводит рекламный блок - картинка, название, описание

export default function PromotionalBlock(props) {
    const promotional = props.promotional;

    return (
        <div className="promotionalBlock col">
            <img 
                src={promotional[0].img} 
                alt={promotional[0].title} 
                className="promotionalBlock-img" 
            />  
            <p className="promotionalBlock-title">
                {promotional[0].title}
            </p>
            <p className="promotionalBlock-description">
                {promotional[0].description}
            </p>
        </div>
    )
}

PromotionalBlock.propTypes = {
    Promotional: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    )
}