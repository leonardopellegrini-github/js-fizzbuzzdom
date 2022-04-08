
/*MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

// inserisco il container
const container = document.querySelector('.container')


// inserisco il numero massimo di box

const limit = 100;

//inserisco il FOR per inizializzare l'operazione
for(let i = 1; i <= limit; i++){

  //se i è multiplo di 3 allora stampo
  if (i % 3 == 0){
    console.log('è multiplo di 3');
    const div = document.createElement('div');
    div.className = 'box giallo';
    div.append('BUZZ');
    container.append(div);
  }

  //se i è multiplo di 5 allora stampo
  if (i % 5 == 0){
    console.log('è multiplo di 5');
    const div = document.createElement('div');
    div.className = 'box verde';
    div.append('FIZZ');
    console.log(div);
    container.append(div);
  } 
  //se i è multiplo di 5 e 3 allora stampo
  else if (i % 3 == 0){
    const div = document.createElement('div');
    div.className = 'box viola';
    div.append('FIZZ BUZZ');
    container.append(div);
  }

 
}