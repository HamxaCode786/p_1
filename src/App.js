import Layout from "./global/layout";
import HomePage from "./pages/homepage";
import {Routes, Route} from 'react-router-dom';
import Startsale from './pages/startsale';
import Loginpage from './pages/loginpage';
//import { faBell, faInbox, faSquare } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (
    <div className="App">
      <Layout>
       
        <Routes>
          
          <Route path="/" exact element={<HomePage />} />
          <Route path="/startsale" exact element={<Startsale />} />
          <Route path="/Loginpage" exact element={<Loginpage />} />
    
          
        </Routes>
      
      </Layout>
    </div>
  );
}

export default App;

