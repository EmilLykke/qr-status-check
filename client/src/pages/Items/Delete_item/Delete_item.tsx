import axios from "axios";

type Props = {}

function Delete_item({}: Props) {


    const loc = window.location.pathname;
    const id = loc.substring(loc.lastIndexOf('/') + 1);

    const url = "http://localhost:5000/items/"+id;

    axios.delete(url).then(data =>console.log(data));

    window.location.href = "/items"

  return (
    <div>Delete_item</div>
  )
}

export default Delete_item;