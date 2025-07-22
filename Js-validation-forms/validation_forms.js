let editIndex = null;

function resetErrors() {
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("phone-error").textContent = "";
  document.getElementById("dob-error").textContent = "";
  document.getElementById("gender-error").textContent = "";
  document.getElementById("city-error").textContent = "";
  document.getElementById("state-error").textContent = "";
  document.getElementById("country-error").textContent = "";
  document.getElementById("address-error").textContent = "";
  document.getElementById("message-error").textContent = "";
  document.getElementById("radioY-error").textContent = "";
  document.getElementById("radioN-error").textContent = "";
  document.getElementById("file-error").textContent = "";
  document.getElementById("checkbox-error").textContent = "";
}

function addRealTimeValidation() {
  const nameInput = document.getElementById("fname");
  const emailInput = document.getElementById("femail");
  const phoneInput = document.getElementById("fphone");
  const dobInput = document.getElementById("fdob");
  const genderInput = document.getElementById("fgender");
  const cityInput = document.getElementById("fcity");
  const stateInput = document.getElementById("fstate");
  const countryInput = document.getElementById("fcountry");
  const addressInput = document.getElementById("faddress");
  const messageInput = document.getElementById("fmssg");
  const radioYesInput = document.getElementById("fyes");
  const radioNoInput = document.getElementById("fno");
  const fileInput = document.getElementById("file");
  const checkboxInput = document.getElementById("checkbox");

  nameInput.addEventListener("input", () => {
    const nameErr = document.getElementById("name-error");
    const val = nameInput.value;
    if (val === "" || /[\d!@#$%^&*(),.?":{}|<>_\-+=\\\/~`[\];']/g.test(val)) {
      nameErr.textContent = "Please enter your name properly.";
    } else {
      nameErr.textContent = "";
    }
  });

  emailInput.addEventListener("input", () => {
    const emailErr = document.getElementById("email-error");
    const val = emailInput.value;
    if (val === "") {
      emailErr.textContent = "Please enter your email.";
    } else if (!val.includes("@") || !val.includes(".")) {
      emailErr.textContent = "Please enter your valid email.";
    } else {
      emailErr.textContent = "";
    }
  });

  phoneInput.addEventListener("input", () => {
    const phoneErr = document.getElementById("phone-error");
    const val = phoneInput.value;
    if (val === "") {
      phoneErr.textContent = "Please enter your phone no.";
    } else if (val.length < 10) {
      phoneErr.textContent = "Please enter your valid phone no.";
    } else {
      phoneErr.textContent = "";
    }
  });

  dobInput.addEventListener("change", () => {
    const dobErr = document.getElementById("dob-error");
    if (!dobInput.value) {
      dobErr.textContent = "Date of birth is Required.";
    } else {
      dobErr.textContent = "";
    }
  });

  const genderErr = document.getElementById("gender-error");

  genderInput.addEventListener("input", () => {
    const genderVal = genderInput.value.trim().toLowerCase();
    if (
      genderVal === "male" ||
      genderVal === "female" ||
      genderVal === "other"
    ) {
      genderErr.textContent = "";
    } else if (genderInput.value === "") {
      genderErr.textContent = "";
    } else {
      genderErr.textContent = "Please select Male, Female, or Other.";
    }
  });

  cityInput.addEventListener("input", () => {
    const cityErr = document.getElementById("city-error");
    const val = cityInput.value;
    if (val === "") {
      cityErr.textContent = "Enter your city.";
    } else if (/\d/.test(val)) {
      cityErr.textContent = "Enter a valid city.";
    } else {
      cityErr.textContent = "";
    }
  });

  stateInput.addEventListener("input", () => {
    const stateErr = document.getElementById("state-error");
    const val = stateInput.value;
    if (val === "") {
      stateErr.textContent = "Enter your state.";
    } else if (/\d/.test(val)) {
      stateErr.textContent = "Enter a valid state.";
    } else {
      stateErr.textContent = "";
    }
  });

  countryInput.addEventListener("input", () => {
    const countryErr = document.getElementById("country-error");
    const val = countryInput.value;
    if (val === "") {
      countryErr.textContent = "Enter your country.";
    } else if (/\d/.test(val)) {
      countryErr.textContent = "Enter a valid country.";
    } else {
      countryErr.textContent = "";
    }
  });

  addressInput.addEventListener("input", () => {
    const addressErr = document.getElementById("address-error");
    if (addressInput.value === "") {
      addressErr.textContent = "Enter your address.";
    } else {
      addressErr.textContent = "";
    }
  });

  messageInput.addEventListener("input", () => {
    const messageErr = document.getElementById("message-error");
    if (messageInput.value === "" || addressInput.value.length > 250) {
      messageErr.textContent = "Enter your message.";
    } else {
      messageErr.textContent = "";
    }
  });

  function validateRadios() {
    const radioYesErr = document.getElementById("radioY-error");
    const radioNoErr = document.getElementById("radioN-error");
    if (!radioYesInput.checked && !radioNoInput.checked) {
      radioNoErr.textContent = "Choose one.";
    } else {
      radioNoErr.textContent = "";
      radioYesErr.textContent = "";
    }
  }

  radioYesInput.addEventListener("change", validateRadios);
  radioNoInput.addEventListener("change", validateRadios);

  fileInput.addEventListener("change", () => {
    const fileErr = document.getElementById("file-error");
    if (fileInput.files.length === 0) {
      fileErr.textContent = "Upload file mandatory.";
      return;
    }
    const file = fileInput.files[0];
    const size = file.size / 1024 / 1024;
    const fileName = file.name;
    const allowedExtensions = /(\.pdf)$/i;
    if (!allowedExtensions.exec(fileName)) {
      fileErr.textContent = "Invalid file type. Only .pdf allowed.";
    } else if (size > 2) {
      fileErr.textContent = "File size should be less than 2 MB.";
    } else {
      fileErr.textContent = "";
    }
  });

  checkboxInput.addEventListener("change", () => {
    const checkErr = document.getElementById("checkbox-error");
    if (!checkboxInput.checked) {
      checkErr.textContent = "Checked compulsorry";
    } else {
      checkErr.textContent = "";
    }
  });
}

function formsValidation() {
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
  const radio_yes = document.getElementById("fyes").checked;
  const radio_no = document.getElementById("fno").checked;
  const fileInput = document.getElementById("file").files;
  const check = document.getElementById("checkbox").checked;

  const nameErr = document.getElementById("name-error");
  const emailErr = document.getElementById("email-error");
  const phoneErr = document.getElementById("phone-error");
  const dobErr = document.getElementById("dob-error");
  const genderErr = document.getElementById("gender-error");
  const cityErr = document.getElementById("city-error");
  const stateErr = document.getElementById("state-error");
  const countryErr = document.getElementById("country-error");
  const addressErr = document.getElementById("address-error");
  const messageErr = document.getElementById("message-error");
  const radio_yesErr = document.getElementById("radioY-error");
  const radio_noErr = document.getElementById("radioN-error");
  const fileErr = document.getElementById("file-error");
  const checkErr = document.getElementById("checkbox-error");

  let counseling = "";
  if (radio_yes) {
    counseling = "Yes";
  } else if (radio_no) {
    counseling = "No";
  }

  let isValid = true;
  if (name === "" || /\d/.test(name)) {
    nameErr.textContent = "Please enter your name properly.";
    isValid = false;
  }

  if (email === "") {
    emailErr.textContent = "Please enter your email.";
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    emailErr.textContent = "Please enter your valid email.";
    isValid = false;
  }

  if (phone === "") {
    phoneErr.textContent = "Please enter your phone no.";
    isValid = false;
  } else if (phone.length < 10) {
    phoneErr.textContent = "Please enter your valid phone no.";
    isValid = false;
  }

  if (!dob) {
    dobErr.textContent = "Date of birth is Required.";
    isValid = false;
  }

  if (gender === "") {
    genderErr.textContent = "Enter your gender.";
    isValid = false;
  } else if (/\d/.test(gender)) {
    genderErr.textContent = "Enter a valid gender.";
    isValid = false;
  }

  if (city === "") {
    cityErr.textContent = "Enter your city.";
    isValid = false;
  } else if (/\d/.test(city)) {
    cityErr.textContent = "Enter a valid city.";
    isValid = false;
  }

  if (state === "") {
    stateErr.textContent = "Enter your state.";
    isValid = false;
  } else if (/\d/.test(state)) {
    stateErr.textContent = "Enter a valid state.";
    isValid = false;
  }

  if (country === "") {
    countryErr.textContent = "Enter your country.";
    isValid = false;
  } else if (/\d/.test(country)) {
    countryErr.textContent = "Enter a valid country.";
    isValid = false;
  }

  // form Address
  if (address === "") {
    addressErr.textContent = "Enter your address.";
    isValid = false;
  }

  // form Message
  if (message === "" || address.length > 250) {
    messageErr.textContent = "Enter your message.";
    isValid = false;
  }

  if (!radio_yes && !radio_no) {
    radio_noErr.textContent = "Choose one.";
    isValid = false;
  }

  // file upload
  if (fileInput.length === 0) {
    fileErr.textContent = "Upload file mandatory.";
    isValid = false;
  } else {
    const file = fileInput[0];
    const size = file.size / 1024 / 1024;
    const fileName = file.name;
    const allowedExtensions = /(\.pdf)$/i;

    if (!allowedExtensions.exec(fileName)) {
      fileErr.textContent = "Invalid file type. Only .pdf allowed.";
      fileInput.value = "";
      isValid = false;
    } else if (size > 2) {
      fileErr.textContent = "File size should be less than 2 MB.";
      isValid = false;
    } else {
      fileErr.textContent = "";
    }
  }

  if (!check) {
    checkErr.textContent = "Checked compulsorry";
    isValid = false;
  }

  // this part of ls
  if (isValid) {
    const formData = {
      Name: name,
      Email: email,
      Phone: phone,
      DOB: dob,
      Gender: gender,
      City: city,
      State: state,
      Country: country,
      Address: address,
      Message: message,
      Counseling: counseling,
      FileName: fileInput[0].name,
      Checked: check,
    };

    let storedData = JSON.parse(localStorage.getItem("formData")) || [];

    if (editIndex !== null) {
      storedData[editIndex] = formData;

      alert("Form updated successfully");
      editIndex = null;
    } else {
      storedData.push(formData);
      alert("Form submitted successfully");
    }

    localStorage.setItem("formData", JSON.stringify(storedData));
    document.getElementById("contact_form").reset();
    resetErrors();
    displayData();
    return true;
  } else {
    return false;
  }
}

function displayData() {
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];
  // console.log(storedData);

  const tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";

  storedData.forEach((item, index) => {
    // console.log(item);
    const row = document.createElement("tr");

    row.innerHTML = `
    <td class="text-center border border-black p-1">${index + 1}</td>
      <td class="capitalize text-start border border-black p-1">${
        item.Name
      }</td>
      <td class="text-start border border-black p-1">${item.Email}</td>
      <td class="text-start border border-black p-1">${item.Phone}</td>
      <td class="text-start border border-black p-1">${item.DOB}</td>
      <td class="capitalize text-start border border-black p-1">${
        item.Gender
      }</td>
      <td class="capitalize text-start border border-black p-1">${
        item.City
      }</td>
      <td class="capitalize text-start border border-black p-1">${
        item.State
      }</td>
      <td class="capitalize text-start border border-black p-1">${
        item.Country
      }</td>
      <td class="capitalize text-start border border-black p-1">${
        item.Address
      }</td>
      <td class="capitalize text-start border border-black p-1">${
        item.Message
      }</td>
      <td class="capitalize text-start border border-black p-1">${
        item.FileName
      }</td>
      <td class="text-start border border-black p-1">
        <button type="button" onclick="editRow(${index})"><i class="fa-solid fa-pen-to-square text-2xl px-2 active:text-blue-600 cursor-pointer"></i></button>
        <button type="button" onclick="deleteRow(${index})"><i class="fa-solid fa-trash text-2xl px-2 active:text-red-600 cursor-pointer"></i></button>
      </td>
      `;
    tableBody.appendChild(row);
  });
}

function editRow(index) {
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];
  const data = storedData[index];

  document.getElementById("fname").value = data.Name;
  document.getElementById("femail").value = data.Email;
  document.getElementById("fphone").value = data.Phone;
  document.getElementById("fdob").value = data.DOB;
  document.getElementById("fgender").value = data.Gender;
  document.getElementById("fcity").value = data.City;
  document.getElementById("fstate").value = data.State;
  document.getElementById("fcountry").value = data.Country;
  document.getElementById("faddress").value = data.Address;
  document.getElementById("fmssg").value = data.Message;
  document.getElementById("file").file = data.FileInput;
  document.getElementById("fyes").checked = data.Counseling === "Yes";
  document.getElementById("fno").checked = data.Counseling === "No";
  document.getElementById("checkbox").checked = data.Checked;

  editIndex = index;
}

function deleteRow(index) {
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];
  storedData.splice(index, 1);
  localStorage.setItem("formData", JSON.stringify(storedData));
  displayData();
}

window.onload = function () {
  displayData();
  addRealTimeValidation();
};
