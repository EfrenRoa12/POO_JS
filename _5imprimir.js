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

console.log(persona.nombre+' '+' '+persona.apellido);//imprime solo el nombre y apelidp

//trae todo lo que contiene persona
for (nombrePropoedad in persona) {
    console.log(persona[nombrePropoedad])
}

let personaArray = Object.values (persona);
console.log(personaArray);
