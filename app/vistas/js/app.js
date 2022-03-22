const cargarClientes=document.getElementById("btnClientes")
cargarClientes.addEventListener("click",()=>{
    fetch("http://localhost:1339/api/client")
    .then(response => response.json())
    .then(json => console.log(json))
})