import { useEffect, useState } from "react"
import axios from "axios";
import Item_display from "./components/Item_display";
import "./Items.scss"
import { ReactSession }  from 'react-client-session';

type Props = {}
function Items({}: Props) {

  const [items, itemsSetState] = useState<any>([]);

  const url = "http://localhost:5000/items"
  
  // axios.get(url).then(data =>itemsSetState(data));
  // console.log(items);

  const config = {
    headers:{
      Authorization: "Bearer " + ReactSession.get("accessToken"),
    }
  };

  useEffect(() => {
    axios.get(url, config).then(data =>itemsSetState(data.data));
    }, [items])

  return (
    <>
    <div className="items-grid">
      {items.map((item: any)=>(<Item_display qr={item.qr} uid={item.uid} description={item.description} item={item.item} lastStatus={item.lastStatus} />))}
    </div>
    </>
  )
}

export default Items