/*
3. Factory function com prototype compartilhado Crie uma factory que gere centenas de instâncias 
sem duplicar métodos em memória. Os métodos devem ficar em um objeto de prototype separado. 
Prove que as instâncias compartilham os mesmos métodos, mas mantêm estados independentes.
*/

const heroPro = {
    attack() {
        return `${this.name} faces ${this.enemy} with ${this.weapon}.`;
    },

    damages(damage) {
        this.life -= damage;
        return `${this.name} suffers ${damage} damage. Life: ${this.life}`
    },

    status() {
        return `${this.name} | Life: ${this.life} | Local: ${this.local}`
    }
};

function Hero(name, weapon) {
    const hero = Object.create(heroPro);

    hero.name = name;
    hero.weapon = weapon;
    hero.life = 100;
    hero.local = 'ítaca';
    hero.enemy = 'nenhum';

    return hero;
}

const odisseu = Hero('Odisseu', 'Cunning');
const ciclop = Hero('Polifemo', "Force");
const witcher = Hero('Circe', 'Mage');

odisseu.local = 'Ciclop Cave';
odisseu.enemy = "Polifemo";

ciclop.local = 'Cave';
ciclop.enemy = 'odisseu';

witcher.local = 'Eéia Island';

console.log(odisseu.attack());
console.log(ciclop.damages(40));
console.log(odisseu.damages(10));
console.log(witcher.status());

console.log(odisseu.attack === ciclop.attack);   
console.log(ciclop.attack === witcher.attack); 

console.log(heroPro.isPrototypeOf(odisseu));    
console.log(heroPro.isPrototypeOf(ciclop));    
console.log(heroPro.isPrototypeOf(witcher)); 