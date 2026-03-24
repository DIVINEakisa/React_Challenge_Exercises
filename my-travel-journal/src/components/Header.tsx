import Path from "../assets/Path.png";
export function Headers(props) {
  return (
    <>
      <nav>
        <img src={Path} alt="my travel" className="image" />
        <span className="travel">{props.title}</span>
      </nav>
    </>
  );
}
