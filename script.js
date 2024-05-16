document.getElementById('botaoSomar').addEventListener('click', function() {
  let numero1 = parseFloat(document.getElementById('numero1').value);
  let numero2 = parseFloat(document.getElementById('numero2').value);
  
  let resultado = numero1 + numero2;
  
  document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
});

function calcularTroco() {
  let valorPagoInput = document.querySelector("#valorPago");
  let precoProdutoInput = document.querySelector("#precoProduto");

  let valorPago = Number(valorPagoInput.value);
  let precoProduto = Number(precoProdutoInput.value);

  let troco = valorPago - precoProduto;
  let resultado = document.querySelector("#resultado");
  resultado.textContent = "O troco a ser dado é de: " + troco;
}

document.querySelector("#calcularTroco").addEventListener("click", calcularTroco);
