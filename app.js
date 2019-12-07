
//Inkomst uträkning
const incomebtn = document.querySelector(".input1__btn");

function Displayincome(e) {
    e.preventDefault();
    const incomeNum = document.querySelector(".input1__value").value;
    const divInput = document.querySelector(".income__value");

    divInput.innerHTML ="<li>"+ incomeNum + "</li>";

    const incometotal = document.querySelector(".income_tot");
    
    incometotal.innerHTML = (Number(incometotal.innerHTML)) + (Number(incomeNum));

    const result = document.querySelector(".result_total");
    result.innerHTML = (Number(incometotal.innerHTML)) - (Number(coststotal.innerHTML));
}

    incomebtn.addEventListener("click", Displayincome);

//Utgifter
const costsbtn = document.querySelector(".input2__btn");
    
    function Displaycosts(e) {
        e.preventDefault();
        const divInput = document.querySelector(".costs__value");
        
        const costsNum = document.querySelector(".input2__value").value;
    
        divInput.innerHTML = "<li>"+ costsNum + "</li>"
    
        const coststotal = document.querySelector(".costs_tot");
        
        coststotal.innerHTML = (Number(coststotal.innerHTML)) + (Number(costsNum));

        const result = document.querySelector(".result_total");
        result.innerHTML = (Number(incometotal.innerHTML)) - (Number(coststotal.innerHTML));
    }
        costsbtn.addEventListener("click", Displaycosts);
    
    
const result = document.querySelector(".result_total");
const coststotal = document.querySelector(".costs_tot");
const incometotal = document.querySelector(".income_tot");

result.innerHTML = (Number(incometotal.innerHTML)) - (Number(coststotal.innerHTML));

