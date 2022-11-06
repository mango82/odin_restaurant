const contact = function(){
    const mainContent = document.getElementById("main-content")
    mainContent.innerHTML = ""

    const h2 = document.createElement("h1")
    h2.innerHTML = "Contact"
    mainContent.appendChild(h2)

    const contactButton = document.getElementById("contact-button")
    contactButton.addEventListener("click", e =>{
        contact()
    })

}


export default contact