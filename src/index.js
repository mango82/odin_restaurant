const content = document.getElementById("content")

const h1 = document.createElement("h1")
h1.innerHTML = "My Restaurant"
content.appendChild(h1)

const header = document.createElement("nav")
content.appendChild(header)

const homeButton = document.createElement("button")
homeButton.innerHTML = "Home"
homeButton.setAttribute("id", "home-button")
header.appendChild(homeButton)

const menuButton = document.createElement("button")
menuButton.innerHTML = "Menu"
menuButton.setAttribute("id", "menu-button")
header.appendChild(menuButton)

const contactButton = document.createElement("button")
contactButton.innerHTML = "Contact"
contactButton.setAttribute("id", "contact-button")
header.appendChild(contactButton)

const img = document.createElement("img")
img.setAttribute("src", "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg")
img.setAttribute("alt", "spaghetti")
content.appendChild(img)

const p = document.createElement("p")
p.innerHTML = "This restaurant is cool"
content.appendChild(p)
