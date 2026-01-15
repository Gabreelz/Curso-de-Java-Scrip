function criarcache({ttl = 3000, maxUses = 3} = {}){
    const cache = new Map();

    function set(key, value) {
        cache.set(key, {
            value,
            expiresAt: Date.now() + ttl,
            uses: 0
        });

function get(key) {

    const entry = cache.get(key);
    if (!entry) return underfined;

        if (Date.now() > entry.expiresAt){
            cache.delete(key);
            return undefined;
        }

        entry.uses++;
        if (entry.uses >= maxUses){
            cache.delete(key);
        }

        return entry.value;
}

function has(key){
    return cache.has(key);
}

function size(){
    return cache.size;
}

return {set, get, has, size};
}
}

function criarCache({ ttl = 3000, maxUses = 3 } = {}) {
    const cache = new Map();

    function set(key, value) {
        cache.set(key, {
            value,
            expiresAt: Date.now() + ttl,
            uses: 0
        });
    }

    function get(key) {
        const entry = cache.get(key);
        if (!entry) return undefined;

        // Expiração por tempo
        if (Date.now() > entry.expiresAt) {
            cache.delete(key);
            return undefined;
        }

        // Expiração por uso
        entry.uses++;
        if (entry.uses >= maxUses) {
            cache.delete(key);
        }

        return entry.value;
    }

    function has(key) {
        return cache.has(key);
    }

    function size() {
        return cache.size;
    }

    return { set, get, has, size };
}


const cache = criarCache({ ttl: 5000, maxUses: 2 });

const batman = { hero: "Batman" };
const superman = { hero: "Superman" };

cache.set(batman, "Investigando Gotham");
cache.set(superman, "Salvando Metrópolis");

console.log(cache.get(batman)); 
console.log(cache.get(batman)); 
console.log(cache.get(batman)); 

setTimeout(() => {
    console.log(cache.get(superman)); 
}, 6000);
