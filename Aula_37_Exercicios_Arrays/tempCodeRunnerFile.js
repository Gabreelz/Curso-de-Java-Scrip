function saldodoMes(entradas, saidas){
    const final = [];
    let saldoFinal = 0;
    const SaldoNegativos = [];

    for(let i = 0; i < entradas.length; i++){
        const saldoDia = entradas[i] - saidas[i];

        final.push({
            dia: i + 1,
            entrada: entradas[i],
            saidas: saidas[i],
            saldo: saldoDia
        });

        saldoFinal += saldoDia;
        
        if (saldoDia < 0){
            SaldoNegativos.push(i + 1); 
        }
    }

    return{
        final,
        saldoFinal,
        SaldoNegativos
    };
}