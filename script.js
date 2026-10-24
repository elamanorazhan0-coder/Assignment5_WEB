// Profile object
const userProfile = {
  name: "Yelaman",          // string
  birthYear: 2006,          // number
  isDeveloper: true,        // boolean
  hobbies: ["coding", "gaming", "music"]  // array
};

function showProfile() {
  let currentYear = new Date().getFullYear();
  let age = currentYear - userProfile.birthYear;
  let months = age * 12;
  let hobbiesCount = userProfile.hobbies.length;

  document.getElementById("name").textContent = userProfile.name;
  document.getElementById("birthYear").textContent = userProfile.birthYear;
  document.getElementById("isDeveloper").textContent = userProfile.isDeveloper;
  document.getElementById("hobbies").textContent = userProfile.hobbies.join(", ");
  document.getElementById("age").textContent = age;
  document.getElementById("months").textContent = months;
  document.getElementById("hobbiesCount").textContent = hobbiesCount;

  console.log("Age:", age);
  console.log("Months old:", months);
  console.log("Hobbies count:", hobbiesCount);
}

showProfile();

// Form and event
const form = document.getElementById("profileForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  let username = document.getElementById("usernameInput").value;
  let year = document.getElementById("birthYearInput").value;
  let message = document.getElementById("message");

  if (username === "" || year === "") {
    message.style.color = "red";
    message.textContent = "Please fill both fields!";
    return;
  }

  userProfile.name = username;
  userProfile.birthYear = Number(year);

  showProfile();

  message.style.color = "green";
  message.textContent = "Profile updated!";
});

// List 
const list = document.getElementById("myList");
const itemInput = document.getElementById("itemInput");

document.getElementById("addBtn").addEventListener("click", function () {
  let text = itemInput.value;

  if (text === "") {
    alert("Write something first");
    return;
  }

  let li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);

  itemInput.value = "";
});

document.getElementById("removeBtn").addEventListener("click", function () {
  let last = list.lastElementChild;
  if (last) {
    list.removeChild(last);
  }
});
