import Product from "./Product.jsx"
function ProductTab(){
    //let options=["hi-tech","durable","fast"];
 

return (
    <>
    <Product title="phone" price={20000} features={["hi-tech","durable"]}/>
    <Product title="laptop" price={50000}/>  
    {/* {2000} here price is treated as number..!! */}
    <Product title="pen" price={10}/>
    </>

);

}

export default ProductTab;