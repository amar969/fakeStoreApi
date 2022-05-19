import { navbar } from "./components/navbar.js";
import {getData, appendData} from "./script/fetchData.js";

let navbar_div = document.getElementById("navbar-container")
navbar_div.innerHTML = navbar()

let url = "https://fakestoreapi.com/products/category/electronics"

let data = await getData(url)

let main_div = document.getElementById("main")

appendData(data, main_div)


