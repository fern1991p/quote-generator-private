
import react, {
     useEffect,
     useState,
     createRef
 } from 'react';
import axios from "axios"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


 
 
 
 function App(){
   const [quote, setQuote] = useState(null)
   const [name, setName] = useState({name: null, show: false})

// conection with the backend 
     const getQuote = async () => {
         let response = await axios.get("http://localhost:5005/api/name")
         setQuote(response.data)
     }
 
 //function to generate my quote
 const myForm = () => {
     return ( 
         <div>
         <TextField id="outlined-basic" label="Name" variant="outlined" type="text" onChange={(e) => setName({value: e.target.value, show: false})}></TextField>
          <p/>
         <Button variant="contained" onClick={async ()=> {
             // getQuote()
             setName({value: name.value, show: true})
             let response = await axios.post("http://localhost:5005/api/name", {name: name.value})
             setQuote(response.data)
         }}>Click Me!</Button>
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
         <div> {myForm()} </div>
         <div> <h4> Dear {quote.quotes[0].author}, <p> {quote.quotes[0].text} </p><p> Regards, </p> Anonymous </h4>
         </div>
        
        </div> 
     );
 }
 
 export default App;