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
let propertyOne = new vacationProperty("Whala Bayahibe",1139,"4/5","Punta Cana","3",
    Boolean(true),"Fitness Centre, Outdoor Pools, Restaurants Available");
let propertyTwo = new vacationProperty("Acoya Curacao Resort",1609,"4/5","Curacao","7",
    Boolean(true),"Outdoor Pools, Pool Bar, Arcade, Room Service");

//Create an object template for Special Rate properties.
//Price is reduced by 20% of the regular price. Make a Method to calculate and show this value.
class specialRateProperty extends vacationProperty{
    constructor(name,price,rating,location,rooms,availability,features) {
        //Instance Variables
        super(name,price,rating,location,rooms,availability,features);
        this.type="Special Rate";
        this.priceSR = this.specialRateCalculate(this.price);
    }
    //Method to calculate and display specialRatePrice
    specialRateCalculate(price){
        let specialRatePrice = price - (price*0.2);
        return specialRatePrice;
    }
}

let specialPropertyOne = new specialRateProperty("Aston Waikiki Beach Hotel", 1846, "4/5",
    "Honolulu", "5", Boolean(false), "Wifi, Sauna, Pool Bar, Outdoor pools");

//Create array to gather all properties
let propertyList = [];
//Push adds to an array
propertyList.push(propertyOne,propertyTwo,specialPropertyOne);

//Loop through array and print each object's info to new elements
//Divide them with sections
for(let i=0; i<propertyList.length; i++){
    //Create Elements
    let propertySection = document.createElement('section');
    propertySection.id = propertyList[i].name;
    let name_h2 = document.createElement('h2');
    let data_ul = document.createElement('ul');
    let price_li = document.createElement('li');
    let priceSR_li = document.createElement('li');
    let type_li = document.createElement('li');
    let rating_li = document.createElement('li');
    let location_li = document.createElement('li');
    let rooms_li = document.createElement('li');
    let availability_li = document.createElement('li');
    let features_li = document.createElement('li');

    //Populate Elements with data
    name_h2.textContent = (propertyList[i].name);
    price_li.textContent = ("Price: $" + propertyList[i].price);
    priceSR_li.textContent = ("Special Rate Price (20% off): $" + propertyList[i].priceSR);
    type_li.textContent = ("Type: " + propertyList[i].type);
    rating_li.textContent = ("Rating: " + propertyList[i].rating);
    location_li.textContent = ("Location: " + propertyList[i].location);
    rooms_li.textContent = ("Rooms: " + propertyList[i].rooms);
    availability_li.textContent = ("Availability: " + propertyList[i].isAvailable());
    features_li.textContent = ("Features: " + propertyList[i].features);

    //Append Elements

    propertySection.appendChild(name_h2);
    data_ul.appendChild(price_li);
    //If object has special rate type property, display type and special rate price
    if(propertyList[i].type!=null) {
        data_ul.appendChild(priceSR_li);
        data_ul.appendChild(type_li);
    };
    data_ul.appendChild(rating_li);
    data_ul.appendChild(location_li);
    data_ul.appendChild(rooms_li);
    data_ul.appendChild(availability_li);
    data_ul.appendChild(features_li);
    propertySection.appendChild(data_ul);

    //Iterate through collapseBox list and append corresponding content to next Sibling div
    let propertyInfoBtn = document.getElementById('p'+[i+1]+'Btn');
    propertyInfoBtn.nextElementSibling.appendChild(propertySection);
    //Set collapsible title
    propertyInfoBtn.textContent = (propertyList[i].name);
}

/*Collapsible JS Code referenced from: https://www.w3schools.com/howto/howto_js_collapsible.asp*/

//Select all collapsibles
let collapseBox = document.getElementsByClassName("collapseBox");
//Iterate through collapseBoxs
for (let i = 0; i < collapseBox.length; i++) {
    //On Click, execute collapse function
    collapseBox[i].addEventListener("click", function () {
        //switch CSS active toggle
        collapseBox[i].classList.toggle("active");
        //Show or hide sibling div's content, switch display type to or from block
        let div = collapseBox[i].nextElementSibling;
        if (div.style.display === "block") {
            div.style.display = "none";
        }
        else {
            div.style.display = "block";
        }
    });
}
