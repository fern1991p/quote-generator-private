import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react';
import axios from "axios"

function App() {

//using state to update my userimput. Print will be deleted soon. 
  const [quote, setQuote] = useState(null)
  const [data,setData] = useState(null)
  const [print, setPrint] = useState(false)

//checking if my API is giving my quote. Will change to my localhost, once I start the server side. 
useEffect(()=>{
const getData = async () => {
     let response = await axios.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
setQuote(response.data)
}
getData()
}, [])


if (!quote){
return(
<h1> loading.. </h1>
)}


function getData(value){
setData(value.target.value)
setPrint(false)
}

//My quote generator. To be moved into a function. 
return (
<div>
<h1> Quote generator</h1>
<input type="text" onChange={getData}></input>
<button  onClick={()=>setPrint(true)}>Click Me!</button>
<div>
  {print?
    <h1> Dear, {data}  </h1>
    :null}
</div>
<div>
{quote.quotes[0].text}
</div>
</div>
  );
}
export default App;
