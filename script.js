let exemplo1 = ["pedra", "papel", "tesoura"]; // só com string
console.log (exemplo1);
 let exemplo2 = [465789, 12487, 2345678, 8,]; // só com número
 console.log (exemplo2);
 let exemplo3 = [151, "pokémon", false]; // mista
 console.log (exemplo3);
 let exemplo4 = [798224]; // só com um item
 console.log (exemplo4);
 let vazio =[]; // vazio
 console.log (vazio);

 //---------------------------------------------------------------------------------------------------------------------------------

 console.log(exemplo1.length); // vai me dar a extenção da array
 console.log(exemplo1[2]); // me da uma posição específica dentro de uma array
 console.log(exemplo3.includes("pokémon"));//checa se existe algo específico dentro do array devolve um boleano

 //----------------------------------------------------------------------------------------------------------------------------------
/*let copia = exemplo1;
 copia.push("lagarto", "spock"); //o push vai incluir em todas as variáveis ligadas a que você está alterando. não só ná nova
 console.log (copia);
 console.log (exemplo1);*/

 let copia2 = exemplo1.slice(); // o slice corta o vinculo da varíavel, gerando um novo espaço na memória.
 copia2.push("lagarto", "spock");
 console.log (copia2, exemplo1 );

 copia2.splice(1,2);// splice remove (X,Y) a partir do ídice X remova Y elementos da array
console.log (copia2);
//-----------------------------------------------------------------------------------------------------------------------------------
console.log(copia2.sort()); // .sort organiza em ordem crescente, mas vai colocar os M frente dos m
console.log(exemplo2.sort()); // .sort é burro para ordenar uma lista de números ele vai considerar só o PRIMEIRO "número" de um número...
//-----------------------------------------------------------------------------------------------------------------------------------
console.log(exemplo2.reverse()); // .reverse organiza em ordem decrecsente
//------------------------------------------------------------------------------------------------------------------------------------
console.log(exemplo2.pop()); // remove o ultimo elemento de uma array

//Exercício de fixação ---------------------------------------------------------------------------------------------------------------

let exerc = [8, -1, 5, 3, 2,7];
console.log(exerc);
console.log(exerc.sort());
console.log(exerc.reverse());
exerc.pop();
exerc.push(6);
exerc.splice(2,1);
console.log (exerc);








 
















