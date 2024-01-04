let form = document.getElementById('form');
let error = document.getElementsByClassName('error');
let name = document.getElementById('name');
let email = document.getElementById('email');
let select = document.getElementById('tour');
let arrival = document.getElementById('arrival');
let persons = document.getElementById('persons');
let boarding = document.getElementById('boarding');
let fooding = document.getElementById('fooding');
let sight_seeing = document.getElementById('sight-seeing');
let agree = document.getElementById('agree');
let disagree = document.getElementById('disagree');
let successful = document.getElementById('successful');
let input = document.getElementsByTagName('input');


form.addEventListener('submit', (e) => {
  
  if(name.value === '' || name.value == null) {
      e.preventDefault();
        error[0].textContent = 'Your full name is required!';
        error[0].style.color = 'red';
  } else {
    name.style.borderColor = 'green';
    error[0].textContent = '';
  }

  if(!String(email.value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    e.preventDefault();
    error[1].textContent = 'A a valid e-mail address is required!';
    error[1].style.color = 'red';
  } else {
    error[1].textContent = '';
    email.style.borderColor = 'green';
  }

  if(select.value == '') {
    e.preventDefault();
    error[2].textContent = 'A city selection is required!'
    error[2].style.color = 'red';
  } else {
    error[2].textContent = '';

  }

  if(arrival.value == null) {
    e.preventDefault();
    error[3].textContent = 'A date selection is required!';
    error[3].style.color = 'red';
  }

  if(persons.value == null || persons.value <= 0) {
    e.preventDefault();
    error[4].textContent = 'A valid number of persons required!';
    error[4].style.color = 'red';
  } else {
    error[4].textContent = '';
  }
  
  if(boarding.checked == false && fooding.checked == false && sight_seeing.checked == false) {
    e.preventDefault();
    error[5].textContent = 'Please select one or more avail!';
    error[5].style.color = 'red';
  } else {
    error[5].textContent = '';

  }

  if(agree.checked == false && disagree.checked == false) {
    e.preventDefault();
    error[7].textContent = 'Select an option!';
    error[7].style.color = 'red';
  } else {
    error[7].textContent = '';
  }


  for(let i=0; i<error.length; i++) {
    if(error[i].textContent == '') {
      e.preventDefault();
      successful.textContent = 'Reservation completed Successfully!';
      successful.style.display = 'block';
      input[i].value = '';
      input[i].checked = false;
      select.value = '';
    }
  }

})
