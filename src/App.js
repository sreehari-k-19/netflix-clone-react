
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Posts from './Components/Post/Posts';
import {originals,actions} from './Components/Constants/Urls'
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Posts  url={originals} title="Netflix Orginal"/>
      <Posts  url={actions} title="Actions" isSmall />
      <Footer/>
    </div>
  );
}

export default App;
