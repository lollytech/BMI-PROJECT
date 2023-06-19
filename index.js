document.title = "BMI Calculator"

const weightInput = document.getElementById("weightin")
const heightInput = document.getElementById("heightin")
const button = document.getElementById("btn")
const result = document.getElementById("result")

const comment= document.querySelector(".comment")

comment.style.display= "none"


button.addEventListener("click", ()=>{
    // convert height from centimeters to meters
    let height = heightInput.value/100
    
    let weight = weightInput.value

    // fixing to decimal places
    let bmi =parseFloat(weight/(height**2)).toFixed(2)
    result.textContent =  bmi

    // conditional statemnt
    comment.style.display = ""
    if (bmi < 18.6) {
        comment.textContent = "Under Weight"
    } else if (bmi >= 18.6 && bmi < 24.9) {
        comment.textContent = "Normal"
    }else{
        comment.textContent = "Over Weight"
    }
})



// function calculateBMI() {

   

//     let bmi = (weightInput / ((heightInput * heightInput) / 10000)).toFixed(2)


//     if (weightInput === "" || isNaN(weightInput)) {
//         result.textContent = bmi

//     } else if (heightInput === "" || isNaN(heightInput)) {
//         result.textContent = bmi

//     }


// }








