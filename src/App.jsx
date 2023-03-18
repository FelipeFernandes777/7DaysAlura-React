import GlobalStyle from "./styles/GlobalStyle";
import Menu from "./components/Menu";

import { SectionPage } from "./styles/style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SectionPage>
        <Menu />
      </SectionPage>
    </div>
  );
}

export default App;
