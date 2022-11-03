const home = function(){
    const img = document.createElement("img")
    img.setAttribute("src", "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg")
    img.setAttribute("alt", "spaghetti")
    content.appendChild(img)

    const p = document.createElement("p")
    p.innerHTML = "This restaurant is cool"
    content.appendChild(p)
}

export default home