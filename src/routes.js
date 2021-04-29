import Home from "../views/home.js"
import Login from "../views/login.js"
//import login from "./views/login.js";

const firstPage = document.getElementById("first-page");

const routes = (route) => {
    firstPage.innerHTML = "";
    switch(route) {
        case "#/home":
            return firstPage.appendChild(Home());
        case "#/login":
            //return console.log(Login());
            return firstPage.appendChild(Login());
        default:
            return console.log("404!")
    }
}



export {routes};