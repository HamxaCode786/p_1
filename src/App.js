import Layout from "./global/layout";
import Homepage from "./pages/homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/responsive.css';


function App() {
  return (
    <div className="App">
      <Layout>
      <Homepage />
      </Layout>
    </div>
  );


  return (
    <div className="container">
      <button className="custom-button">Click Me</button>
    </div>

  );
}

export default App;

