let año
let mes
let dia

dia = Number(prompt("Ingrese el dia de la fecha"))
mes = Number(prompt("Ingrese el mes de la fecha"))
año = Number(prompt("Ingrese el año de la fecha"))

if ((año%4==0) && ((año%100!=0) || (año%400==0))) {
    alert("EL año " + año + " ingresado es biciesto");
    b = 1;
} else {
    alert("El año " + año + " ingresado no es biciesto");
    b = 0;
}

if ((dia>=1 && dia<=31) && (mes>=1 && mes<=12) && (año>=1582 && año<=9999)) {
    alert("La fecha ingresada  cumple con los requerimientos para ser una fecha")
} else {

    alert("La fecha ingresada no cumple con los requerimientos para ser una fecha")
    
}
