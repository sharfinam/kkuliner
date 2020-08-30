var fullname, username, pass, gender, dob, email;
var formRegister =  document.querySelector('#form-register');
var formLogin = document.querySelector('#form-login');

if (formRegister) {
  formRegister.addEventListener('submit', function(e) {
    console.log('form submitted');

    fullname = document.getElementById('name').value;
    username = document.getElementById('username').value;
    pass = document.getElementById('pass').value;
    male = document.getElementById('rb-male').checked;
    female = document.getElementById('rb-female').checked;
    dob = document.getElementById('dob').value;
    email = document.getElementById('email').value;


    if (fullname === "") {
      alert("Fullname must be filled!");
      console.log("fullname", fullname)
    } else if (isLetter(fullname) == false) {
      alert("Fullname must be letter!");
    } else if (email === "") {
      alert("Email must be filled!");
    } else if (checkEmail(email) == false) {
      alert("Email is invalid type!");
    } else if (username.length <= 6) {
      alert("Username length must be greater than 6 characters!");
    } else if (username.includes(" ")) {
      alert("Username can not contains any space!");
    } else if (pass.length <= 8) {
      alert("Password length must be greater than 8 characters!");
    } else if (checkPassword(pass) == false) {
      alert("Password must be alphanumeric!");
    } else if (male == false && female == false) {
      alert("Gender must be checked!");
    } else {
      alert("Registed!");
    }

    e.preventDefault();
    return false;
  });
}
if (formLogin) {
  formLogin.addEventListener('submit', function (e) {
    console.log('form submitted');
    username = document.getElementById('username').value;
    pass = document.getElementById('pass').value;

    if (username.length <= 6) {
      alert("Username length must be greater than 6 characters!");
    } else if (username.includes(" ")) {
      alert("Username can not contains any space!");
    } else if (pass.length <= 8) {
      alert("Password length must be greater than 8 characters!");
    } else if (checkPassword(pass) == false) {
      alert("Password must be alphanumeric!");
    } else {
      alert("LogIn");
    }

    e.preventDefault();
    return false;
  });
}

function isLetter(str) {
  var code, i, len;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 64 && code < 91) && !(code > 96 && code < 123)) {
      return false;
    }
  }
  return true;
};

function checkEmail(str) {
  var code, i, len;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 45 && code < 47) &&
      !(code > 63 && code < 65) &&
      !(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)) {
      return false;
    }
  }

  var atSymbol = str.indexOf("@");
  if (atSymbol < 1) return false;

  var dot = str.indexOf(".");
  if (dot <= atSymbol + 2) return false;

  if (dot === str.length - 1) return false;

  return true;
};

function checkPassword(str) {
  var numeric = false;
  var alpha = false;

  for (var i = 0; i < str.length; i++) {
    if ((str.charAt(i) >= 'a' && str.charAt(i) <= 'z')
      || (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z')) {
      alpha = true;
    }
    if (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
      numeric = true;
    }
  }
  if (alpha == true && numeric == true) {
    return true;
  } else return false;
};
