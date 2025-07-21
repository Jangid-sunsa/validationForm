const form = document.getElementById("contact_form");
const dataTableBody = document.querySelector("#dataTable tbody");
let editIndex = null;

window.onload = showDataFromLocalStorage;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid = formsValidation();

  if (isValid) {
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
    alert("Form submitted successfully!");
    form.reset();
    showDataFromLocalStorage();
  }
});

function formsValidation() {
  let isValid = true;

  const name = document.getElementById("fname").value;
  const email = document.getElementById("femail").value;
  const phone = document.getElementById("fphone").value;
  const dob = document.getElementById("fdob").value;
  const gender = document.getElementById("fgender").value;
  const city = document.getElementById("fcity").value;
  const state = document.getElementById("fstate").value;
  const country = document.getElementById("fcountry").value;
  const address = document.getElementById("faddress").value;
  const message = document.getElementById("fmssg").value;
  const fileInput = document.getElementById("file").files;
  const check = document.getElementById("checkbox").checked;
  const radio_yes = document.getElementById("fyes").checked;
  const radio_no = document.getElementById("fno").checked;

  resetErrors();

  if (name === "" || /\d/.test(name)) {
    document.getElementById("name-error").textContent = "Enter valid name";
    isValid = false;
  }

  if (email === "" || !email.includes("@") || !email.includes(".")) {
    document.getElementById("email-error").textContent = "Enter valid email";
    isValid = false;
  }

  if (phone === "" || phone.length < 10) {
    document.getElementById("phone-error").textContent = "Enter valid phone";
    isValid = false;
  }

  if (!dob) {
    document.getElementById("dob-error").textContent =
      "Date of birth is required";
    isValid = false;
  }

  if (gender === "" || /\d/.test(gender)) {
    document.getElementById("gender-error").textContent = "Enter valid gender";
    isValid = false;
  }

  if (city === "" || /\d/.test(city)) {
    document.getElementById("city-error").textContent = "Enter valid city";
    isValid = false;
  }

  if (state === "" || /\d/.test(state)) {
    document.getElementById("state-error").textContent = "Enter valid state";
    isValid = false;
  }

  if (country === "" || /\d/.test(country)) {
    document.getElementById("country-error").textContent =
      "Enter valid country";
    isValid = false;
  }

  if (address === "") {
    document.getElementById("address-error").textContent = "Address required";
    isValid = false;
  }

  if (message === "" || message.length > 250) {
    document.getElementById("message-error").textContent =
      "Enter valid message";
    isValid = false;
  }

  if (!radio_yes && !radio_no) {
    document.getElementById("radioN-error").textContent = "Choose one option";
    isValid = false;
  }

  if (fileInput.length === 0 && editIndex === null) {
    document.getElementById("file-error").textContent = "Upload required";
    isValid = false;
  } else if (fileInput.length > 0) {
    const file = fileInput[0];
    const size = file.size / 1024 / 1024;
    const fileName = file.name;
    const allowedExtensions = /(\.pdf)$/i;

    if (!allowedExtensions.exec(fileName)) {
      document.getElementById("file-error").textContent = "Only PDF allowed";
      isValid = false;
    } else if (size > 2) {
      document.getElementById("file-error").textContent = "Max 2 MB allowed";
      isValid = false;
    }
  }

  if (!check) {
    document.getElementById("checkbox-error").textContent = "Check required";
    isValid = false;
  }

  return isValid;
}

function resetErrors() {
  const errorFields = document.querySelectorAll(".error-message");
  errorFields.forEach((el) => (el.textContent = ""));
}

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
        <button onclick="editRow(${index})"><i class="fa-solid fa-pen-to-square text-2xl px-2 text-blue-600 cursor-pointer"></i></button>
        <button onclick="deleteRow(${index})"><i class="fa-solid fa-trash text-2xl px-2 text-red-600 cursor-pointer"></i></button>
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
  document.getElementById("file").file = data.fileInput;

  editIndex = index;
}
