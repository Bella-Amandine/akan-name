function getGender(){
    var gender = document.getElementById("gender").value;
    return gender;
}
function getDob() {
    var dob = document.getElementById("dob").value;
    return dob;
}

document.getElementById("submitBtn").addEventListener('click', function(){
    var gender = getGender();
    var dob = getDob(); 
    var day = calculateDate(dob);
    displayAkanName(day, gender);
})

function calculateDate(dob) {
    var cc = parseInt(dob.substring(0,2));
    var yy = parseInt(dob.substring(2,4));
    var mm = parseInt(dob.substring(5,7));
    var dd = parseInt(dob.substring(8,10));

    var dayOfTheWeek = (((cc/4)-2*cc-1) + (5*yy/4) + (26*(mm+1)/10) + dd ) % 7;
   
    return dayOfTheWeek;
}

function displayAkanName(day, gender){
   if(gender === "male"){
       if(day === 0){
           alert("Your Akan name is : Kwasi");
       }else if (day === 1) {
           alert("Your Akan name is : Kwadwo");
       }else if (day === 2) {
           alert("Your Akan name is : Kwabena");
       }else if(day === 3){
           alert("Your Akan name is : Kwaku");
       }else if (day === 4){
           alert("Your Akan name is : Yaw");
       }else if(day === 5){
           alert("Your Akan name is : Kofi");
       }else if(day === 6){
           alert("Your Akan name is : Kwame");
       }else {
           alert("Invalid Day");
       }
   }else {
       if(day === 0){
           alert("Your Akan name is : Akosua");
       }else if (day === 1) {
           alert("Your Akan name is : Adwoa");
       }else if (day === 2) {
           alert("Your Akan name is : Abenaa");
       }else if(day === 3){
           alert("Your Akan name is : Akua");
       }else if (day === 4){
           alert("Your Akan name is : Yaa");
       }else if(day === 5){
           alert("Your Akan name is : Afua");
       }else if(day === 6){
           alert("Your Akan name is : Ama");
       }else {
           alert("Invalid Day");
       }
   }
}