function validateForm(){
    var szpontok = parseInt(document.getElementById("szpont").value);
    var ipontok = parseInt(document.getElementById("ipont").value);
    var ossz = (szpontok+ipontok)/2;

    if (ossz >= 60 && szpontok >= 12 && ipontok >= 12){
        alert("Sikeres vizsga! Osztályzat: 5");
    }
    else if (ossz >= 47 && ossz <= 59 && szpontok >= 12 && ipontok >= 12){
        alert("Sikeres vizsga! Osztályzat: 4");
    }
    else if (ossz >= 33 && ossz <= 46 && szpontok >= 12 && ipontok >= 12){
        alert("Sikeres vizsga! Osztályzat: 3");
    }
    else if (ossz >= 25 && ossz <= 32 && szpontok >= 12 && ipontok >= 12){
        alert("Sikeres vizsga! Osztályzat: 2");
    }
    else if (ossz <= 24 && szpontok >= 12 && ipontok >= 12){
        alert("Sikertelen vizsga! Osztályzat: 1");
    }
    else if (szpontok <= 12 && ipontok >= 12){
        alert("Sikertelen vizsga! A szóbeli százaléka nem éri el a 12-t");
    }
    else if (szpontok >= 12 && ipontok <= 12){
        alert("Sikertelen vizsga! Az írásbeli százaléka nem éri el a 12-t");
    }
    else if (szpontok <= 12 && ipontok <= 12){
        alert("Sikertelen vizsga! Sem a szóbeli, sem az írásbeli százaléka nem érte el a 12-t");
    }
}