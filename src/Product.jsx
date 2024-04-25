// directly importing product.css using webpack that allows us to do so 
import "./Product.css";
import PropTypes from "prop-types";


function Product({title,price,features=[]}){  // props as arguement with default values..!!
  const list = features.map((feature, index) => <li key={index}>{feature}</li>);

  //let discount=(price>30000)?"Discount: 5%":"";
   let style={backgroundColor:price>30000?"pink":""};
//console.log(list)
return (
<div className="Product" style={style}>
    <h3>{title}</h3> 
    <h5>Price:{price}</h5>
    <h5>{(price>30000)&&(<p>Discount of 5%</p>)}</h5>
    <p>{list}</p>

</div>

);

}

Product.propTypes = {
    title: PropTypes.string.isRequired, // Require 'title' prop as a string
    price: PropTypes.number, // Allow 'price' prop as a number, but it's optional
    features:PropTypes.array,
    
 
  };



export default Product;