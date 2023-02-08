import { useState } from "react";
import InputField from "./components/InputField";
import "./Create_item.scss"
import axios from "axios";

type Item = {
    username:string,
    item:string,
    qr:string,
    description:string,
    lastStatus:Date,

}
type Props = {


}

function Create_item({}: Props) {

    const list = ["username", "item", "qr","description","lastStatus"]

    const [items, itemsSetState] = useState<Item>({
        username:"",
        item:"",
        qr:"",
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
            case "qr":
                itemsSetState({
                    ...items,
                    qr: e.target.value,
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
            qr: items.qr,
            description: items.description,
            lastStatus: items.lastStatus,
        }
        axios.post("http://localhost:5000/items/add", item).then((res: { data: any; }) => console.log(res.data));
        console.log(item);
        // window.location.href = "/items";
      }
    return (
    <>
        <div className="create-form">
            <div>
            <InputField id="username" value={items.username} onChange={handleChange} />
            <InputField id="item" value={items.item} onChange={handleChange} />
            <InputField id="qr" value={items.qr} onChange={handleChange} />
            <InputField id="description" value={items.description} onChange={handleChange} />
            <InputField id="lastStatus" value={items.lastStatus} onChange={handleChange} />
            
            <div className="submit">
                <button onClick={handleSubmit}>Create</button>
            </div>
            
            </div>
        </div>
    </>
    )
}

export default Create_item;

