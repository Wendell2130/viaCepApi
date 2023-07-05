document.getElementById("cep").addEventListener("focus",function(){
    document.getElementById("box").style.display="none";
    document.getElementById("cep").value="";
});
document.getElementById("btn").addEventListener("click",function(){
    var cep=document.querySelector("#cep").value;
    cep=cep.replace(/[^0-9]/g,"");
    const resposta=document.querySelector("#resposta");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response)=>response.json()) //manobra a tirada do axios
    .then((dados)=>{
        if(dados.cep!=undefined){
            for(let d in dados){
                 if(!dados[d]) dados[d]="[Não disponível]";
            }
                resposta.innerHTML=dados.cep+"<br><br>Logradouro: "+dados.logradouro+"<br>Complemento: "
                +dados.complemento+"<br>Bairro: "+dados.bairro+"<br> Cidade: "+dados.localidade+
                "<br>Estado: "+dados.uf+"<br>Código Fone: "+"("+dados.ddd+")";
                document.getElementById("box").style.display="block";
        }else alert("CEP inválido")
    }).catch((err)=>{
    console.log(err)
});

document.querySelector("#close").addEventListener("click",function(){
    document.getElementById("box").style.display="none";
});
    
});
document.getElementById("cep").addEventListener("keyup",function(e){
   // alert(e.target.value.toString().length)
   e.target.value=e.target.value.replace(/[^0-9]/g,"");
   if(e.target.value.length<=5 ){
   
    e.target.value=e.target.value.replace(/([0-9]{2})([0-9]{1,3})/,"$1-$2");
   }else{
    e.target.value=e.target.value.replace(/([0-9]{2})([0-9]{3})([0-9]{1,3})/,"$1-$2-$3");
   } 
   console.log( e.target.value);
});