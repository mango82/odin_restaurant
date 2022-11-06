const menu = function(){
    const mainContent = document.getElementById("main-content")
    mainContent.innerHTML = ""

    const menuItem1 = document.createElement("img")
    menuItem1.setAttribute("src", "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg")
    menuItem1.setAttribute("alt", "spaghetti")
    mainContent.appendChild(menuItem1)

    const menuItem2 = document.createElement("img")
    menuItem2.setAttribute("src", "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg")
    menuItem2.setAttribute("alt", "spaghetti")
    mainContent.appendChild(menuItem2)
    
    const menuItem3 = document.createElement("img")
    menuItem3.setAttribute("src", "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg")
    menuItem3.setAttribute("alt", "spaghetti")
    mainContent.appendChild(menuItem3)

    const menuItem4 = document.createElement("img")
    menuItem4.setAttribute("src", "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg")
    menuItem4.setAttribute("alt", "spaghetti")
    mainContent.appendChild(menuItem4)

    const menuButton = document.getElementById("menu-button")
    menuButton.addEventListener("click", e =>{
        menu()
    })

}


export default menu