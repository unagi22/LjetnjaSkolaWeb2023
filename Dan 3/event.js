let button = document.getElementById("button");

function buttonClick(){
    // document.getElementById("main-header").style.display = "none";
    document.getElementById("header-title").innerText = "Naslov"
    console.log(event);
    console.log(event.target);
    event.target.removeEventListener("click", buttonClick);
}

button.addEventListener("click", buttonClick);
// button.removeEventListener("click", buttonClick);

let select = document.getElementsByTagName("select")[0];
let items = document.querySelectorAll("li");
var currentItem;

select.addEventListener("change", function(event){
    if(currentItem){
        currentItem.removeAttribute("style");
    }

items[event.target.value-1].style.backgroundColor = "blue"
currentItem = items[event.target.value - 1]
})


function addItem(event){
    event.preventDefault();
    let inputText = document.getElementById("itemName").value;
    document.getElementById("items").innerHTML += "<li class= 'list-group-item'"
}

document.querySelector("input[type=submit]").addEventListener("click", addItem);

