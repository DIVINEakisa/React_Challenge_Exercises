export default function MainComponent(props) {
  return (
    <>
      <main>
        <div className="japan">
          <img src={props.img.src} alt={props.img.alt} />
          <div>
            <h1>{props.title}</h1>
            <h6>{props.date}</h6>
            <p>{props.text}</p>
          </div>
        </div>
      </main>
    </>
  );
}
