/*4. Sistema de plugins baseado em delegação
Implemente sistema onde objetos podem receber novos comportamentos dinamicamente sem alterar suas 
instâncias diretamente. Use prototype chain ou composição para permitir que um “plugin” adicione métodos 
acessíveis a todos os objetos já criados.*/

const DetectivePro = {
    status(){
        return `${this.name} | Case: ${this.case} | Location ${this.location}`;
    }
}

function Detective(name){
    const detective = Object.create(DetectivePro);
    
    detective.name = name;
    detective.case = "Unknown";
    detective.location = 'Tokyo';

    return detective;
}

//Plugin para adicionar metodos acessiveis
function usePlugin(plugin){
    Object.assign(DetectivePro, plugin);
}

const conan = Detective('Conan Edogawa');
const kogoro = Detective('Kogoro Mouri');

usePlugin({
    investigate(caseName){
        this.case = caseName;
        return `${this.name} start investigating: ${this.caseName}.`;
    }
});

usePlugin({
    deduce() {
        return `${this.name} solves the case using sharp deduction.`;
    }
});

usePlugin({
    disguise(identity){
        return `${this.name} use disguise as ${identity}`;
    }
});

console.log(conan.investigate('Murder at the Mansion'));
console.log(conan.deduce());
console.log(conan.disguise('Sleeping Kogoro'));
console.log(conan.status());

console.log(kogoro.investigate('Missing Necklace'));
console.log(kogoro.deduce());
console.log(kogoro.status());
