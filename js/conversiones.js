
function valor(e){
  valor1 = document.getElementById('valor').value;
  base = document.getElementById('magnitud').value;
  convertir = document.getElementById('magnitud2').value;
  var resultado;
  if(base == 'nulo' || convertir=='nulo'){
    alert('elija los datos correctos');
    resultado = "";
    convertir.selectedIndex = 0;
  }
  if(base == convertir){
    resultado = 'los datos de base y escala de conversion son iguales';
  }
  if(base == 'cm' && convertir == 'm'){
    resultado = valor1/100 + 'm';
  }
  if(base == 'cm' && convertir == 'Km'){
    resultado = valor1/1000 + 'Km';
  }
  if(base == 'm' && convertir == 'Km'){
    resultado = valor1/100 + 'Km';
  }
  if(base == 'm' && convertir == 'cm'){
    resultado = valor1*100 + 'cm';
  }

  document.getElementById("resultado").innerHTML = resultado;
}
