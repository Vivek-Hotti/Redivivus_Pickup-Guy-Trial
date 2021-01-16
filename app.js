// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyANbrM3Zs1DZSTAGbn2gv4JWNmq5FRY2Xs",
    authDomain: "redivivuspickupguy.firebaseapp.com",
    databaseURL: "https://redivivuspickupguy-default-rtdb.firebaseio.com",
    projectId: "redivivuspickupguy",
    storageBucket: "redivivuspickupguy.appspot.com",
    messagingSenderId: "170394766166",
    appId: "1:170394766166:web:ea9a52f8df7f97c1d0e4f7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Till here everything permanent.

// Reference PickupDone collections
let PickupDone = firebase.database().ref("PickupDone");



//Listening submission
document.querySelector(".pickup-guy-form").addEventListener("submit",submitForm);

function submitForm(e)
{
    e.preventDefault();
    
    //Getting input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    let date_pickup = document.querySelector(".date_pickup").value;
    let combination = document.querySelector(".combination").value;
    let total_quantity = document.querySelector(".total_quantity").value;
    let total_reimbursement = document.querySelector(".total_reimbursement").value;
    
    console.log(name,email,phone,date_pickup,combination,total_quantity,total_reimbursement);

    savePickupDone(name,email,phone,date_pickup,combination,total_quantity,total_reimbursement);
}

// Save Infos to Firebase 
function savePickupDone(name,email,phone,date_pickup,combination,total_quantity,total_reimbursement)
{
    let newPickupDone = PickupDone.push();
    newPickupDone.set({
        name: name,
        email: email,
        phone:phone,
        date_pickup:date_pickup,
        combination:combination,
        total_quantity:total_quantity,
        total_reimbursement:total_reimbursement,
    });
}

