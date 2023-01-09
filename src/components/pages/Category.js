import React from 'react';
import PropTypes from 'prop-types';

const Category = (props) => {
  const {
    category: {
      id, name, image,
    },
  } = props;

  return (
    <div className="category-container">
      <h5>{id}</h5>
      <h3>{name}</h3>
      <img alt="Food" src={image} className="category-img" />
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
