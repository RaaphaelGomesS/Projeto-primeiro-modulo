function selecionar(){
    
    var Usr= prompt("Escolha 1, 2 ou 3");
    
    while (true){
        if (Usr == 1){
            return window.location.href = "../html/mordecai-cachorro-quente.html"
    
        }else if (Usr == 2){
            return window.location.href = "../html/mordecai-ravioli-fracasso.html"
        
        }else if (Usr == 3){
            return window.location.href = "../html/mordecai-canjica-fracasso.html"
        
        }else{
            alert("Valor inserido inválido!");
            var Usr= prompt("Escolha 1, 2 ou 3")
        }
    }
}