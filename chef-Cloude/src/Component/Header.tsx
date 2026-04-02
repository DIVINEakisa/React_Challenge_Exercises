import { useState } from "react";
function handleIngredients() {}
export function Header(props) {
  const [ingredients, setIngredient] = useState("");
  const [item, setItem] = useState();
  return (
    <>
      <header className="head">
        <img src={props.img} alt="Image Of Chef" />
        <h1>{props.name}</h1>
      </header>
      <hr />
      <form action="#" method="POST" className="form">
        <input type="text" placeholder="e.g. oregano" />
        <button
          onSubmit={() => {
            handleIngredients();
          }}
        >
          + Add ingredient
        </button>
      </form>
      <ul></ul>
    </>
  );
}
