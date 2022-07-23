//esto es un objetopersona
let persona = {
    //atributo
    nombre: "juan",
    apellido: "gonzalez",
    email: 'dddd@gmail.com',
    edad: 28,

    // metodo
    // metodo constructor
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido
    }
}

//accedemos a los valores
console.log(persona.email);
console.log(persona.edad);

console.log(persona.nombreCompleto());//imprimimos el returno
