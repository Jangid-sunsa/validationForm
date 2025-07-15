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
  const radio_yes = document.getElementById("fyes").value;
  const radio_no = document.getElementById("fno").value;
  const upload = document.getElementById("fno").value;
  const check = document.getElementById("fcheckbox").value;

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
  const uploadErr = document.getElementById("upload-error");
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
  uploadErr.textContent = "";
  checkErr.textContent = "";

  let isValid = true;
  if (name === "" || /\d/.test(name)) {
    nameErr.textContent = "Please enter your name properly.";
    isValid = false;
  }

  if (email === "") {
    emailErr.textContent = "Please enter your email.";
    isValid = false;
  }else if(!email.includes("@") || !email.includes(".")){
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
  }else if(/\d/.test(gender)){
    genderErr.textContent = "Enter a valid gender.";
    isValid = false;
  }

  if (city === "") {
    cityErr.textContent = "Enter your city.";
    isValid = false;
  }else if(/\d/.test(city)){
    cityErr.textContent = "Enter a valid city.";
    isValid = false;
  }

  if (state === "") {
    stateErr.textContent = "Enter your state.";
    isValid = false;
  }else if(/\d/.test(state)){
    stateErr.textContent = "Enter a valid state.";
    isValid = false;
  }

  if (country === "") {
    countryErr.textContent = "Enter your country.";
    isValid = false;
  }else if(/\d/.test(country)){
    countryErr.textContent = "Enter a valid country.";
    isValid = false;
  }

  if (address === "") {
    addressErr.textContent = "Enter your address.";
    isValid = false;
  }

  if (message === "" || address.length>250 ) {
    messageErr.textContent = "Write your message.";
    isValid = false;
  }

  if(!fyes.checked && !fno.checked){
    radio_noErr.textContent = "Choose one.";
    isValid = false;
  }

  if(!fcheckbox.checked ){
    checkErr.textContent = "Checked compulsorry";
    isValid = false;
  }
}

