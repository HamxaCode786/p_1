import Layout from "./global/layout";
import HomePage from "./pages/homepage";
import {Routes, Route} from 'react-router-dom';
import Startsale from './pages/startsale';
import Loginpage from './pages/loginpage';
import Myadpage from './pages/myadpage';
import Inbox from './pages/inbox';
import Favourites from "./pages/favourites";
import Billings from './pages/billings';
import Profilesection from "./pages/profilesection";
import Sellerlist from './pages/sellerlist';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
//import { faBell, faInbox, faSquare } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (
    <div className="App">
      <Layout>
       
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/startsale" exact element={<Startsale />} />
          <Route path="/Loginpage" exact element={<Loginpage />} />
          <Route path="/myadpage" exact element={<Myadpage />} />
          <Route path="/inbox" exact element={<Inbox />} />
          <Route path="/favourites" exact element={<Favourites />} />
          <Route path="/billings" exact element={<Billings />} />
          <Route path="/profilesection" exact element={<Profilesection />} />
          <Route path="/sellerlist" exact element={<Sellerlist />} />
        
          
        </Routes>
      
      </Layout>
    </div>
  );
}

export default App;

