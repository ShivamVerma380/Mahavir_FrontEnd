import React  from "react";

function CategoriesToDisplay () {

    var categoryDetail = [{
        "id":1,
        "title": "Vedic Maths",
        "image": "https://i.ibb.co/kh08LcK/vedic-maths-card-image.jpg"
    },{
        "id":1,
        "title": "Vedic Maths",
        "image": "https://i.ibb.co/kh08LcK/vedic-maths-card-image.jpg"
    }]
    var cards = <div>
                    <img className="logo_mahavir" src={require ('../assets/images.jpg')} alt="Mandala" />
                </div>

    if(categoryDetail){
        cards = categoryDetail.map(index => {
            return(
                <div className="inline m-2">
                    <img src={index.image} alt={index.title} className="logo_mahavir" /> {index.title}
                </div>
            )
        })
    }
    return(
        <div className="inline">
            {cards}
        </div>
    )
}

export default CategoriesToDisplay;