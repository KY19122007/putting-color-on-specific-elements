console.log("checking");
let input = document.querySelectorAll("input")
let addbutton = document.querySelector("button");
let h1Element = document.querySelector("h1")
let h2Element = document.querySelector("h2")
let h3Element = document.querySelector("h3")
let h4Element = document.querySelector("h4")


addbutton.addEventListener("click",rava)
function rava(){
    
    console.log(input[0].value)
    console.log(input[1].value)
    switch (input[1].value) {
        case "h1Element":
            h1Element.style.color = input[0].value
            break;
            case "h2Element":
            h2Element.style.color = input[0].value
            break;
            case "h3Element":
            h3Element.style.color = input[0].value
            break;
            case "h4Element":
            h4Element.style.color = input[0].value
            break;
        default: alert("please enter the values properly")
            break;
    }
} 
