function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

reserve = document.getElementById('reserve'); 
reserve.addEventListener('submit', function(e) {
   
  e.preventDefault();
  const first = document.getElementById('first'); 
  const last = document.getElementById('last');
  const email = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity');
  const conditions = document.getElementById('checkbox1');
  const today = new Date().toISOString().split('T')[0];
  
  
  console.log(conditions.checked)
  const myError = document.getElementById('error');
  const myError1 = document.getElementById('error1');
  const myError2 = document.getElementById('error2');
  const myError3 = document.getElementById('error3');
  const myError4 = document.getElementById('error4');
  
 
  let textFormat = /^[a-zA-Z\é\è\-\^\']{2,30}$/; 
  let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/; 


  let compteur = 0;
  
  if (first.value === "" || textFormat.test(first.value) === false) {  
    first.style.border = "1px red solid";
    error.textContent = "Veuillez remplir le champ avec min 2 lettres."
    myError.style.color = 'red';  
    myError.style.fontSize = '0.5em'    
   }
  else {  
    myError.innerHTML = ""; 
    first.style.border = "2px green solid";   
    compteur++ 
  }    
  
  if (last.value === "" || textFormat.test(last.value) === false) {  
    last.style.border = "2px red solid";    
    error1.textContent = "Veuillez remplir le champ avec min 2 lettres."
    myError1.style.color = 'red';
    myError1.style.fontSize = '0.5em';    
  } 
  else {
    myError1.innerHTML = ""; 
    last.style.border = "2px green solid";
    compteur++
  }
   
  if (email.value === "" || emailFormat.test(email.value) === false) {              
    email.style.border = "2px red solid";
    error2.textContent = "Veuillez entrer un email valide."
    myError2.style.color = 'red';
    myError2.style.fontSize = '0.5em';   
  }  
    else {
    myError2.innerHTML = ""; 
    email.style.border = "2px green solid";
    compteur++
    }
  
    birthdate.max = today;

  if (birthdate.value === "") { 
    birthdate.style.border = "2px red solid";           
    error3.textContent ="Veuillez entrer votre date de naissance."
    myError3.style.color = 'red'; 
    myError3.style.fontSize = '0.5em';
  
  } 
  else {
    myError3.innerHTML = "";
    birthdate.style.border = "2px green solid";
    compteur++ 
  }
  
     
  if (quantity.value === "") {   
    quantity.style.border = "2px red solid";    
    error4.textContent ="Vous devez saisir un nombre."
    myError4.style.color = 'red';    
    myError4.style.fontSize = '0.5em';
  }  
  else {
   myError4.innerHTML = ""; 
   quantity.style.border = "2px green solid";
    compteur++
  } 
    errorMsg.innerHTML = "";
  if(document.getElementById('location1').checked || document.getElementById('location2').checked || 
    document.getElementById('location3').checked ||document.getElementById('location4').checked||document.getElementById('location5').checked||document.getElementById('location6').checked) {
    compteur++
  } 
  else {   
    errorMsg.textContent ="Vous devez saisir une ville."
    errorMsg.style.color = 'red'; 
    errorMsg.style.fontSize = '0.5em';
  }   
 
 
 if(!document.getElementById('checkbox1').checked) {   
  errorFinal.textContent = "Veuillez cocher les conditions d'utilisation" 
  errorFinal.style.color = 'red'; 
  errorFinal.style.fontSize = '0.5em';
  }
 else { 
  errorFinal.innerHTML = ""; 
    compteur++    
  } 
  console.log(compteur)
  if (compteur === 7){
    reserve.innerHTML = " Votre reservation <br> a  bien été reçue";    
    reserve.style = "display: flex;  justify-content: center; margin-top: 300px";     

    document.getElementById("reserve").reset();
     delayedClose();
  } 
  function delayedClose() {
    window.setTimeout(reloadPage, 5000);    
  }
 
  function reloadPage() {
    location.reload();
  } 
  reserve.addEventListener("click", () => { 
   if (reserve.innerHTML === "Votre réservation a bien été reçue") {
      if(getComputedStyle(bground).display != "none"){
       bground.style.display = "none";
       e.preventDefault();      
      } 
  } })
});


const close = document.getElementById('close');
const btnClose = document.getElementById('btn-Close');
const bground = document.getElementById('bground');

btnClose.addEventListener("click", () => {
  if(getComputedStyle(bground).display != "none"){
   bground.style.display = "none";
  }     
});

close.addEventListener("click", () => {
  if(getComputedStyle(bground).display != "none"){
   bground.style.display = "none";
  }     
});








