const menu = function(){
    const mainContent = document.getElementById("main-content")
    mainContent.innerHTML = ""

    const h2 = document.createElement("h1")
    h2.innerHTML = "Menu"
    mainContent.appendChild(h2)

    const menuContainer = document.createElement("div")
    menuContainer.setAttribute("id", "menu-container")
    mainContent.appendChild(menuContainer)

    const menuCard1 = document.createElement("div")
    menuCard1.classList.add("menu-card")
    menuContainer.appendChild(menuCard1)

    const menuText1 = document.createElement("p")
    menuText1.classList.add("menu-text")
    menuText1.innerHTML = "This is meaty spaghetti"
    menuCard1.appendChild(menuText1)
    
    const menuItem1 = document.createElement("img")
    menuItem1.setAttribute("src", "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg")
    menuItem1.setAttribute("alt", "spaghetti")
    menuCard1.appendChild(menuItem1)

    const menuCard2 = document.createElement("div")
    menuCard2.classList.add("menu-card")
    menuContainer.appendChild(menuCard2)

    const menuItem2 = document.createElement("img")
    menuItem2.setAttribute("src", "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg")
    menuItem2.setAttribute("alt", "spaghetti")
    menuCard2.appendChild(menuItem2)

    const menuText2 = document.createElement("p")
    menuText2.classList.add("menu-text")
    menuText2.innerHTML = "This is meaty spaghetti"
    menuCard2.appendChild(menuText2)
    
    const menuCard3 = document.createElement("div")
    menuCard3.classList.add("menu-card")
    menuContainer.appendChild(menuCard3)

    const menuText3 = document.createElement("p")
    menuText3.classList.add("menu-text")
    menuText3.innerHTML = "This is meaty spaghetti"
    menuCard3.appendChild(menuText3)

    const menuItem3 = document.createElement("img")
    menuItem3.setAttribute("src", "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg")
    menuItem3.setAttribute("alt", "spaghetti")
    menuCard3.appendChild(menuItem3)

    const menuCard4 = document.createElement("div")
    menuCard4.classList.add("menu-card")
    menuContainer.appendChild(menuCard4)

    const menuItem4 = document.createElement("img")
    menuItem4.setAttribute("src", "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg")
    menuItem4.setAttribute("alt", "spaghetti")
    menuCard4.appendChild(menuItem4)

    const menuText4 = document.createElement("p")
    menuText4.classList.add("menu-text")
    menuText4.innerHTML = "This is meaty spaghetti"
    menuCard4.appendChild(menuText4)

    const menuButton = document.getElementById("menu-button")
    menuButton.addEventListener("click", e =>{
        menu()
    })

}


export default menu