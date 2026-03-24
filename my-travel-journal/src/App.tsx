import { Headers } from "./components/Header";
import MainComponent from "./components/Main";
import "./App.css";

function App() {
  return (
    <>
      <Headers title="my travel journal" />
      <MainComponent
        title="Mount Fuji"
        img={{
          src: "https://scrimba.com/links/travel-journal-japan-image-url",
          alt: "Japan",
        }}
        date="12 Jan,2023 - 24 Jan, 2023"
        text={`Mount Fuji is the tallest mountain in Japan, standing at 3,776
              (12,380 feet). Mount Fuji is the single most popular tourist
              site in Japan, for both Japanese and foreign tourists.`}
      />
      <MainComponent
        title="Sydney Opera House"
        img={{
          src: "https://scrimba.com/links/travel-journal-australia-image-url",
          alt: "Australia",
        }}
        date="27 May, 2023 - 8 Jun, 2023"
        text={`The Sydney Opera House is a multi-venue performing arts centre in
              Sydney. Located on the banks of the Sydney Harbour, it is often
              regarded as one of the 20th century's most famous and distinctive
              
              buildings.`}
      />

      <MainComponent
        title="Geirangerfjord"
        img={{
          src: "https://scrimba.com/links/travel-journal-norway-image-url",
          alt: "Norway",
        }}
        date="01 Oct, 2024 - 18 Nov, 2024"
        text={`The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og
              Romsdal county, Norway. It is located entirely in the Stranda
              Municipality.`}
      />
    </>
  );
}

export default App;
