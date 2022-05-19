import { navbar } from "./components/navbar.js";
import { getData, appendData } from "./script/fetchData.js";

let url = 'https://fakestoreapi.com/products/category/jewelery'

let navbar_div = document.getElementById("navbar-container")

let main_div = document.getElementById("main")

navbar_div.innerHTML = navbar()

let data = await getData(url)

console.log(data)

appendData(data, main_div)