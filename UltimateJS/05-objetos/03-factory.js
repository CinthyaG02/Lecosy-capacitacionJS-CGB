
function crearUsuario(name, email) {
    let user = {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave ... ');

        }
    };
}

let user1 = crearUsuario('Nicolas', 'nicolas@holamundo.com');
let user2 = crearUsuario('Felipe', 'felipe@holamundo.com');

console.log(user1, user2);