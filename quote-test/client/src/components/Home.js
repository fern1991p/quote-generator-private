
import react, {
     useEffect,
     useState,
     createRef
 } from 'react';
 import axios from "axios"
 
 
 
 function App(){
   const [quote, setQuote] = useState(null)
   const [name, setName] = useState({name: null, show: false})
   
     const getQuote = async () => {
         let response = await axios.get("http://localhost:5005/api/name")
         setQuote(response.data)
     }
 
 
 const myForm = () => {
     return ( 
         <div>
         <h1> Quote generator</h1>
         <input type="text" onChange={(e) => setName({value: e.target.value, show: false})}></input>
         <button onClick={async ()=> {
             // getQuote()
             setName({value: name.value, show: true})
             let response = await axios.post("http://localhost:5005/api/name", {name: name.value})
             setQuote(response.data)
         }}>Click Me!</button>
         </div>
     )
 }
 
     useEffect(() => {
     //   getQuote()
     }, [])
 
     if(!quote) {
         return myForm()
     }
 
     return (
         <div>
         {myForm()}
             <h1> Dear,   {quote.quotes[0].author} </h1>
             
             <div>
                 {quote.quotes[0].text}
             </div>
         </div> 
     );
 }
 
 export default App;