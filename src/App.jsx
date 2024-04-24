import './App.css'

//creating 1st component..
function Title(){
  return <h1>I am the title</h1>
}

function Description(){
  return <h3>I am the description</h3>
}

function App() {  // this is our app component..!!
 

//  return <button>submit</button>  // whatever is written after return will be rendered and dislpayed on your screen

return( 
<div>
<Title/>
<Description/>
<Title></Title>
<Description></Description>


 </div>
);
}

export default App
