$('.button').on("click", converter)

function converter(){
    var volume = $('#volume').cleanVal()
    var price = $('#price').val()
    
    if($("#volume").cleanVal().length == ""){
    
        $('#answer').html("Valores inválidos, Por favor insira os valores. ").css('color', 'red')
        $("#volume").focus()
    
    }
    else if($('#volume').cleanVal().length == 1){
        
        var priceLiter = (price / volume) 
        $('#answer').html(`O preço a pagar por litro é de R$${priceLiter.toFixed(2).replace(".", ",")}`).css('color', 'blanchedalmond')

    }
    else if($('#volume').cleanVal() >= 1000){
          var priceLiter = (price / volume) * 1000
          $('#answer').html(`O preço a pagar por litros é de R$${priceLiter.toFixed(2).replace(".", ",")}`).css('color', 'blanchedalmond')
    }else if(volume <= 999){
          var priceLiter = (price / volume) * 1000
          $('#answer').html(`O preço a pagar por litro é de R$${priceLiter.toFixed(2).replace(".", ",")} `).css('color', 'blanchedalmond')
    }
      
    $("body").find('main').find('input,  numberarea').val('');
        
}

            

