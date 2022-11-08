import './App.css';
import Weather from './Components/Weather'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import logo from './logo.png'


function App() {
  const key = "a12c90f617c272b20f240ed03146f9d4"
  // const [isVisible, setIsVisible] = useState(true);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`)
        console.log(response)
        setCity(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getApi()
  }, [search]);
  console.log(search)
  return (
    <div className="container">
      <img src={logo} alt="Logo" style={{width : 250}} className="rounded mx-auto d-block"/>
      <div class="input-group input-group-lg mt-4 mx-auto" style={{width : 550}}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder='Enter the city' />
      </div>
      <div>
        <Weather city={city} />
      </div>
    </div>
  );
}

export default App;