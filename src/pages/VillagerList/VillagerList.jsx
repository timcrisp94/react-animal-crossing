import { useState, useEffect } from "react";
import Villager from "../../components/Villager/Villager";
import { getVillagers } from '../../services/api-calls'


const VillagerList = (props) => {
  const [villagers, setVillagers] = useState([])

  useEffect(() => {
    getVillagers()
    .then(villagerData => console.log(villagerData))
  })
  return ( 
    <>
      <h2>Villager List</h2>
    </>

   );
}
 
export default VillagerList;