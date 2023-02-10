import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Item_preview.scss"



function Item_preview() {


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
      })

    


  return (
    <div className="item-preview-container">
        <div className="item-preview-content">
          <div className="content-img">
            <img src={item.qr} alt=""/>
          </div>
          
          <h1 className="header">{item.item}</h1>
          
          <div className="content-data">
          
            <div className="content-text">
              <div>
            <h3>Description:</h3>
            <p>{item.description}</p>
            </div>
            </div>
          
            <div className="content-text">
              <div>
            <h3>Last Status:</h3>
            <p>{new Date(item.lastStatus).toDateString()}</p>
            </div>
            </div>

            <div className="content-text">
              <div>
            <h3>Last status by: </h3>
            <p>{item.username}</p>
            </div>
            </div>
          </div>
          <div className="content-data">
          
            <div className="content-text buts">
            <Link className="but-edit" to={"/items/update/"+id}>Edit</Link>
            </div>
          
            <div className="content-text">
            
            </div>

            <div className="content-text buts">
            <Link className="but-del" to={'/items/delete/'+id}>Delete</Link>
            </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default Item_preview;