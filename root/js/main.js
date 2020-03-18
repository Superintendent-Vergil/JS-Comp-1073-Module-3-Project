//JS Doc

class vacationProperty{
    constructor(name,price,rating,location,rooms,availability,features) {
        //Intstance Variables
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.rooms = rooms;
        this.availability = availability;
        this.features = features;
    }
    //Method to display description of the property (should be able to be inherited)
    description() {
        let descriptionText="Name: " + this.name + "<br/>Price: $" + this.price + "<br/>Rating: " + this.rating + " Stars<br/> Location: "
            + this.location + "<br/>Rooms: " + this.rooms + "<br/>Availability: " + this.isAvailable() + "<br/>Features: " + this.features;
        console.log(descriptionText);
    };
    //Method that checks availability (should be able to be inherited)
    isAvailable(){
        if (this.availability){
            return "Open";
        }
        else if (!this.availability){
            return "Full";
        }
    }
}

//Create 2 vacationProperty objects
let propertyOne = new vacationProperty("One",26000,"4/5","Puntacana","3",
    Boolean(true),"???");
let propertyTwo = new vacationProperty("Two",47000,"5/5","Puntacana","7",
    Boolean(false),"???");

//Create an object template for Special Rate properties.
//Price is reduced by 20% of the regular price. Make a Method to calculate and show this value.
class specialRateProperty extends vacationProperty{
    constructor(name,price,type,rating,location,rooms,availability,features) {
        //Instance Variables
        super(name,price,rating,location,rooms,availability,features);
        this.type="Special Rate";
    }
    //Method to calculate and display specialRatePrice
    specialRateCalculate(){
        let specialRatePrice = price - (price*0.2);
    }
}

let specialPropertyOne = new specialRateProperty("SpecialOne", 30000, "Special Rate", "4/5", "Kokomo", "5", Boolean(true), "???");

//Create array to gather all properties
let propertyList = [];
//Push adds to an array
propertyList.push(propertyOne,propertyTwo,specialPropertyOne);

//Grab main
let main = document.querySelector('main');

//Loop through array and print each object's info to new elements
//Divide them with sections or divs
for(let i=0; i<propertyList.length; i++){
    //Create Elements
    let propertySection = document.createElement('section');
    propertySection.id = propertyList[i].name;
    let name_h2 = document.createElement('h2');
    let data_ul = document.createElement('ul');
    let price_li = document.createElement('li');
    let type_li = document.createElement('li');
    let rating_li = document.createElement('li');
    let location_li = document.createElement('li');
    let rooms_li = document.createElement('li');
    let availability_li = document.createElement('li');
    let features_li = document.createElement('li');

    //Populate Elements with data
    name_h2.textContent = (propertyList[i].name);
    price_li.textContent = (propertyList[i].price);
    type_li.textContent = (propertyList[i].type);
    rating_li.textContent = (propertyList[i].rating);
    location_li.textContent = (propertyList[i].location);
    rooms_li.textContent = (propertyList[i].rooms);
    availability_li.textContent = (propertyList[i].availability);
    features_li.textContent = (propertyList[i].features);

    //Append Elements

    propertySection.appendChild(name_h2);
    data_ul.appendChild(price_li);
    //If object has type property, display type
    if(propertyList[i]) {
        data_ul.appendChild(type_li);
    };
    data_ul.appendChild(rating_li);
    data_ul.appendChild(location_li);
    data_ul.appendChild(rooms_li);
    data_ul.appendChild(availability_li);
    data_ul.appendChild(features_li);
    propertySection.appendChild(data_ul);
    main.appendChild(propertySection);

    let coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}
