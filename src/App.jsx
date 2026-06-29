import { useState } from "react";
import "./App.css";
import { data } from "./data.js";

export default function App() {
  const [episodeList, setEpisodeList] = useState(data);
  const [oneEpisodeId, setEpisodeId] = useState = useState(null);
  const selectedEpisodeId = episodeList.find((episode) => {
    return episode.id === selectedEpisodeId;
  });

  
}
