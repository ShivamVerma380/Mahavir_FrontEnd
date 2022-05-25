const ProductDetails = () => {
        // let name = localStorage.getItem("Name")
        // var storedProduct = JSON.parse(localStorage.getItem("product"))
        // var id = storedProduct[0].id

        var products=[
            {
                "id":1,
                "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
                "alt":"Offer Name:1",
                "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
                "price":19999,
                "description":"OxygenOS based on Android™ 12"
            },{
              "id":2,
              "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
              "alt":"Offer Name:2",
              "title":"OnePlus 10 Pro 5G (8 GB RAM, 128 GB ROM, Volcanic Black",
              "price":65999,
              "description":"OxygenOS based on Android™ 12"
          },{
            "id":3,
            "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
            "alt":"Offer Name:3",
            "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
            "price":19999,
            "description":"OxygenOS based on Android™ 12"
          }, {
            "id":4,
            "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
            "alt":"Offer Name:1",
            "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
            "price":19999,
            "description":"OxygenOS based on Android™ 12"
          },{
            "id":5,
            "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
            "alt":"Offer Name:2",
            "title":"OnePlus 10 Pro 5G (8 GB RAM, 128 GB ROM, Volcanic Black",
            "price":65999,
            "description":"OxygenOS based on Android™ 12"
          },{
            "id":6,
            "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
            "alt":"Offer Name:3",
            "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
            "price":19999,
            "description":"OxygenOS based on Android™ 12"
          }, {
            "id":7,
            "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
            "alt":"Offer Name:1",
            "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
            "price":19999,
            "description":"OxygenOS based on Android™ 12"
          },{
          "id":8,
          "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
          "alt":"Offer Name:2",
          "title":"OnePlus 10 Pro 5G (8 GB RAM, 128 GB ROM, Volcanic Black",
          "price":65999,
          "description":"OxygenOS based on Android™ 12"
          },{
          "id":9,
          "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
          "alt":"Offer Name:3",
          "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
          "price":19999,
          "description":"OxygenOS based on Android™ 12"
          }
          ]

    const listItems = products.map(
        (element) => {
            return (
                <ul type="disc">
                    <li style={{ 
                        fontWeight: 'bold', 
                        color: 'red' }}
                    >
                        {element.id}
                    </li>
                    <li>{element.title}</li>
                </ul>
            )
        }
    )
    return(
        <div>
            {listItems}
        </div>
        
    );
}

export default ProductDetails;