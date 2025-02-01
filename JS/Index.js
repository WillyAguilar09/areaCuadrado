function limpiar(){
document.getElementById("base").value="";
document.getElementById("altura").value="";
document.getElementById("area").value="";


}
function calcular(){
    let strbase=document.getElementById("base").value;
    let straltura=document.getElementById("altura").value;
    if (strbase=="" | straltura==""){
        Swal.fire({
            title: 'Error!',
            text: 'Debe llenar los espacios de base y altura',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }else {
        base=parseFloat=strbase
        altura=parseFloat=straltura
        document.getElementById("area").value=base*altura;
    }

}