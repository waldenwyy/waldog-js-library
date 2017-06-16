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