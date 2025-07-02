// Constantes universais
const addressForm = document.getElementById("form");
const cepInput = document.querySelector("#cep-input");
const cepValue = document.querySelector("#cep-info");
const locationInput = document.querySelector("#location");
const addressInput = document.querySelector("#address");
const ufInput = document.querySelector("#uf");
const complementInput = document.querySelector("#complement");
const stateInput = document.querySelector("#state");
const neighborhoodInput = document.querySelector("#neighborhood");
const btnInput = document.querySelector("#btnInput");

function validaCep(cep) {
  const cepRegex = /^\d{5}\d{3}$/;

  if (!cepRegex.test(cep)) {
    return false;
  }
  return true;
}

addressForm.addEventListener("submit", () => {
  const cepValueInput = cepInput.value;
  const cepValido = validaCep(cepValueInput);

  if (!cepValido) {
    alert("CEP inválido");
  }

  consultarCep(cepValueInput);
});

const consultarCep = async (cep) => {
  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      cepValue.value = data.cep;
      locationInput.value = data.localidade;
      neighborhoodInput.value = data.bairro;
      addressInput.value = data.logradouro;
      ufInput.value = data.uf;
      complementInput.value = data.complemento;
      stateInput.value = data.estado;
    });
};
