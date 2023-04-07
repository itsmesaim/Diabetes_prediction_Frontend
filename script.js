var currentTab = 0;
showTab(currentTab);
function showTab(n) {

    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == 0) {
        document.getElementById('nextBtn').innerHTML = 'Start Now'
    }
    else if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    fixStepIndicator(n)
}

function nextPrev(n) {

    var x = document.getElementsByClassName("tab");

    if (n == 1 && !validateForm()) return false;

    x[currentTab].style.display = "none";

    currentTab = currentTab + n;

    if (currentTab >= x.length) {

        document.getElementById("regForm").submit();
        return false;
    }

    showTab(currentTab);
}

function validateForm() {

    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    for (i = 0; i < y.length; i++) {

        if (y[i].value == "") {

            y[i].className += " invalid";

            valid = false;
        }
    }

    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) {

    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }

    x[n].className += " active";
}

function description(x) {
    let l = document.getElementsByClassName('element')
    let p = document.getElementsByClassName('description')
    l[x].style.display = 'none'
    p[x].style.display = 'initial'

}
function back(x, event) {
    event.preventDefault()
    let l = document.getElementsByClassName('element')
    let p = document.getElementsByClassName('description')
    l[x].style.display = 'block'
    p[x].style.display = 'none'
}

// logic
let thickness = null;
let pregnancy;
let bloodpressure;
let glucose = null;
let insulin;
let pedigree;
let age;
let BMI;

function tricepThickness() {
    const options = document.getElementsByName('1');
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            const valueRange = options[i].value.split('-');
            const min = parseInt(valueRange[0]);
            const max = parseInt(valueRange[1]);
            thickness = Math.floor(Math.random() * (max - min + 1) + min);
            break;
        }
    }
    if (thickness !== null) {
        // Use the selected thickness as needed
        console.log(`Selected tricep thickness: ${thickness}`);
    } else {
        alert('Please select an option');
    }
}


function bloodPressure() {
    let option1 = document.getElementById("pressure1");
    let option2 = document.getElementById("pressure2");

    if (option1.checked) {
        bloodpressure = Math.floor(Math.random() * (130 - 80 + 1)) + 80;
    } else if (option2.checked) {
        bloodpressure = Math.floor(Math.random() * (80 - 50 + 1)) + 50;
    }
}





function glucoseLevel() {
    let option1 = document.getElementById("glucose1");
    let option2 = document.getElementById("glucose2");
    let option3 = document.getElementById("glucose3");
    let option4 = document.getElementById("glucose4");

    if (option1.checked) {
        glucose = Math.floor(Math.random() * (180 - 140 + 1)) + 140;
    } else if (option2.checked) {
        glucose = Math.floor(Math.random() * (160 - 120 + 1)) + 120;
    } else if (option3.checked) {
        glucose = Math.floor(Math.random() * (140 - 100 + 1)) + 100;
    } else if (option4.checked) {
        glucose = Math.floor(Math.random() * (120 - 80 + 1)) + 80;
    }
}


function insulinDose() {
    let radios = document.getElementsByName('4');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            let value = 0;
            switch (radios[i].value) {
                case '0-5':
                    value = Math.floor(Math.random() * 6);
                    break;
                case '5-10':
                    value = Math.floor(Math.random() * 6) + 5;
                    break;
                case '10-15':
                    value = Math.floor(Math.random() * 6) + 10;
                    break;
                case '15-20':
                    value = Math.floor(Math.random() * 6) + 15;
                    break;
                default:
                    value = 0;
                    break;
            }
            insulin = value;
            break;
        }
    }
}



function calculatePedigree() {
    let radios = document.getElementsByName('5');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            let value = 0;
            switch (radios[i].value) {
                case '0':
                    value = 0;
                    break;
                case '0.5-1.5':
                    value = parseFloat((Math.random() * (1.5 - 0.5) + 0.5).toFixed(3));
                    break;
                case '1.5-2.5':
                    value = parseFloat((Math.random() * (2.5 - 1.5) + 1.5).toFixed(3));
                    break;
                default:
                    value = 0;
                    break;
            }
            pedigree = value;
            break;
        }
    }

}


function storeAge() {
  let inputAge = document.getElementById("ageInput").value;
  if (Number.isInteger(parseInt(inputAge))) {
    age = parseInt(inputAge);
  } else {
    alert("Please enter a valid integer for age.");
  }
}



function calculateBMI() {
  const bmiInput = document.getElementById("bmi-input");
  BMI = parseFloat(bmiInput.value);
}

function storePregnancy() {
    pregnancy = parseInt(document.getElementById("pregnancy").value);
}


function MainFunction() {
    tricepThickness();
    bloodPressure();
    glucoseLevel();
    insulinDose();
    calculatePedigree();
    storeAge();
    calculateBMI();
    storePregnancy();
}
