function Calcular(){
 // Adquirir o peso e altura
    var peso = document.getElementById('valorPeso').value
    var altura = document.getElementById('valorAltura').value
    document.getElementById('row1')
    document.getElementById('row2')
    document.getElementById('row3')
    document.getElementById('row4')
    document.getElementById('row5')



 // Verificação se o formulário foi preenchido corretamente   
    if( peso == 0 && peso == '' || altura == 0 && altura == ''){
       var alert = document.getElementById('textInfo').innerHTML = 'Verifique as informações e preencha corretamente.'
       textInfo.style.color = 'red'
    }

    else{
// Calculo do IMC
    var calculo = peso / (altura)**2
// Arrendodamento     
    var imc = parseFloat(calculo.toFixed(1))
    var resultado = document.getElementById('resultado').innerHTML = `Seu IMC: ${imc}`
    var alert = document.getElementById('textInfo').innerHTML = 'Verifique a tabela e veja a sua classificação.'
    textInfo.style.color = 'black'

    if(imc < 18.5){
        row1.style.backgroundColor = '#1ECD97'
        row2.style.backgroundColor = 'white'
        row3.style.backgroundColor = 'white'
        row4.style.backgroundColor = 'white'
        row5.style.backgroundColor = 'white'
    
    }else if (imc > 18.5 && imc < 24.9){
        row1.style.backgroundColor = 'white'
        row2.style.backgroundColor = '#1ECD97'
        row3.style.backgroundColor = 'white'
        row4.style.backgroundColor = 'white'
        row5.style.backgroundColor = 'white'
    
    }else if (imc > 25 && imc < 29.9){
        row1.style.backgroundColor = 'white'
        row2.style.backgroundColor = 'white'
        row3.style.backgroundColor = '#1ECD97'
        row4.style.backgroundColor = 'white'
        row5.style.backgroundColor = 'white'
    
    }else if (imc > 30 && imc < 39.9){
        row1.style.backgroundColor = 'white'
        row2.style.backgroundColor = 'white'
        row3.style.backgroundColor = 'white'
        row4.style.backgroundColor = '#1ECD97'
        row5.style.backgroundColor = 'white'
    
    }
    else{
        row1.style.backgroundColor = 'white'
        row2.style.backgroundColor = 'white'
        row3.style.backgroundColor = 'white'
        row4.style.backgroundColor = 'white'
        row5.style.backgroundColor = '#1ECD97'
    
    }
}

}