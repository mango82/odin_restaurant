const header = function(){
    const content = document.getElementById("content")
    const header = document.createElement("header")
    content.appendChild(header)

    const h1 = document.createElement("h1")
    h1.innerHTML = "My Restaurant"
    header.appendChild(h1)
    
    const nav = document.createElement("nav")
    header.appendChild(nav)

    const homeButton = document.createElement("button")
    homeButton.innerHTML = "Home"
    homeButton.setAttribute("id", "home-button")
    nav.appendChild(homeButton)

    const menuButton = document.createElement("button")
    menuButton.innerHTML = "Menu"
    menuButton.setAttribute("id", "menu-button")
    nav.appendChild(menuButton)

    const contactButton = document.createElement("button")
    contactButton.innerHTML = "Contact"
    contactButton.setAttribute("id", "contact-button")
    nav.appendChild(contactButton)

    const mainContent = document.createElement("div")
    mainContent.setAttribute("id", "main-content")
    content.appendChild(mainContent)
}
export default header