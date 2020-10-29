function validacion() {
    try{
        var rfc = document.getElementById("rfc").value;
        var cooordenadas = document.getElementById("coordenadas").value;
        if (!(rfc == null || rfc.length == 0 || /^\s+$/.test(rfc)) && 
           (!(/^([A-ZÑ]{1}[AEIOU]{1}[A-Z]{2}|[A-ZÑ&]{3})[\d]{2}(0[\d]|1[0-2])(0[\d]|1[\d]|2[\d]|3[0-1])([A-Z,\d]{3})/.test(rfc)))){

            alert('Hay errores en el RFC ingresado');
            return false;
        }else if (!(cooordenadas == null || cooordenadas.length == 0 || /^\s+$/.test(cooordenadas)) && 
           !(/^([0-8]\d|90|\d)[:|°]([0-5]\d|\d)[:|'|′]([0-5]\d|\d)(\.[\d]{1,4})?["|″][NS](,|\s|)(0|[\d]{2}|1[0-7]\d|180|\d)[:|°]([0-5]\d|\d)[:|'|′]([0-5]\d|\d)(\.[\d]{1,4})?["|″][EO]/.test(cooordenadas))){
            alert('Los valores de coordenadas ingresados no son válidos}');
            return false;
        }
        localStorage["rfc"]= rfc;
        localStorage["coordenadas"]= cooordenadas;
        return true;
    }catch(error){
        console.error(error);
    }
    
}
