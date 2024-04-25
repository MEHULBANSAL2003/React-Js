// directly importing product.css using webpack that allows us to do so 
import "./Product.css";
import PropTypes from "prop-types";


function Product({title,price,features}){  // props as arguement with default values..!!
return (
<div className="Product">
    <h3>{title}</h3>
    <h5>Price:{price}</h5>
    <h5>Features:{features}</h5>

</div>

);

}

Product.propTypes = {
    title: PropTypes.string.isRequired, // Require 'title' prop as a string
    price: PropTypes.number, // Allow 'price' prop as a number, but it's optional
    features:PropTypes.array,
    
 
  };



export default Product;