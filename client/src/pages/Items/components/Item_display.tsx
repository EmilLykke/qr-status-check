import "./Item_display.scss"
import { Link } from "react-router-dom";

type Props = {
    item: string,
    qr: string,
    uid: string,
    description: string,
    lastStatus: string,

}

function Item_display({item,qr,uid,description,lastStatus}: Props) {

    const date = new Date(lastStatus);

  return (<div className="item-grid-card">
    <Link className="card" to={"/items/"+uid}>
        <div className="card-details">
                <div className="card-details-img">
                    <img src={qr} alt=""/>
                </div>
                <div className="card-details-img">
                    <p className="text-title">{item}</p>
                </div>
            <div className="card-content">
                <div>
                    <p className="body-head">Description:</p>
                    <p className="text-body">{description}</p>
                </div>
                <div>
                <p className="body-head">Status:</p>
                <p className="text-body">{date.toDateString()}</p>
                </div>
            </div>
        </div>
        <button className="card-button">More info</button>
    
    </Link>
    </div>
    
  )
}

export default Item_display