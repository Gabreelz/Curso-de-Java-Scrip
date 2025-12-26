//Function Hoisting
sayMyName()
function sayMyName() {
    console.log('Mayk')
}

//Function Expression
const sayMyName2 = function() {
    console.log('Mayk')
}
sayMyName2()

//Function with other function as parameter
function run(fun) {
    fun()
}
run(function() {
    console.log('Executing...')
});

//Arrow Function
const sayMyName3 = () => {
    console.log('Mayk')
}   
sayMyName3()


//-----------------------------
//Parameters and Arguments

function argu() {
  console.log(arguments[10]);
}
argu(
  'Mayk', 'João', 'Ana', 'Pedro', 'Bia',
  'Gui', 'Rebeca', 'Amanda', 'Camila', 'Juliana', 85
);


function sum(... argumento) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
sum(1, 2, 3, 4, 5);

//Closure
function externa() {
  let contador = 0;

  function interna() {
    contador++;
    console.log(contador);
  }

  return interna;
}

const contar = externa();
contar(); // 1
contar(); // 2
contar(); // 3
