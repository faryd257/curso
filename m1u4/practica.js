
let distancia = parseInt(prompt('ingrese a que distancia se encuentra'));

if (distancia >=0 && distancia <=1000 ){
  alert('es recomendable ir a pie')
} else if(distancia >1000 && distancia<=10000 ) {
  alert('es recomendable ir en bicicleta' )
} else if (distancia >10000 && distancia<=30000){
  alert('es recomendable ir en colectivo' )
} else if (distancia >30000 && distancia<=100000){
  alert('es recomendable ir en auto' ) 
} else {alert('es recomendable ir en avion')}
