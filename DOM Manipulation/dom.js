//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.forms);

//GetElementById//
//console.log(document.getElementById("header-title"));
//var headerTitle = document.getElementById("header-title");
//var header = document.getElementById("main-header");
//console.log(headerTitle);
//headerTitle.textContent = "Hello";
//headerTitle.innerText = "Goodbye";
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = "<h3>Hello</h3>";
//header.style.borderBottom = "solid 3px #000";
//headerTitle.style.borderBottom = "solid 3px #000";

//GETELEMENTBYCLASSNAME
//var items = document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[2]);
//items[2].style.backgroundColor = "green";

//for (var i = 0; i < items.length; i++) {
//items[i].style.fontWeight = "bold";
//items[i].style.color = "orange";
//}

//GETELEMENTBYTAGNAME
//var li = document.getElementsByTagName("li");
//console.log(li);
//console.log(li[2]);
//li[2].style.backgroundColor = "green";

//for (var i = 0; i < li.length; i++) {
//li[i].style.fontWeight = "bold";
//li[i].style.color = "orange";
//}

// QUERYSELECTOR //
//var header = document.querySelector("#main-header");
//header.style.borderBottom = "solid 4px #ccc";

//var input = document.querySelector("input");
//input.value = "Hello World";

//var submit = document.querySelector('input[type="submit"]');
//submit.value = "SEND";

//var item = document.querySelector(".list-group-item");
//item.style.color = "red";

//var lastItem = document.querySelector(".list-group-item:last-child");
//lastItem.style.color = "blue";

//var secondItem = document.querySelector(".list-group-item:nth-child(2)");
//secondItem.style.backgroundColor = "green";

//var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
//thirdItem.textContent = "invisible";

// QUERYSELECTORALL //
//var item = document.querySelectorAll(".list-group-item");

//console.log(item);
//item[1].style.color = "green";

//var odd = document.querySelectorAll("li:nth-child(odd)");

//for (var i = 0; i < odd.length; i++) {
//odd[i].style.backgroundColor = "green";
//}

// TRAVERSING THE DOM //
//var itemList = document.querySelector("#items");
// parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = "#f4f4f4";
//console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = "#f4f4f4";
//console.log(itemList.parentElement.parentElement.parentElement);

//childNode
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = "yellow";

//FirstChild
//console.log(itemList.firstChild);
//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = "Hello 1";

//lastChild
//console.log(itemList.lastChild);
//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = "Hello 4";

//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = "green";

//createElement

//Create a div
var newDiv = document.createElement("div");

//Add class
newDiv.className = "hello";

//Add id
newDiv.id = "hello1";

//Add attr
newDiv.setAttribute("title", "Hello Div");

//Create text node
var newDivtext = document.createTextNode("Hello World");

//Add text to Div
newDiv.appendChild(newDivtext);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

//newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1);
