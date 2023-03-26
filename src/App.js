
import './App.css';
import Countris from './components/Countris/Countris';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Person from './components/Person/Person';


function App() {
  return (
    <div className="App">
     <Header></Header>
      <Countris></Countris>
      <Person></Person>
     <Footer></Footer>
    </div>
  );
}

export default App;
