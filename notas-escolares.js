/* Sistema de Notas Escolares

Transforme as notas do sistema numerico para o sistemas de caracteres ex: A, B ou C

Regras

>= 90 - A
>= 80 && < 90 - B
>= 70 && < 80 - C
>= 60 && < 70 - D
< 60 - F */

function nota_convertida(n) {
    if(n < 0 || n > 100) return -1

    if(n >= 90) return "A"
    else if(n >= 80 && n < 90) return "B"
    else if(n >= 70 && n < 80) return "C"
    else if(n >= 60 && n < 70) return "D"
    else return "F"
} 

console.log(nota_convertida(69));