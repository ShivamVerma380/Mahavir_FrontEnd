import './App.css';
import Header from './components/Header';
import CategoriesToDisplay from './components/CategoriesToDisplay';



function App() {
  var cd = [{
    "id":1,
    "title": "Mobile",
    "image": "https://i.ibb.co/kh08LcK/vedic-maths-card-image.jpg"
  },{
    "id":2,
    "title": "Laptop",
    "image": "https://i.ibb.co/kh08LcK/vedic-maths-card-image.jpg"
  },{
    "id":3,
    "title":"Televisions",
    "image":"https://i.ibb.co/kh08LcK/vedic-maths-card-image.jpg"
  },{
    "id":4,
    "title":"Air Conditioners",
    "image":"https://i.ibb.co/kh08LcK/vedic-maths-card-image.jpg"
  }]
  return (
    <div className="App" >
      <Header/>
      <CategoriesToDisplay categoryDetail={cd}/>
    </div>
  );
}

export default App;
