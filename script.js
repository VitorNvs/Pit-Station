function pitagoras(){
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = document.getElementById("c").value
    var equacao = document.getElementById("equacao")
    
    if(a.toString() == "" && b.toString() != "" && c.toString() != ""){
        b = parseInt(b)
        c = parseInt(c)
        a2 = b**2 + c**2
        a_real = Math.sqrt(a2)
        equacao.innerHTML = `${b}<sup>2</sup> + ${c}<sup>2</sup> = ${a_real.toFixed(2)}<sup>2</sup>`
    }
    else if(c.toString() == "" && b.toString() != "" && a.toString() != ""){
        b = parseInt(b)
        a = parseInt(a)
        c2 = a**2 - b**2
        if (c2 < 0){
            equacao.innerHTML = "Este não é um triangulo retangulo"
        }
        else{
            c_real = Math.sqrt(c2)
            equacao.innerHTML = `${b}<sup>2</sup> + ${c_real.toFixed(2)}<sup>2</sup> = ${a}<sup>2</sup>`
        }
    }
    else if(b.toString() == "" && c.toString() != "" && a.toString() != ""){
        c = parseInt(c)
        a = parseInt(a)
        b2 = a**2 - c**2
        if (b2 < 0){
            equacao.innerHTML = "Este não é um triangulo retangulo"
        }
        else{
            b_real = Math.sqrt(b2)
            equacao.innerHTML = `${b_real.toFixed(2)}<sup>2</sup> + ${c}<sup>2</sup> = ${a}<sup>2</sup>`
        }
    }
    else{
        equacao.innerHTML = "Preencha todos os campos necessários"
    }
}
