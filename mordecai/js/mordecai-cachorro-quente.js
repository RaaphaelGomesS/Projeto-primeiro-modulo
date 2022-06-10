function selecionar(){
    
    var Usr= prompt("Escolha 1 ou 2");
    
    while (true){
        if (Usr == 1){
            return window.location.href = "../html/mordecai-cachorro-quente-bom.html"
        
        }else if (Usr == 2){
            return window.location.href = "../html/mordecai-cachorro-fracasso1.html"
        
        }else{
            alert("Valor inserido inválido!");
            var Usr= prompt("Escolha 1 ou 2")
        }
    }
}