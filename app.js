//INPUTS
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

//OUTPUTS
const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

//FORM ELEMENT
const form = document.querySelector("form");

//ADDING THE SUBMIT EVENTLISTENER TO FORM
form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months=(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)

function  validate() {
    const inputs=document.querySelector("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (li.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "This field is required";
            validator = false;
        }else if(monthInp.value > 12){
            monthInp.style.borderColor = "red";
            parent.querySelector("small").innerText = "This field is required";
            validator = false;
        }else if(dayInp.value > 31){
            dayInp.style.borderColor = ("small").innerText = "Must be a valid day";
            validator = false;
        }else{
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
            validator = true;
        }
    })
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if(validate()) {
        if (dayInp.value > day) {
            day=day+months{month - 1}
        }
        if(monthInp.value>month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - dayInp.value;
        const m = month - dayInp.value;
        const y = year - dayInp.value;

        dayOtp.innerHTML = d;
        monthOtp.innerHTML = m;
        yearOtp.innerHTML = y;
    }
}