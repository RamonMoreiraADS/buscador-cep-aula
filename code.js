async function getCepInfo() {
    var cep = document.querySelector("#cep");
  
    if (!(cep.value.length == 8)) {
      alert("Invalid CEP");
      return;
    }
  
    var reply = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
    var data = await reply.json();
  
    if (data.erro) {
      alert("Cep Not Found!");
      return;
    }
  
    console.log(data.logradouro);
    console.log(data.bairro);
    console.log(data.localidade);
    console.log(data.estado);
  
    document.querySelector("#rua").innerHTML = data.logradouro;
    document.querySelector("#bairro").innerHTML = data.bairro;
    document.querySelector("#cidade").innerHTML = data.localidade;
    document.querySelector("#estado").innerHTML = data.estado;
    document.querySelector("#uf").innerHTML = data.uf;
    document.querySelector("#regiao").innerHTML = data.regiao;
    document.querySelector("#ddd").innerHTML = data.ddd;
    document.querySelector("#siafi").innerHTML = data.siafi;

    document.querySelector(".info").style.border = solid;//testando modificações de css pelo js

  }

  function clearCep() {
    document.querySelector("#cep").value = "";
    document.querySelector("#rua").innerHTML = "";
    document.querySelector("#bairro").innerHTML = "";
    document.querySelector("#cidade").innerHTML = "";
    document.querySelector("#estado").innerHTML = "";
    document.querySelector("#uf").innerHTML = "";
    document.querySelector("#regiao").innerHTML = "";
    document.querySelector("#ddd").innerHTML = "";
    document.querySelector("#siafi").innerHTML = "";

    document.querySelector(".info").style.border = none;//testando modificações de css pelo js
  }
