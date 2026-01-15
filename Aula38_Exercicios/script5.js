/*. Clone seguro de objetos complexos 
Implemente uma função de clonagem que copie propriedades, 
preserve descriptors (writable, enumerable, etc.) e mantenha a cadeia de prototypes original. 
O desafio é evitar perda de comportamento e não usar bibliotecas externas. */

function cloneSeguro(obj, mapa = new WeakMap()) {
    if (obj === null || typeof obj !== "object") return obj;

    if (mapa.has(obj)) return mapa.get(obj);

    const clone = Object.create(Object.getPrototypeOf(obj));
    mapa.set(obj, clone);

    const descriptors = Object.getOwnPropertyDescriptors(obj);

    for (const chave of Object.keys(descriptors)) {
        const descriptor = descriptors[chave];

        if ("value" in descriptor) {
            descriptor.value = cloneSeguro(descriptor.value, mapa);
        }

        Object.defineProperty(clone, chave, descriptor);
    }

    return clone;
}

    const Hbase = {
        Fi(){
            return `${this.nome} fighting`;
    }};

    const batman = Object.create(Hbase);
    Object.defineProperty(batman, "name", {
    value: "Batman",
    writable: false,
    enumarable: true
});
batman.gadgets = ["Batarang", "Gancho"];

const superman = Object.create(Hbase);
Object.defineProperty(superman, "name", {
    value: "Superman",
    writable: false,
    enumerable: true
});
superman.powers = ["Strength", "Flight", "Heat Vision"];

const batmanClone = cloneSeguro(batman);
const supermanClone = cloneSeguro(superman);

console.log(Object.getPrototypeOf(batmanClone) === Hbase); 
console.log(Object.getPrototypeOf(supermanClone) === Hbase); 

// Métodos funcionam
console.log(batmanClone.Fi()); 
console.log(supermanClone.Fi()); 

// Estado independente
batmanClone.gadgets.push("Drone");
console.log(batman.gadgets); 
console.log(batmanClone.gadgets); 

// Descriptor preservado
const desc = Object.getOwnPropertyDescriptor(batmanClone, "nome");
console.log(desc.writable);
