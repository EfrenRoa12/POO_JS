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



// segunda forma de crear un objeto
let persona2 = new Object();
//creamos los atributos
persona2.nombre = 'carlos';
persona2.direccion = 'saturno 15';
persona2.telefono = 5258963;

//mandamos a imprimir
console.log("el telefono es: "+persona2.telefono);