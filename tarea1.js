//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const botonCalcular = document.querySelector("button");

botonCalcular.onclick = function() {
  const salarioAnualUsuario = Number(document.querySelector(".salario-anual").value);
  const salarioMensual = document.querySelector("#salario-mensual");
  const calculoSalarioMensual = (salarioAnualUsuario / 12).toFixed(2);
  salarioMensual.value = calculoSalarioMensual;
  return false;
};
