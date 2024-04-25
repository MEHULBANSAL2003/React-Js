import Product from "./Product.jsx"
function ProductTab(){
    let options=[<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>];
 

return (
    <>
    <Product title="phone" price={20000} features={options}/>
    <Product title="laptop" price={50000}/>  
    {/* {2000} here price is treated as number..!! */}
    <Product title="pen" price={10}/>
    </>

);

}

export default ProductTab;