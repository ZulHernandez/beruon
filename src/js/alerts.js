function hola() {
    Swal.fire({
        title: '¡Oh, me has descubierto!',
        text: 'Soy un hurón, la mascota de la empresa.',
        imageUrl: 'src/imgs/uron.png',
        imageHeight: 200,
        confirmButtonColor: "#333333",
    })
}

function servicios(id) {
    switch (id) {
        case 1:
            Swal.fire({
                title: 'plataforma web',
                text: 'Cualquier applicación, sistema o página que se te ocurra siempre en internet.',
                imageUrl: 'src/imgs/pagweb-N.svg',
                imageHeight: 200,
                confirmButtonColor: "#333333",
            });
            break;
        case 2:
            Swal.fire({
                title: 'infraestructura',
                text: 'Organiza, comunica y despliega tus datos a travéz de tus dispositivos.',
                imageUrl: 'src/imgs/infra-N.svg',
                imageHeight: 200,
                confirmButtonColor: "#333333",
            });
            break;
        case 3:
            Swal.fire({
                title: 'soporte técnico',
                text: 'Recibe etención y capacitación para el uso de tus nuevos sistemas Beruon.',
                imageUrl: 'src/imgs/soporte-N.svg',
                imageHeight: 200,
                confirmButtonColor: "#333333",
            });
            break;
        case 4:
            Swal.fire({
                title: 'apps móviles',
                text: 'Tu app para Android y iOS.',
                imageUrl: 'src/imgs/apps-N.svg',
                imageHeight: 200,
                confirmButtonColor: "#333333",
            });
            break;
    }
}