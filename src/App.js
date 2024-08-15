import React,{useEffect, useState}from "react";
import SearchForm from './Components/SearchForm';
import axios from "axios";
import GifList from "./Components/GifList";

function App() {
  
  const [gifs, setGifs] = useState([]);
  const [query, SetQuery] = useState("");
  
  useEffect(() => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=hLPLROMfJ5VdMETP2MersQGUYts5t8Bm&limit=24&rating=g`)
  .then(response=> {
    // handle success
    setGifs(response.data.data) 
  })
  .catch(error => {
    // handle error
    console.log("Error fetching and parsing data", error);
  })
   /* fetch("https://api.giphy.com/v1/gifs/trending?api_key=hLPLROMfJ5VdMETP2MersQGUYts5t8Bm&limit=24&rating=g")
    .then(response => response.json())
    .then(responseData => setGifs(responseData.data))
    .catch(error => console.log(cc));
    */
  },[query]);

  const handleQueryChange = searchText => {
    SetQuery(searchText)
  }

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm changeQuery = {handleQueryChange}/>
        </div>
      </div>
      <div className="main-content">
        <GifList data={gifs}/>
      </div>
    </div>
  );
}

export default App;
