import './App.css';
import Header from './components/Header';
import CategoriesToDisplay from './components/CategoriesToDisplay';
import Slideshow from './components/Slideshow';



function App() {
  var categoryDisplay = [{
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

  var offerPosters=[
    {
        "id":1,
        "src":"https://static.photocdn.pt/images/articles/2017_1/iStock-467764294-1.webp",
        "alt":"Offer Name:1"
    },
    {
        "id":2,
        "src":"https://cdn.dribbble.com/users/1803663/screenshots/11400179/media/25558ede8bcb553fd48d7ed339e136ee.png?compress=1&resize=400x300",
        "alt":"Offer Name:2"
    },
    {
        "id":3,
        "src":"https://freerangestock.com/thumbnail/140669/baobab-tree-at-sunset--african-landscape--calm--relaxing--tr.jpg",
        "alt":"Offer Name:3"
    }
]
  return (
    <div className="App" >
      <Header/>
      <CategoriesToDisplay categoryDetail={categoryDisplay}/>
      <Slideshow offerPosters={offerPosters}/>
    </div>
  );
}

export default App;
