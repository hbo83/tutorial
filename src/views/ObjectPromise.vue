<template>
<div class="objectPromise">
  <Header />
  <Nav />
  <h1>Number</h1>

<p>Nejdrive je asi dobre rici v jakem poradi se provadi kod. Kod je provaden radku po radce nezavisle na dokonceni predchozi operace
   a to muze zpusobovat chyby protoze predchozi operace nebyla dokoncena a na dalsi radce chceme pracovat s daty, ktere jsme jeste neobdrzeli
    . Pro ty to pripady je zde je zde callback funkce. Je to funkce, ktera je provedena az po skonceni daner operace.</p>

     <p>Callback je funkce, ktera je predana jine funkci jako argument. Je vyvolána uvnitr vnejsi funkce ihned po dokonceni akce vnejsi funkce</p>
     <p>Callback je asynchroni, to znamena ze beh programu bezi dal po radcich, ale callback se vykona v tu chvili, kdy je operace dokoncena( asynchroni callback )</p>

  <p>Promisa je Objekt reprezentující eventualni splneni ci selhani asynchroni operace</p>
    <p>Promisa je v posdstate vraceny objekt, na kterych volate funkce. Misto toho abyste funkce psali do callbacku</p>
    <p>Prozatim jsme pro asynchroni funkce pouzivaly callback</p>
    function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

<p>Prepsanoi na promisu to vypada takhle</p>
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
<p>To je zkracenian pro</p>
const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);

<p>hlavni rozdily mezi callbackema promisou jsou zde:</p>
<ul>
  <li>callback nebude nikdy zavolan pred dokoncenim behu aktualniho event loop</li>
  <li>pokud pouzijem funkci .then na callback, bude akce provedeni po uspechu i po selhani</li>
  <li>Vícenásobné zpětné volání lze přidat několikrát voláním then (). Každé zpětné volání se provádí jeden po druhém, v pořadí, v jakém byly vloženy.</li>
  <li>Hlavní výhodou pouziti promises je retezeni</li>
</ul>

    <div>
      //klasicky XMLHttpRequest bez callbacku
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText)
  }
};
xhttp.open("GET", 'https://jsonplaceholder.typicode.com/todos/1', true);
xhttp.send();

// GET pozadavek na JSON s callbackem za pouziti knihovny JQUERY

$.getJSON('https://jsonplaceholder.typicode.com/todos/1', function(data) {
console.log(data)
});

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


//tady jen vytvarim promisu narozdil od async await, narozdil od callbacku mohu pripojit metodu .fail() pri nezdaru
var promise = $.getJSON('https://jsonplaceholder.typicode.com/todos/1');
promise.done(function(data) {
console.log(data)
});

//zde jsme funkci obalili do objektu
var hipsterJesus = {
  html: function() {
  return $.getJSON('https://jsonplaceholder.typicode.com/todos/1').then(function(data) {
  return data;
});
}
};
hipsterJesus.html().done(function(html) {
console.log(html)
});

//kod v teto funkci pokracuje az po dokonceni promise
async function prislib() {
  let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const post = await res.json()

  res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const user = await res.json()

  console.log(post)
}
prislib()

//Await prakticky říká "počkej, až se vyřeší tento Promise a pokračuj". To je důležitá vlastnost, protože await pracuje pouze s Promise.
 Pokud dostane cokoliv jiného, převede výsledek zase na Promise. Ten vždy vrací i samotná async funkce. Celý tento mechanismus je
  totiž postaven nad Promise a generátory. Async / await je ve skutečnosti jenom syntaktické pozlátko a využívá stávající funkce jazyka.


    </div>
</div>


</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
// import objectNumber from '@/components/objectNumber.vue'
export default {
  name: 'ObjectPromise',
  props: {
    msg: String
  },
  components: {
    Header,
    Nav
    // objectNumber
  }
}
</script>

<style scoped>
/* .home {
  display: flex
} */
</style>
