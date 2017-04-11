// The following code has all the useful JS functions that Waldog wrote

//get query string from URL 
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