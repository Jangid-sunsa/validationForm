const form = document.getElementById("contact_form");
const dataTableBody = document.querySelector("#dataTable tbody");
let editIndex = null; // For tracking the row being edited

window.onload = showDataFromLocalStorage;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("fname").value,
    email: document.getElementById("femail").value,
    phone: document.getElementById("fphone").value,
    dob: document.getElementById("fdob").value,
    gender: document.getElementById("fgender").value,
    city: document.getElementById("fcity").value,
    state: document.getElementById("fstate").value,
    country: document.getElementById("fcountry").value,
    address: document.getElementById("faddress").value,
    message: document.getElementById("fmssg").value,
    file: document.getElementById("file").value.split("\\").pop(),
  };

  let storedData = JSON.parse(localStorage.getItem("formData")) || [];

  if (editIndex !== null) {
    storedData[editIndex] = formData;
    editIndex = null;
  } else {
    storedData.push(formData);
  }

  localStorage.setItem("formData", JSON.stringify(storedData));
  form.reset();
  showDataFromLocalStorage();
});

function showDataFromLocalStorage() {
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];
  dataTableBody.innerHTML = "";

  storedData.forEach((item, index) => {
    const row = `<tr>
        <td class="text-center border border-black p-1">${index + 1}</td>
        <td class="text-center border border-black p-1">${item.name}</td>
        <td class="text-center border border-black p-1">${item.email}</td>
        <td class="text-center border border-black p-1">${item.phone}</td>
        <td class="text-center border border-black p-1">${item.dob}</td>
        <td class="text-center border border-black p-1">${item.gender}</td>
        <td class="text-center border border-black p-1">${item.city}</td>
        <td class="text-center border border-black p-1">${item.state}</td>
        <td class="text-center border border-black p-1">${item.country}</td>
        <td class="text-center border border-black p-1">${item.address}</td>
        <td class="text-center border border-black p-1">${item.message}</td>
        <td class="text-center border border-black p-1">${item.file}</td>
        <td class="text-center border border-black p-1">
          <button onclick="editRow(${index})">
            <i class="fa-solid fa-pen-to-square text-2xl px-2 text-blue-600 cursor-pointer"></i>
          </button>
          <button onclick="deleteRow(${index})">
            <i class="fa-solid fa-trash text-2xl px-2 text-red-600 cursor-pointer"></i>
          </button>
        </td>
      </tr>`;
    dataTableBody.innerHTML += row;
  });
}

function deleteRow(index) {
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];
  storedData.splice(index, 1);
  localStorage.setItem("formData", JSON.stringify(storedData));
  showDataFromLocalStorage();
}

function editRow(index) {
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];
  const data = storedData[index];

  document.getElementById("fname").value = data.name;
  document.getElementById("femail").value = data.email;
  document.getElementById("fphone").value = data.phone;
  document.getElementById("fdob").value = data.dob;
  document.getElementById("fgender").value = data.gender;
  document.getElementById("fcity").value = data.city;
  document.getElementById("fstate").value = data.state;
  document.getElementById("fcountry").value = data.country;
  document.getElementById("faddress").value = data.address;
  document.getElementById("fmssg").value = data.message;
  // Not loading file because browsers don't allow file input to be pre-filled

  editIndex = index;
}




// CODE FOR JS FILE 
const form = document.getElementById("contact_form");
const dataTableBody = document.querySelector("#dataTable tbody");
let editIndex = null;

window.onload = showDataFromLocalStorage;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("fname").value,
    email: document.getElementById("femail").value,
    phone: document.getElementById("fphone").value,
    dob: document.getElementById("fdob").value,
    gender: document.getElementById("fgender").value,
    city: document.getElementById("fcity").value,
    state: document.getElementById("fstate").value,
    country: document.getElementById("fcountry").value,
    address: document.getElementById("faddress").value,
    message: document.getElementById("fmssg").value,
    file: document.getElementById("file").value.split("\\").pop(),
  };

  let storedData = JSON.parse(localStorage.getItem("formData")) || [];
  if (editIndex !== null) {
    storedData[editIndex] = formData;
    editIndex = null;
  } else {
    storedData.push(formData);
  }

  localStorage.setItem("formData", JSON.stringify(storedData));
  form.reset();
  showDataFromLocalStorage();
});

function showDataFromLocalStorage() {
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];
  dataTableBody.innerHTML = "";

  storedData.forEach((item, index) => {
    const row = `<tr>
        <td class="text-center border border-black p-1">${index + 1}</td>
        <td class="text-center border border-black p-1">${item.name}</td>
        <td class="text-center border border-black p-1">${item.email}</td>
        <td class="text-center border border-black p-1">${item.phone}</td>
        <td class="text-center border border-black p-1">${item.dob}</td>
        <td class="text-center border border-black p-1">${item.gender}</td>
        <td class="text-center border border-black p-1">${item.city}</td>
        <td class="text-center border border-black p-1">${item.state}</td>
        <td class="text-center border border-black p-1">${item.country}</td>
        <td class="text-center border border-black p-1">${item.address}</td>
        <td class="text-center border border-black p-1">${item.message}</td>
        <td class="text-center border border-black p-1">${item.file}</td>
        <td class="text-center border border-black p-1">
          <button onclick="editRow(${index})">
            <i class="fa-solid fa-pen-to-square text-2xl px-2 active:text-red-600 cursor-pointer"></i>
          </button>
          <button onclick="deleteRow(${index})">
            <i class="fa-solid fa-trash text-2xl px-2 active:text-red-600 cursor-pointer"></i>
          </button>
        </td>
      </tr>`;
    dataTableBody.innerHTML += row;
  });
}

function deleteRow(index) {
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];
  storedData.splice(index, 1);
  localStorage.setItem("formData", JSON.stringify(storedData));
  showDataFromLocalStorage();
}

function editRow(index) {
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];
  const data = storedData[index];

  document.getElementById("fname").value = data.name;
  document.getElementById("femail").value = data.email;
  document.getElementById("fphone").value = data.phone;
  document.getElementById("fdob").value = data.dob;
  document.getElementById("fgender").value = data.gender;
  document.getElementById("fcity").value = data.city;
  document.getElementById("fstate").value = data.state;
  document.getElementById("fcountry").value = data.country;
  document.getElementById("faddress").value = data.address;
  document.getElementById("fmssg").value = data.message;

  editIndex = index;
}
