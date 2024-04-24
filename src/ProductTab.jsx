import Product from "./Product.jsx"
function ProductTab(){

return (
    <>
    <Product title="phone" price="20000"/>
    <Product title="laptop" price={50000}/>  
    {/* {2000} here price is treated as number..!! */}
    <Product title="pen"/>
    </>

);

}

export default ProductTab;