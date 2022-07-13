function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;
  const obj = {
    name,
    email,
  };
  localStorage.setItem(obj.email, JSON.stringify(obj));
  showNewUserOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  const localstoragekeys = Object.keys(localStorageObj);

  for (var i = 0; i < localstoragekeys.length; i++) {
    const key = localstoragekeys[i];
    const userDetailsString = localStorageObj[key];
    const userDetailsObj = JSON.parse(userDetailsString);
    showNewUserOnScreen(userDetailsObj);
  }
});

function showNewUserOnScreen(user) {
  document.getElementById("email").value = "";
  document.getElementById("username").value = "";
  if (localStorage.getItem(user.email) !== null) {
    removeUserFromScreen(user.email);
  }

  const parentNode = document.getElementById("listOfUsers");
  const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                      <button onclick=deleteUser('${user.email}')> Delete </button>
                    <button onclick=editUserDetails('${user.email}','${user.name}')>Edit</button>
               </li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User

function editUserDetails(emailId, name) {
  document.getElementById("email").value = emailId;
  document.getElementById("username").value = name;
  deleteUser(emailId);
}

// deleteUser //

function deleteUser(emailId) {
  console.log(emailId);
  localStorage.removeItem(emailId);
  removeUserFromScreen(emailId);
}

function removeUserFromScreen(emailId) {
  const parentNode = document.getElementById("listOfUsers");
  const childNodeToBeDeleted = document.getElementById(emailId);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}
