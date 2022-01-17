import './App.css';
import react, {
    useEffect,
    useState,
    createRef
} from 'react';
import axios from "axios"


function App() {
  const [quote, setQuote] = useState(null)
  const [name, setName] = useState({name: null, show: false})
 
// Finishing up client side, then get my API from my server.
    const getQuote = async () => {
        let response = await axios.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
        setQuote(response.data)
    }

    useEffect(() => {
      getQuote()
    }, [])

    if (!quote) {
        return ( 
            <h1> loading... </h1>
        )
    }

    console.log(name)

    return (
        <div>
            <h1> Quote generator</h1>
            <input type="text" onChange={(e) => setName({value: e.target.value, show: false})}></input>
            <button onClick={()=> {
                getQuote()
                setName({value: name.value, show: true})
            }}>Click Me!</button>
            <div>
            <h1> Dear,  {(name.show ? name.value : '')} </h1>
            </div>
            <div>
                <h1> {quote.quotes[0].text} </h1>
            </div>
        </div> 
    );
}

export default App;
