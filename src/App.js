import Layout from "./global/layout";
import Homepage from "./pages/homepage";
import 'bootstrap/dist/css/bootstrap.min.css';


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
