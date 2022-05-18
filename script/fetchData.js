const getData = async(url) => {
    try{
        let res = await fetch(url)
        let data = await res.json()

        return data
    }

    catch(err){
        console.log(err)
    }
}

const appendData = (data, parentNode) => {
    data.forEach((el) => {
        let card = document.createElement("div")

        let imgElement = document.createElement("img")
        imgElement.src = el.image;

        let titleElement = document.createElement("p")
        titleElement.innerHTML = el.title
        
        let priceElement = document.createElement("p")
        priceElement.innerHTML = el.price

        card.append(imgElement, titleElement, priceElement)

        parentNode.append(card)
    });
}

export {getData, appendData}