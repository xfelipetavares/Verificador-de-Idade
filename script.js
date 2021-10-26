function verificador(){
    var data = new Date();
    var ano = data.getFullYear();
    var input_ano = document.getElementById(`input-ano`).value;
    var p_resultado = document.getElementById(`p-resultado`);
    var img_pessoa = document.getElementById(`img-pessoa`);
    var sexo = document.getElementsByName(`sexo`);
    var genero = ``;
    var genero2 = ``
    var periodo_vida = ``
    var idade = ano - Number(input_ano)

    function imagem_pessoa(){
        img_pessoa.src = `images/${periodo_vida}-${genero2}.png`;
        img_pessoa.style.display = `block`
    }

    if (input_ano.length == 0 || input_ano > ano || sexo[1].checked == false && sexo[0].checked == false ){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`);
    } else {
        if (sexo[0].checked){
            genero = `Homem`;
            genero2 = `h`
        } else if (sexo[1].checked){
            genero = `Mulher`;
            genero2 = `m`
        }
        if (idade >= 0 && idade <= 9){
            periodo_vida = `Criança`;
            imagem_pessoa()
        } else if (idade >= 10 && idade <= 18 ){
            periodo_vida = `Adolescente`;
            imagem_pessoa()
        } else if (idade >= 19 && idade <= 59){
            periodo_vida = `Adulto`;
            imagem_pessoa()
        } else if (idade > 60) {
            periodo_vida = `Idoso`
            imagem_pessoa()
        }
        p_resultado.innerHTML = `Detectado <strong>${genero}</strong>, <strong>${periodo_vida}</strong> de <strong>${idade}</strong> anos.`
    }

}