import { useState } from "react";
import "./App.css";
import { data, episodeList } from "./data";

export default function App() {
  // State or in plain english "REACT'S MEMORY"
  /** 
   * episodes = the current value React is remembering
     setEpisodes = the function used to change that list
     episodeList = the starting data from data.js
So therefore,
     const [episodes, setEpisodes] = useState(episodeList); 
     
  //* React asks:

  * ?What data should I keep track of?

    *!You answer: Episodes.

  // * React asks:

*   ?What should they be when the app first starts?

  *!You answer: The array from data.js which is "episodeList"

  //* So React internally remembers

    episodes

      ↓

    episodeList
    
    *! React only cares about the initial value/state */
  
  const [episodes, setEpisodes] = useState(episodeList);
  const [selectedEpisodeId, setselectedEpisodeId] = useState(null);
  // Derived data
  const selectedEpisode = episodeList.find((episode) => {
    return episode.id === selectedEpisodeId;
  });



}
