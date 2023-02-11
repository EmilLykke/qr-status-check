import axios from "axios";
import { ReactSession }  from 'react-client-session';



function Delete_item() {
  const config = {
    headers:{
      Authorization: "Bearer " + ReactSession.get("accessToken"),
    }
  };

    const loc = window.location.pathname;
    const id = loc.substring(loc.lastIndexOf('/') + 1);

    const url = "http://localhost:5000/items/"+id;

    axios.delete(url,config).then(data =>console.log(data));

    window.location.href = "/items";

  return (
    <div>Delete_item</div>
  )
}

export default Delete_item;