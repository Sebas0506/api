/*let mprods=new Map();
let carrito=new Array();*/

const btnClient=document.getElementById("btnClient")
btnClient.addEventListener("click",()=>{
    fetch("http://localhost:1339/api/client")
    .then(response => response.json())
    .then(json => {
        const lstClient = document.getElementById("lstClient");
        let options="";
        for(let i=0; i<json.length; i++){
            options+=`<option value='${json[i].id}'>${json[i].name}</option>`;
        }
        lstClient.innerHTML=options;
    });
        
});

const btnProduct=document.getElementById("btnProduct")
btnProduct.addEventListener("click",()=>{
    fetch("http://localhost:1339/api/product")
    .then(response => response.json())
    .then(json => {
        const lstProduct = document.getElementById("lstProduct");
        let options="";
        for(let i=0; i<json.length; i++){
            mprods.set(json[i].id, json[i]);
            options+=`<option value='${json[i].id}'>${json[i].name} ${json[i].quantity}</option>`;
        }
        lstProduct.innerHTML=options;
    });
        
});

const btnAddProd=document.getElementById("btnAddProd")
btnAddProd.addEventListener("click",()=>{
    let name=document.getElementById("txtnProduct").value
    let price=document.getElementById("txtnPrice").value
    let quantity=document.getElementById("txtnQuantity").value
    let data={
        name:name,
        cost:price,
        quantity:quantity,
    }
    console.log(data)
    fetch("http://localhost:1339/api/product",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(json => {
        let detProductos=document.getElementById("detProductos")
        detProductos.innerHTML='<p>Se inserto un producto en BD</p>'
    })
});

const btnAddClient=document.getElementById("btnAddClient")
btnAddClient.addEventListener("click",()=>{
    let name=document.getElementById("txtnName").value
    let rfc=document.getElementById("txtnRfc").value
    let zipcode=document.getElementById("txtnZipcode").value
    let data={
        name:name,
        rfc:rfc,
        zipcode:zipcode,
    }
    console.log(data)
    fetch("http://localhost:1339/api/client",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(json => {
        let detClient=document.getElementById("detClient")
        detClient.innerHTML='<p>Se añadió al cliente con éxito</p>'
    })
});