import { useState } from "react";
import InputField from "./components/InputField";
import "./Create_item.scss"
import axios from "axios";

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
            case "username":
                itemsSetState({
                    ...items,
                    username: e.target.value,
                });
                break;
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

        const item = {
            username: items.username,
            item: items.item,
            description: items.description,
            lastStatus: items.lastStatus,
        }

        // axios.post("http://localhost:5000/items/add", item).then((res: { data: any; }) => console.log(res.data));
        axios.post("http://localhost:5000/items/add", item);
        window.location.href = "/items";
      }
    return (
    <>
        <div className="create-form">
            <div>
            <InputField id="username" value={items.username} onChange={handleChange} />
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

