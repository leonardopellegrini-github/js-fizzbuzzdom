
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

  //inserisco l'oggetto div
  const div = document.createElement('div');

  //è divisibile per entrambi?
  if ((i % 3 == 0) && (i % 5 == 0)){
    console.log(i);
    div.className = 'box giallo';
    div.append('FIZZ BUZZ');
    container.append(div);
  } 
  //è divisibile per 5?
  else if (i % 5 == 0){
    console.log(i);
    div.className = 'box verde';
    div.append('BUZZ');
    console.log(div);
    container.append(div);
  } 
  //è divisibile per 3?
  else if (i % 3 == 0){
    console.log(i);
    div.className = 'box viola';
    div.append('FIZZ');
    console.log(div);
    container.append(div);
  }
  //altrimenti stampa il numero
  else{
    console.log(i);
    div.className = 'box rosso';
    div.append(i);
    console.log(div);
    container.append(div);
  }
 
}