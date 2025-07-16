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

  nameErr.textContent = "";
  emailErr.textContent = "";
  phoneErr.textContent = "";
  dobErr.textContent = "";
  genderErr.textContent = "";
  cityErr.textContent = "";
  stateErr.textContent = "";
  countryErr.textContent = "";
  addressErr.textContent = "";
  messageErr.textContent = "";
  radio_yesErr.textContent = "";
  radio_noErr.textContent = "";
  fileErr.textContent = "";
  checkErr.textContent = "";


  let counseling = "";
  if(radio_yes){
    counseling = "Yes";
  } else if(radio_no){
    counseling = "No";
  }

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
    Counseling_Session : counseling,  
  };

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
  } else if (phone.length > 10 || phone.length < 10) {
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

  // form radio btn for Yes / No
  // if (!fyes.checked && !fno.checked) {
  //   radio_noErr.textContent = "Choose one.";
  //   isValid = false;
  // }

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
    const allowedExtensions = /(\.doc|\.docx|\.pdf)$/i;

    if (!allowedExtensions.exec(fileName)) {
      fileErr.textContent =
        "Invalid file type. Only .doc, .docx, .pdf allowed.";
      fileInput.value = "";
      isValid = false;
    } else if (size > 2) {
      fileErr.textContent = "File size should be less than 2 MB.";
      isValid = false;
    } else {
      fileErr.textContent = "";
    }
  }
  // else if (size > 4) {
  //   fileErr.textContent = "File must be less than 4 MB";
  //   isValid = false;
  // }

  if (!check) {
    checkErr.textContent = "Checked compulsorry";
    isValid = false;
  }

  // localstorage wala part
  if (isValid) {
    let locName = JSON.parse(localStorage.getItem("formData")) || [];
    locName.push(formData);
    localStorage.setItem("formData", JSON.stringify(locName));

    alert("form submitted successfully");
    return true;
  } else {
    return false;
  }
}

function resetErrors() {
  nameErr = document.getElementById("name-error").textContent = "";
  emailErr = document.getElementById("email-error").textContent = "";
  phoneErr = document.getElementById("phone-error").textContent = "";
  dobErr = document.getElementById("dob-error").textContent = "";
  genderErr = document.getElementById("gender-error").textContent = "";
  cityErr = document.getElementById("city-error").textContent = "";
  stateErr = document.getElementById("state-error").textContent = "";
  countryErr = document.getElementById("country-error").textContent = "";
  addressErr = document.getElementById("address-error").textContent = "";
  messageErr = document.getElementById("message-error").textContent = "";
  radio_yesErr = document.getElementById("radioY-error").textContent = "";
  radio_noErr = document.getElementById("radioN-error").textContent = "";
  fileErr = document.getElementById("file-error").textContent = "";
  checkErr = document.getElementById("checkbox-error").textContent = "";
}
