// The following code has all the useful JS functions that Waldog wrote

//-get query string from URL 
var url_promo_check = window.location.href;
function getParameterByName(name, url) {
    if (!url) {
    url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var nodeID = getParameterByName('promo', url_promo_check);
//end get query string from URL

//-check object property and return value
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {

  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];//the other method to check property is myObj.checkProp but since the testing value has quotes, it can only use square brackets
  }else{
    return "Not Found";
  }
}
// Test your code by modifying these values
checkObj("gift");
//end check object property and return value

//-accessing nested objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];//use []when there's a space
//end accessing nested objects

//-accessing nested arrays
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

var secondTree = myPlants[1].list[1];
//end accessing nested arrays

//Nesting For Loops
function multiplyAll(arr) {
  var product = 1;

  for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    product*=arr[i][j];
  }
}
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);//output is 5040
//end Nesting For Loops


//profile lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    }
];


function lookUpProfile(firstName, prop){
  for (i=0;i<contacts.length;i++){
    if (contacts[i].firstName == firstName){
      if (contacts[i][prop]){
      return contacts[i][prop];
      }else{return "No such property";}
    }else if(i == contacts.length-1 && contacts[i].firstName !==firstName){
      return "No such contact";
    }
  }
}
lookUpProfile("Akira", "likes");
//end profile lookup

//Iterate over Arrays with map
var oldArray = [1,2,3,4,5];

var newArray = oldArray.map(function(val){
  return val + 3;
});
//End Iterate over Arrays with map


//Make Object Properties Private
var Car = function() {
  // this is a private variable
  var speed = 10;
  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };
  this.decelerate = function() {
    speed -= 5;
  };
  this.getSpeed = function() {
    return speed;
  };
};
var myCar = new Car();
myCar.accelerate(2);
myCar.decelerate();
myCar.getSpeed();//will get 7
//End Make Object Properties Private


//Condense arrays with reduce
var array = [4,5,6,7,8];
var singleVal = 0;
singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0); //will return 30
//End Condense arrays with reduce

//Filter Arrays with filter
var oldArray = [1,2,3,4,5,6,7,8,9,10];
var newArray = oldArray.filter(function(val){
  return val<6;
});
//End Filter Arrays with filter


//Sort Arrays with sort
var array = [1, 12, 21, 2];
array.sort(function(a,b){
  return b-a;//a-b will be 1,2,12,21
});//[21,12,2,1]
//End Sort Arrays with sort


//Concatenate Arrays with concat
var oldArray = [1,2,3];
var newArray = [];
var concatMe = [4,5,6];
newArray = oldArray.concat(concatMe); // [1,2,3,4,5,6]
//End Concatenate Arrays with concat