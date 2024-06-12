import Layout from "./global/layout";
import HomePage from "./pages/homepage";
import {Routes, Route} from 'react-router-dom';
import Startsale from "./pages/startsale";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/startsale" exact element={<Startsale />} />
       </Routes>
      </Layout>
    </div>
  );
}

export default App;

