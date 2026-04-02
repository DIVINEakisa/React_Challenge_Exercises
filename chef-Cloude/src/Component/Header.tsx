export function Header(props) {
  return (
    <>
      <header className="head">
        <img src={props.img} alt="Image Of Chef" />
        <h1>{props.name}</h1>
      </header>
      <hr />
      <form action="#" method="POST" className="form">
        <input type="text" placeholder="e.g. oregano" />
        <button>+ Add ingredient</button>
      </form>
    </>
  );
}
