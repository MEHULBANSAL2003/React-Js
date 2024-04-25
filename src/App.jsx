import './App.css'
//importing title component..!!
//import Title from "./Title.jsx"
import ProductTab  from './ProductTab.jsx';
import MsgBox from './MsgBox.jsx';


// function Description(){
//   return <h3>I am the description</h3>
// }

function App() {  // this is our app component..!!
 

//  return <button>submit</button>  // whatever is written after return will be rendered and dislpayed on your screen

return( 
<>
 <MsgBox username="Mehul" textColor="yellow"/>
 <MsgBox username="bansal" textColor="blue"/>
 <ProductTab/>
</>
 
);
}

export default App
