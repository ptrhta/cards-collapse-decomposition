import PropTypes from 'prop-types';
export default function Card(props) {
    const ImgCard = ({img}) => img ? <img src={img} className="card-img-top" alt="img-card" /> : '';
    return (
        <div className="card">
            <ImgCard img={props.img} />
            {props.children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node
}