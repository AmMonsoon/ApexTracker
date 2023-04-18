import { useEffect, useState } from  'react'
import axios from 'axios'


const PlayerList = () => {
   const [players, setPlayers] = useState([])

 
    useEffect(() => {
      getPlayers()
    },[])

  

  const getPlayers = () => {
    axios.get(`https://api.mozambiquehe.re/leaderboard?auth=YOUR_API_KEY&legend=LEGEND&key=KEY&platform=PLATFORM`)
         .then((res) => {
          setPlayers(res)
          console.log(players)
         })
         .catch((err => console.error(err)))
  }

    return (
      <div className="player-list">
        Player List
      </div>
    );
}

export default PlayerList;