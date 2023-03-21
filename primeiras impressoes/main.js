const srcImage1 = "https://images.unsplash.com/photo-1678539923557-9ff9829318d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
const srcImage2 = "https://images.unsplash.com/photo-1678776682765-25854662bbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80"

const myImage = document.querySelector("img")
const buttonClickHere = document.getElementById("click-here")

myImage.onclick = () => {
    const src = myImage.getAttribute("src")
    
    if (src === srcImage1) {
        myImage.setAttribute("src", srcImage2)
    } else {
        myImage.setAttribute("src", srcImage1)
    }
}

buttonClickHere.onclick = () => {
    alert("I was clicked!")
}