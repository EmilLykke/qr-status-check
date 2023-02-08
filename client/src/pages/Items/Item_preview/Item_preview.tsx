import axios from "axios";
import { useEffect, useState } from "react";

type Props = {}

function Item_preview({}: Props) {


    const [item, itemSetState] = useState({
        username: "",
        item: "",
        uid: "",
        qr: "",
        description: "",
        lastStatus: "",
    });

    const loc = window.location.pathname;
    const id = loc.substring(loc.lastIndexOf('/') + 1);

    const url = "http://localhost:5000/items/"+id;
    
    // axios.get(url).then(data =>itemsSetState(data));
    // console.log(item);
    useEffect(() => {
      axios.get(url).then(data =>itemSetState(data.data));
      }, [])

    


  return (
    <div>
        <img src={item.qr}></img>
        <h1>{item.item}</h1>
        <h1>{item.description}</h1>
        <h1>{new Date(item.lastStatus).toDateString()}</h1>
        <h1>{item.username}</h1>

    </div>
  )
}

export default Item_preview;