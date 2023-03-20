import GlobalStyle from "./styles/GlobalStyle";
import Menu from "./components/Menu";
import Form from "./components/Form/Index";

import { SectionPage, MainContent } from "./styles/style";
import planta from "./assets/Home/imagem-hero 1.png";
import vetor from "./assets/Home/Vector.png";
import Info from "./components/Info/Index";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <GlobalStyle />

      <SectionPage style={{ position: "relative" }}>
        <img
          src={vetor}
          alt="Vector Amarelo"
          style={{
            position: "absolute",
            top: "-5.42rem",
            right: "-5rem",
            height: "63.2rem",
          }}
        />
        <Menu />
        <MainContent style={{ overflow: "hidden" }}>
          <Form />
          <div style={{ overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", }}>
            <img
              src={planta}
              alt="Planta"
              style={{
                position: "relative",
                background: "transparent",
                height: "80rem",
                width: "80rem",
              }}
            />
          </div>
        </MainContent>
        <Info />
      </SectionPage>
    </div>
  );
}

export default App;
