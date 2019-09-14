<template>
<div class="objectBoolean">
  <Header />
  <Nav />
  <h1>Number</h1>


    <p>Boolean JS Object je obalový objekt, který dovolí pracovat s boolean hodnotou</p>
    <p>Syntax: new Boolean([value]) - hranate zavorky rikaji ze parametr neni povinny</p>

    <p>Dle zadaného parametru bude Boolean true nebo false. Pokud nezadáme parametr nebo jím bude jeden z následujících: 0, -0, null, NaN, undefined nebo prázdný řetězec, pak bude hodnota boolean False,
      Ostatní hodnoty jako objekt, prázdné pole nebo řetězec vytvoří Boolean objekt s hodnotou true.</p>
    <p>Nepletme si primitivni boolean trua a false s hodnotami true a false v objektu</p>

    <p>kazdy objekt boolean kde hodnota neni undefined nebo null bude vyhodnoceny v podmince if jako true</p>
    var x = new Boolean(false)
    if (x) {
    tento kod bude proveden
    }

    <p>nepouzivejte Boolean objekt ke konvertovani non-boolean hodnoty na boolean hodnotu. Pokud to chcete provest tak pouzijte boolean jako funkci ne bo double NOT operator (!!)</p>
    var x = Boolean(expression); // use this...
    var x = !!(expression); // ...or this
    var x = new Boolean(expression); // don't use this!

    <p>kdyz specifikujete nejaky objekt obsahujici Boolean objekt kde je hodnota false jako pocatecni hodnota Boolean objektu, novy Boolean objekt ma hodnotu true</p>
    var myFalse = new Boolean(false); // initial value of false
    var g = Boolean(myFalse); // initial value of true
    var myString = new String('Hello'); // string object
    var s = Boolean(myString); // initial value of true

    <p>To se ovsem nevstahuje na primitivni boolean</p>
    var x false;
    if (x) {
    tento kod se neprovede
    }
    <div>
      <p>Object Boolean má tyto vlastnosti ( Properties )</p>
      <ul>
        <li>Boolean.prototype</li>
      </ul>

      <p>Object Number má tyto metody ( Methods )</p>
      <ul>
        <li>Boolean.prototype.toString()</li>
        <li>Boolean.prototype.valueOf()</li>
      </ul>

      <p>Object Number má tyto zděděné vlastnosti od objektu Function ( Properties ) pozn. obsolete a nestandardní vlastnosti a metody zde uvádět nebudu</p>
      <ul>

        <li>Function.length</li>
        <li>Function.prototype</li>
        <li>Function.name</li>
      </ul>

      <p>Object Number má tyto zděděné metody od objektu Function ( Methods )</p>
      <ul>
        <li>Function.prototype.apply()</li>
        <li>Function.prototype.bind()</li>
        <li>Function.prototype.call()</li>
        <li>Function.prototype.toString()</li>

      </ul>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
// import objectNumber from '@/components/objectNumber.vue'
export default {
  name: 'ObjectBoolean',
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
