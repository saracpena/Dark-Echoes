import { useState } from "react";
import "./App.css";
import { episodeList } from "./data.js";

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
  // React's Memory (State)

  // React asks:
  // "What information do you want me to remember?"
  //
  // Answer:
  // The list of episodes.
  //
  // React asks:
  // "What should they be when the app FIRST loads?"
  //
  // Answer:
  // Use the episodeList imported from data.js.
  //
  // React will now remember this list as "episodes."
  const [episodes, setEpisodes] = useState(episodeList);
  // React asks:
  // "Is there anything else I should remember?"
  //
  // Answer:
  // Which episode the user has selected.
  //
  // null means:
  // "No episode has been selected yet."
  //
  // As the user clicks different episodes,
  // React will update this value.
  const [selectedEpisodeId, setselectedEpisodeId] = useState(null);
  // This is NOT state.
  //
  // This is DERIVED DATA.
  //
  // In plain English:
  // "Go look through the episodes React is remembering
  // and return the episode whose id matches
  // selectedEpisodeId."
  const selectedEpisode = episodes.find((episode) => {
    return episode.id === selectedEpisodeId;
  });

  const handleSelect = (id) => {
    //use ananymous function for eventhandler...why? to avoid it being called on its own it
    //basically prevents the onClick to get called until the user CLICKS on it
    if (selectedEpisodeId === id) {
      setselectedEpisodeId(null);
    } else {
      setselectedEpisodeId(id);
    }
  };

  return (
    <div>
      <h1>Episode Guide</h1>
      <ul>
        {episodes.map((episode) => {
          //!react has something when you map through something it requires a KEY
          return (
            <li
              key={episode.id}
              className={selectedEpisodeId === episode.id ? "selected" : ""}
            >
              {episode.title}
              <button onClick={() => handleSelect(episode.id)}>
                {selectedEpisodeId === episode.id ? "Unselect" : "Select"}
              </button>
            </li>
          );
        })}
        ;
      </ul>
      {selectedEpisode ? (
        <section>
          <h2>
            Episode {selectedEpisode.id}: {selectedEpisode.title}
          </h2>
          <p>{selectedEpisode.description}</p>
        </section>
      ) : (
        <h2>Please select an episode</h2>
      )}
    </div>
  );
}
