import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Product = ({id, image, name, price}) => {
  const url = image && image.url

  return <article className='product'>
    <img src={url || "../../../assets/default-image.jpeg"} alt={name} />
    <h4>{name}</h4>
    <b>{price || 3.99}</b>

  </article>;
}

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

/* Product.defaultProps ={
  image: "../../../assets/default-image.jpeg",
  name: 'Default Name',
  price: 3.99,
} */

export default Product;
