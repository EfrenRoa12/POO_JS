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

//atra forma de acceder
console.log(persona['apellido']);
//for in
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);//accedemos a todos llos nombres de las propiedades de nuestro objeto


    console.log(persona[nombrePropiedad])//accedemos a valores de cada uno de las propiedades de nuestro objeto
}