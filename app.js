
//Inkomst uträkning

// Väljer knappen som ska trigga inkomst-funktionen
const incomebtn = document.querySelector(".input1__btn");
//Funktionen som visar och räknar ut den totala inkomsten
function Displayincome(e) {
//Behövs för att sidan inte ska ladda om så fort funktionen körts
    e.preventDefault();
    const incomeNum = document.querySelector(".input1__value").value;
    const divInput = document.querySelector(".income__value");
//Lägger den senaste inmatade inkomsten i en lista
    divInput.innerHTML ="<li>"+ incomeNum + "</li>";

//Räknar ut den totala inkomsten genom att addera alla värden som läggs in i income input
    incometotal.innerHTML = (Number(incometotal.innerHTML)) + (Number(incomeNum));

//Räknar ut vinsten av totala inkomsten och utgifterna
    const incometotal = document.querySelector(".income_tot");
    const coststotal = document.querySelector(".costs_tot");
    const result = document.querySelector(".result_total");
    result.innerHTML = (Number(incometotal.innerHTML)) - (Number(coststotal.innerHTML));
}

    incomebtn.addEventListener("click", Displayincome);

//Utgifter

//Jag har gjort samma funktion för att räkna ut utgifter som inkomster. 

const costsbtn = document.querySelector(".input2__btn");
    
    function Displaycosts(e) {
        e.preventDefault();
        const divInput = document.querySelector(".costs__value");
        const costsNum = document.querySelector(".input2__value").value;
    
        divInput.innerHTML = "<li>"+ costsNum + "</li>"
        
        coststotal.innerHTML = (Number(coststotal.innerHTML)) + (Number(costsNum));

        const coststotal = document.querySelector(".costs_tot");
        const incometotal = document.querySelector(".income_tot");
        const result = document.querySelector(".result_total");
        result.innerHTML = (Number(incometotal.innerHTML)) - (Number(coststotal.innerHTML));
    }

        costsbtn.addEventListener("click", Displaycosts);
    




