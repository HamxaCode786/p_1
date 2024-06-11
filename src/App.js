import Layout from "./global/layout";
import Homepage from "./pages/homepage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Layout>
      <Homepage />
      </Layout>
    </div>
  );
}

export default App;

