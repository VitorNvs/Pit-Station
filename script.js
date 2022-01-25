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
    else if(b.toString() != "" && c.toString() != "" && a.toString() != ""){
        equacao.innerHTML = "Um dos campos não deve ser preenchido"
    }
    else{
        equacao.innerHTML = "Preencha todos os campos necessários"
    }
}

function equacao2(){
    var a = document.getElementById("2a").value
    var b = document.getElementById("2b").value
    var c = document.getElementById("2c").value
    if(a.toString() == "" || b.toString() == "" || c.toString() == ""){
        alert("alert","danger","Preencha todos os campos necessários")
        alert("alert2",enable=false)
    }
    else if(a == 0){
        alert("alert","danger","O elemento A não pode ser igual a zero!")
    }
    else{
        alert("alert",enable=false)
        a = parseInt(a)
        b = parseInt(b)
        c = parseInt(c)
        var equacao = document.getElementById("equacao2")
        a_texto = a
        b_texto = `+ ${b}x`
        c_texto = `+ ${c}`
        if(b < 0){
            b_texto = `- ${b*(-1)}x` 
        }
        else if(b == 0){
            b_texto = ""
        }
        if(c < 0){
            c_texto = `- ${c*(-1)}` 
        }
        else if(c == 0){
            c_texto = ""
        }

        equacao.innerHTML = `${a_texto}x<sup>2</sup> ${b_texto} ${c_texto} = y`
        delta = b**2 - (4*a*c)
        if (delta < 0){
            alert("alert","primary","Não há raizes reais")
            alert("alert2",enable=false)
        }
        else {
            if (delta == 0){
                raiz = ((0-b) + (Math.sqrt(delta)))/2*a
                alert("alert","primary",`Raíz: ${raiz}`)
            }
            else{
                raiz1 = ((0-b) + (Math.sqrt(delta)))/2*a
                raiz2 = ((0-b) - (Math.sqrt(delta)))/2*a
                alert("alert","primary",`Raízes: ${raiz1.toFixed(2)},${raiz2.toFixed(2)}`)
            }
            var x = (0-b)/2*a
            var y = (0-delta)/4*a  

            if(a > 0){
                alert("alert2","primary",`Valor mínimo de X: ${x} / Valor mínimo de Y: ${y}`)
            }
            else{
                alert("alert2","primary",`Valor máximo de X: ${x} / Valor máximo de Y: ${y}`)
            }
        }
        
    }
}

function alert(id, type = "", message = "",enable = true){
    var alert_div = document.getElementById(`${id}`)
    if (enable == true){
        alert_div.innerHTML = `<div id = alert class="alert alert-${type}" role="alert">${message}</div>` 
    }
    else{
        alert_div.innerHTML = `<div id = ${id}></div>`
    }
}