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
    calculateDate(dob);
})

function calculateDate(dob) {
    
    var cc = dob.substring(0,2);
    var yy = dob.substring(2,4);
    var mm = dob.substring(5,7);
    var dd = dob.substring(8,10);

    var dayOfTheWeek = (((cc/4)-2*CC-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd ) % 7;
    return dayOfTheWeek;
}