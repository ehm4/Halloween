/*Functions to use inside halloween exercise*/
// Una function es un módulo que describe un algoritmo simple
// Suele tener parámentros
// Por otra parte javascript es orientado a objetos y el objeto principal es document(la página)
function mostrar(imagen){
    document.getElementById(imagen).classList.toggle("hidden");
}
function ocultar(imagen){
    document.getElementById(imagen).classList.toggle("hidden");
}

function sonar(audio){
    document.getElementById(audio).play()
}