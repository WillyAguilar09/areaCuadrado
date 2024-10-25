function calcular() {

    let strBase = document.getElementById("base").value
    let strAltura = document.getElementById("altura").value
   

    if (strBase === "") {
        alert("Valor en Blanco")
    } else if (strAltura === "") {
        alert("Valor en blanco")
    } else {
        let a = parseInt(strBase)
        let b = parseInt(strAltura)
       

        if (a === 0 || b===0) {
            alert("Valor de A no puede ser igual a Cero")
        } else {
            let area= a*b

                document.getElementById("area").value = area


            
        }
    }
}
function limpiar (){
    document.getElementById("base").value=""
    document.getElementById("altura").value=""
    document.getElementById("area").value=""

    
    
}