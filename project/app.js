function registration() {
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;
    var conf_password = document.getElementById("conf_password").value;
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var country = document.getElementById("country").value;
    var number = document.getElementById("number").value;
    var date = document.getElementById("date").value;

    if (/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!@#$%^&)/.test(password)){
        document.getElementById("password").style.border = "green 1px solid"
    }
    else if (/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(password)) {
        document.getElementById("password").style.border = "yellow 1px solid"
    }
    else if (/^(?!.*\s)(?=.*[a-z])/.test(password)) {
        document.getElementById("password").style.border = "red 1px solid"
        alert("Password is weak")
    }

    if (password != conf_password) {
        document.getElementById("conf_password").style.border = "red 1px solid"
        alert("Passwords aren't same!")
    }

    if (mail.search("@") == -1) {
        document.getElementById("mail").style.border = "red 1px solid"
        alert("Enter valid Mail!")  
    }
    else if(mail.substr(mail.search("@")).indexOf(".") == -1){
        document.getElementById("mail").style.border = "red 1px solid"
        alert("Enter valid Mail!")  
    }
    else if ((mail.slice(-(mail.substr(mail.search("@")).indexOf(".")), -1)).length < 2) {
        document.getElementById("mail").style.border = "red 1px solid"
        alert("Enter valid Mail!")  
    }

    if (name == "" || lastname == "" || country == "" || number == "" || date == "") {
        alert ("Pleace input all information!")
    }
    else {
        window.location.href = "main.html"
    }
}

function signin(){
    var signin_name = document.getElementById("signin_name").value;
    var signin_password = document.getElementById("signin_password").value;

    if (signin_name == "" || signin_password == "") {
        alert("Please fill all the Information!")
    }
    else {
        window.location.href = "main.html"
    }
}

function zodiac_calculator() {
    var day = document.getElementById("day").value
    var month = document.getElementById("month").value
    var btn = document.getElementById("btn")


    if (month == 3 && day >= 20 || month == 4 && day <= 20){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Aries</h1> <br> <img src='photos/zodiac/aries.png'>";
          });
    }
    else if (month == 4 && day >= 21 || month == 5 && day <= 21){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Taurus</h1> <br> <img src='photos/zodiac/taurus.png'> ";
          });
    }
    else if (month == 5 && day >= 22 || month == 6 && day <= 21){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Gemini</h1> <br> <img src='photos/zodiac/gemini.png'>";
          });
    }
    else if (month == 6 && day >= 22 || month == 7 && day <= 22){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Cancer</h1> <br> <img src='photos/zodiac/cancer.png'>";
          });
    }
    else if (month == 7 && day >= 23 || month == 8 && day <= 23){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Leo</h1> <br> <img src='photos/zodiac/leo.png'>";
          });
    }
    else if (month == 8 && day >= 24 || month == 9 && day <= 23){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Virgo</h1> <br> <img src='photos/zodiac/virgo.png'>";
          });
    }
    else if (month == 9 && day >= 24 || month == 10 && day <= 23){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Libra</h1> <br> <img src='photos/zodiac/libra.png'>";
          });
    }
    else if (month == 10 && day >= 24 || month == 11 && day <= 22){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Scorpio</h1> <br> <img src='photos/zodiac/scorpio.png'>";
          });
    }
    else if (month == 11 && day >= 23 || month == 12 && day <= 21){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Sagittarius</h1> <br> <img src='photos/zodiac/sagittarius.png'>";
          });
    }
    else if (month == 12 && day >= 22 || month == 1 && day <= 20){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Capricorn</h1> <br> <img src='photos/zodiac/capricorn.png'>";
          });
    }
    else if (month == 1 && day >= 21 || month == 2 && day <= 18){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Aquarius</h1> <br> <img src='photos/zodiac/aquarius.png'>";
          });
    }
    else if (month == 2 && day >= 19 || month == 3 && day <= 20){
        btn.addEventListener("click", function() {
            document.getElementById("zodiac_here").innerHTML = "<h1>Pisces</h1> <br> <img src='photos/zodiac/pisces.png'>";
          });
    }
    else {
        alert("Please enter the valid data!")
    }

}