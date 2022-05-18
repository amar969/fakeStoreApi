import { navbar } from "./components/navbar.js";
import { getData, appendData } from "./script/fetchData.js";

let url = 'https://fakestoreapi.com/products/category/jewelery'

let main_div = document.getElementById("main")

main_div.innerHTML = navbar()

let data = await getData(url)

console.log(data)

appendData(data, main_div)