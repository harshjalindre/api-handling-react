import PropTypes  from 'prop-types';

const Cards = ({title, description, images}) => {
  return (
    <>
        <div className="card">
            <img src={images} alt="Image 1" className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    </>
  )
}

Cards.propTypes = {
    title : PropTypes.string,
    description : PropTypes.string,
    images : PropTypes.string,
}

export default Cards