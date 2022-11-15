function addCaracter(caracter) {
  const valorDisplay = document.querySelector(".display").value

  document.querySelector(".display").value = valorDisplay + caracter
}

function limpaTela() {
  document.querySelector(".display").value = ""
}

function calcular() {
  const valorDisplay = document.querySelector(".display").value

  document.querySelector(".display").value = eval(valorDisplay)

}

function inverterNumero(){
  const valorDisplay = document.querySelector(".display").value

  document.querySelector(".display").value = valorDisplay * -1

}