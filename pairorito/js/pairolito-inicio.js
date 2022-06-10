function selecionar(){
    
    var Usr= prompt("Escolha 1 ou 2");
    
    while (true){
        if (Usr == 1){
            return window.location.href = "../html/pairolito-bolo.html"
        
        }else if (Usr == 2){
            return window.location.href = "../html/pairolito-tiramisu.html"
        
        
        }else{
            alert("Valor inserido inválido!");
            var Usr= prompt("Escolha 1 ou 2")
        }
    }
}