import GlobalStyle from "./styles/GlobalStyle";
import Menu from "./components/Menu";
import Form from "./components/Form/Index";

import { SectionPage, MainContent } from "./styles/style";
import planta from "./assets/Home/imagem-hero 1.png";
import vetor from "./assets/Home/Vector.png";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <SectionPage style={{ position: "relative" }}>
        <img
          src={vetor}
          alt="Vector Amarelo"
          style={{
            position: "absolute",
            top: "0",
            right: "0rem",
            height: "65.5rem",
          }}
        />
        <Menu />
        <MainContent>
          <Form />
          <div
            style={{
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginLeft: "1.3rem",
            }}
          >
            <img
              src={planta}
              alt="Planta"
              style={{
                position: "relative",
                background: "transparent",
                height: "86rem",
              }}
            />
          </div>
        </MainContent>
      </SectionPage>
    </div>
  );
}

export default App;
