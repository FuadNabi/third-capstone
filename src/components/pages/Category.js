import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Category = (props) => {
  const navigate = useNavigate();

  const {
    category: {
      id, name, image,
    },
  } = props;

  return (
    <div className="category-container">
      <h5>{id}</h5>
      <img alt="Food" src={image} className="category-img" />
      <h3 className="food-name">{name}</h3>
      <button type="button" onClick={() => navigate(`/details/${name}`, { state: name })}>Details</button>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Category;
