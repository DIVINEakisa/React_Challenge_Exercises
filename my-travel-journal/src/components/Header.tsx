import Path from "./src/assets/Path.png";
export function Headers() {
  return (
    <>
      <nav>
        <img src={Path} alt="my travel" className="image" />
        <span className="travel">my travel journal</span>
      </nav>
    </>
  );
}
