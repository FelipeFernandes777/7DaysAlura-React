import GlobalStyle from "./styles/GlobalStyle";
import Menu from "./components/Menu";
import Form from "./components/Form/Index";

import { SectionPage, MainContent } from "./styles/style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SectionPage>
        <Menu />
        <MainContent>
          <Form />
        </MainContent>
      </SectionPage>
    </div>
  );
}

export default App;
