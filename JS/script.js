// Constantes universais 
const addressForm = document.querySelector("#form-container")
const cepInput = document.querySelector("#cep-input");
const cepValue = document.querySelector("#cep-info");
const locationInput = document.querySelector("#location");
const addressInput = document.querySelector("#address");
const ufInput = document.querySelector("#uf");
const complementInput = document.querySelector("#complement");
const stateInput = document.querySelector("#state");
const neighborhoodInput = document.querySelector("#neighborhood");
const formInputs = document.querySelector("[data-input]")
const btnInput = document.querySelector("#btnInput");

// Iniciando validação do CEP
// cepInput.addEventListener("keypress", (e) => {
//     const onlyNumbers = /^[0-9]+$/;
//     const key = String.fromCharCode(e.keyCode);

//     // Aparecer apenas números
//     if(!onlyNumbers.test(key)){
//         e.preventDefault();
//         return;
//     }
// })

// Captar e garantir os 8 digitos do CEP
cepInput.addEventListener("Keyup", (e) =>{
    const inputValue = e.target.value;

    if(inputValue.length === 8){
        getAddress(inputValue);
    }
})

// Consumir o CEP na API
const getAddress = async (cep) => {
    console.log(cep);
}





