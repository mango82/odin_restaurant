const home = function(){
    const mainContent = document.getElementById("main-content")
    mainContent.innerHTML = ""

    const h2 = document.createElement("h1")
    h2.innerHTML = "Home Page"
    mainContent.appendChild(h2)

    const img = document.createElement("img")
    img.setAttribute("src", "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg")
    img.setAttribute("alt", "spaghetti")
    mainContent.appendChild(img)

    const p = document.createElement("p")
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Felis donec et odio pellentesque diam volutpat. Quam quisque id diam vel. Sed cras ornare arcu dui. Varius duis at consectetur lorem donec. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Varius sit amet mattis vulputate enim nulla. Pulvinar neque laoreet suspendisse interdum. In ante metus dictum at tempor commodo ullamcorper a lacus. Erat nam at lectus urna duis convallis. Vulputate mi sit amet mauris commodo quis imperdiet."
    mainContent.appendChild(p)

    const homeButton = document.getElementById("home-button")
    homeButton.addEventListener("click", e =>{
        home()
    })

}


export default home