
import axios from 'axios';
const allItems = `/item`;
export const getItems=(setItem)=>{
  axios.get(allItems)
  .then((response) =>{
    setItem(response.data)
   return response.data} )
  .catch((error) => console.log(error));
}
 