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

//estamos creando 2 propiedades
persona.tel = '4587458745';
//hay que tener cuidado que no sea erroneo por el 1 y l
persona.te1 = '4587458745';

//si es asi se modifica la linea
persona.tel = '9258962596';
console.log(persona.tel);


//ahora eliminamos la propiedad
delete persona.tel
console.log(persona.tel)//se elminina la propiedad de telefono