$("#id_formulario").validate({
    errorClass: 'errors',
    rules: {
        "txtNombre": {
            required: true,
            minlength: 2
        },
        "txtRut": {
            required: true
        },
        "txtEmail": {
            required: true,
            email: true
        },
        "txtMovil": {
            required: true,
            minlength: 9
        },
        "txtMensaje": {
            required: true,
            minlength: 10
        }


    },

    messages: {
        "txtNombre": {
            required: 'Ingrese nombre',
            minlength: 'El nombre debe contener minimo 2 caracteres'
        },
        "txtRut": {
            required: 'Ingrese rut'
        },
        "txtEmail": {
            required: 'Ingrese email',
            email: 'Formato incorrecto'
        },
        "txtMovil": {
            required: 'Ingrese telefono movil',
            minlength: 'El teléfono debe contener 9 dígitos'
        },
        "txtMensaje": {
            required: 'Ingrese un mensaje',
            minlength: 'El mensaje debe tener al menos 10 caracteres'
        }
    }
});

function alphaOnly(event) {
    var key = event.keyCode;
    `enter code here`
    return ((key >= 65 && key <= 90) || key == 8);
};

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
};