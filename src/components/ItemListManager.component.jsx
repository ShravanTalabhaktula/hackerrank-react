import {useState} from "react";

function ItemListManagerComponent() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const handleAddItem = () => {
    if (typeof input === "string" && input.trim()) {
      setItems([...items, input]);
      setInput("");
    }
  }
  return (
    <>
      <h3>Item List Manager</h3>
      <input type={"text"} value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {
          items?.map((item, index) => {
            return (
              <>
                <li key={index}>{item}</li>
              </>
            )
          })
        }
      </ul>
    </>
  )
}

export default ItemListManagerComponent;