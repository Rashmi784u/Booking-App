const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");

myForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.showNewUserOnScreen();
  const obj = {
    name: event.target.name.value,
    email: event.target.email.value,
  };

  localStorage.setItem(obj.email, JSON.stringify(obj));
  showNewUserOnScreen(obj);

  window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys = Object.keys(localStorageObj);

    for (var i = 0; i < localstoragekeys.length; i++) {
      const key = localstoragekeys[i];
      const userDetailsString = localStorageObj[key];
      const userDetailsObj = JSON.parse(userDetailsString);
      showNewUserOnScreen(obj);
    }
  });

  //function showNewUserOnScreen(user) {
  //document.getElementById("email").value = "";
  //document.getElementById("name").value = "";
  //if (localStorage.getItem(user.email) !== null) {
  //removeUserFromScreen(user.email);
  //}

  //const parentNode = document.getElementById("listOfUsers");
  //const childHTML = `<li> ${user.name} - ${user.email}
  //<button onclick=deleteUser(${user.email})>Delete User</button>
  //<button onclick=editUserDetails('${user.email}','${user.name}')>Edit User</button>
  //</li>`;

  //parentNode.innerHTML = parentNode.innerHTML + childHTML;
  //}
  //function editUserDetails(email, name) {
  //document.getElementById("email").value = email;
  //document.getElementById("name").value = name;
  // }

  //function deleteUser(email) {
  //console.log(email);
  //localStorage.removeItem(email);
  //removeUserFromScreen(email);
  //}
  //function removeUserFromScreen(email) {
  //const parentNode = document.getElementById("listOfUsers");
  //const childNodeToBeDeleted = document.getElementById(email);

  //parentNode.removeChild(childNodeToBeDeleted);
  //}

  //let myObj = {
  //name: event.target.name.value,
  //email: event.target.email.value,
  //};
  //let myObj_serialized = myObj.email.JSON.stringify(myObj);

  //localStorage.setItem(myObj.email, JSON.stringify(myObj));

  //let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
  //console.log(myObj_deserialized);

  //localStorage.setItem("email", email);

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    //Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}

//let myObj = {
//name: "abc",
//age: 58,
//};

//let myObj_serialized = JSON.stringify(myObj);
//console.log(myObj_serialized);

//localStorage.setItem("myObj", myObj_serialized);
//console.log(localStorage);

//let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
//console.log(myObj_deserialized);
