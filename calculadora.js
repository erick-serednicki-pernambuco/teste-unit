function soma (a,b){
    return a+b
}
exports.soma = soma;

function subtracao (a,b){
    return a-b
}
exports.subtracao = subtracao;

function multiplicao (a,b){
    return a*b
}
exports.multiplicao = multiplicao;

function divisao (a,b){
    return a/b
}
exports.divisao = divisao;

function exponenciacao (a,b){
    var aux =1;
    var value = a;
    for (let aux ; aux <= b; aux++) {
        value *= a
    }
    return value
}
exports.exponenciacao = exponenciacao;