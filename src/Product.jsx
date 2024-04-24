// directly importing product.css using webpack that allows us to do so 
import "./Product.css";


function Product({title,price=1}){  // props as arguement with default values..!!
return (
<div className="Product">
    <h3>{title}</h3>
    <h5>Price:{price}</h5>
</div>

);

}



export default Product;