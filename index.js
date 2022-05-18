import {navbar} from "./components/navbar.js";
import {getData, appendData} from "./script/fetchData.js"

let navbar_div = document.getElementById("navbar-container")

navbar_div.innerHTML = navbar()

let url = 'https://fakestoreapi.com/products'

let main_div = document.getElementById("main");

let data = await getData(url)
console.log(data)

appendData(data, main_div)

