newItem = document.createElement("li");
console.log(newItem);
let newText = document.createTextNode("Item 5");
newItem.appendChild(newText);

// newItem.classlist.add("list-group-item");

let list = document.getElementById("items");
list.appendChild(newItem);
newItem.appendChild(newText);

let secondItem = list.children[1];
list.insertBefore(newItem, secondItem);

// list.innerHTML= "<li class="list-group-item">Item 5</li>"

// list.remove();