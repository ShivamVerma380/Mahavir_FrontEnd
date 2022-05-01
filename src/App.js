import './App.css';
import Header from './components/Header';
import CategoriesToDisplay from './components/CategoriesToDisplay';
import Slideshow from './components/Slideshow';
import Product from './components/Product';



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
var products=[
  {
      "id":1,
      "src":"https://static.photocdn.pt/images/articles/2017_1/iStock-467764294-1.webp",
      "alt":"Offer Name:1",
      "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
      "price":19999,
      "description":"OxygenOS based on Android™ 12"
  },{
    "id":2,
    "src":"https://static.photocdn.pt/images/articles/2017_1/iStock-467764294-1.webp",
    "alt":"Offer Name:2",
    "title":"OnePlus 10 Pro 5G (8 GB RAM, 128 GB ROM, Volcanic Black",
    "price":65999,
    "description":"OxygenOS based on Android™ 12"
},{
  "id":3,
  "src":"https://static.photocdn.pt/images/articles/2017_1/iStock-467764294-1.webp",
  "alt":"Offer Name:3",
  "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
  "price":19999,
  "description":"OxygenOS based on Android™ 12"
}, {
  "id":4,
  "src":"https://static.photocdn.pt/images/articles/2017_1/iStock-467764294-1.webp",
  "alt":"Offer Name:1",
  "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
  "price":19999,
  "description":"OxygenOS based on Android™ 12"
},{
  "id":5,
  "src":"https://static.photocdn.pt/images/articles/2017_1/iStock-467764294-1.webp",
  "alt":"Offer Name:2",
  "title":"OnePlus 10 Pro 5G (8 GB RAM, 128 GB ROM, Volcanic Black",
  "price":65999,
  "description":"OxygenOS based on Android™ 12"
},{
  "id":6,
  "src":"https://static.photocdn.pt/images/articles/2017_1/iStock-467764294-1.webp",
  "alt":"Offer Name:3",
  "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
  "price":19999,
  "description":"OxygenOS based on Android™ 12"
}, {
  "id":7,
  "src":"https://static.photocdn.pt/images/articles/2017_1/iStock-467764294-1.webp",
  "alt":"Offer Name:1",
  "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
  "price":19999,
  "description":"OxygenOS based on Android™ 12"
},{
"id":8,
"src":"https://static.photocdn.pt/images/articles/2017_1/iStock-467764294-1.webp",
"alt":"Offer Name:2",
"title":"OnePlus 10 Pro 5G (8 GB RAM, 128 GB ROM, Volcanic Black",
"price":65999,
"description":"OxygenOS based on Android™ 12"
},{
"id":9,
"src":"https://static.photocdn.pt/images/articles/2017_1/iStock-467764294-1.webp",
"alt":"Offer Name:3",
"title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
"price":19999,
"description":"OxygenOS based on Android™ 12"
}
]

  return (
    <div className="App" >
      <Header/>
      <CategoriesToDisplay categoryDetail={categoryDisplay}/>
      <Slideshow offerPosters={offerPosters}/>
      <Product title="Mahavir Special" productList={products}/>
      <Product title="God" productList={products}/>
    </div>
  );
}

export default App;
