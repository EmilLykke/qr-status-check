import { useState } from "react";
import InputField from "./components/InputField";
import "./Create_item.scss"
import axios from "axios";
import { ReactSession }  from 'react-client-session';
import jwt_decode from "jwt-decode"; 

type Item = {
    username:string,
    item:string,
    description:string,
    lastStatus:Date,

}

function Create_item() {

    const [items, itemsSetState] = useState<Item>({
        username:"",
        item:"",
        description:"",
        lastStatus: new Date(),

    });


    function handleChange(e: any) {

        switch(e.target.id) {
            case "item":
                itemsSetState({
                    ...items,
                    item: e.target.value,
                });
                break
            case "description":
                itemsSetState({
                    ...items,
                    description: e.target.value,
                });
                break
            case "lastStatus":
                itemsSetState({
                    ...items,
                    lastStatus: new Date(e.target.value),
                });
                break
            default:
              // code block
          }
          
    }

    

    
    function handleSubmit(e: any) {
        e.preventDefault();

        const config = {
            headers:{
              Authorization: "Bearer " + ReactSession.get("accessToken"),
            }
          };


        const item = {
            username: JSON.parse(JSON.stringify(jwt_decode(ReactSession.get("accessToken")))).name,
            item: items.item,
            description: items.description,
            lastStatus: items.lastStatus,
        }
        // axios.post("http://localhost:5000/items/add", item).then((res: { data: any; }) => console.log(res.data));
        axios.post("http://localhost:5000/items/add", item,config);
        window.location.href = "/items";
      }
    return (
    <>
        <div className="create-form">
            <div>
            <InputField id="item" value={items.item} onChange={handleChange} />
            <InputField id="description" value={items.description} onChange={handleChange} />
            <InputField id="lastStatus" value={items.lastStatus} onChange={handleChange} />
            
            <div className="submit">
                <button className="but-sub" onClick={handleSubmit}>Create</button>
            </div>
            
            </div>
        </div>
    </>
    )
}

export default Create_item;

