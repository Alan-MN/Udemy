function main(){
    let numero = 5;

    if (primo(numero)){
        console.log(numero + " é primo");   
    }
    else{
        console.log(numero + " não é primo");
    }
}

function primo(numero){
    let flag = 0
    for( var i  = 1; i <= numero/2; i++){
        if(numero%i == 0){
            flag++;
        }
    }

    if(flag == 1){
        return 1;
    }
    else{
        return 0;
    }
}

main()