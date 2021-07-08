var path = location.pathname;
console.log(path);

var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");

if (path == '/') {

    a1.classList.remove("navbar");
    a1.classList.add("SelectOfThis");

} else if (path == '/languages/') {

    a2.classList.remove("navbar");
    a2.classList.add("SelectOfThis");

} else if (path == '/portfolio/') {

    a3.classList.remove("navbar");
    a3.classList.add("SelectOfThis");

}