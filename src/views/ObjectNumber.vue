<template>
<div class="objectNumber">
  <Header />
  <Nav />
  <h1>Number</h1>

  <p>I přesto, že jsou number primitivní datové typy, zachazí s nimi v JS jako s objekty. Umožňuje to obalový objekt Number.
    <p>no zajmavy je ze i kdyz var x = 36 jako primitivni datovy typ ma metody a console.log vyhodi jen nunmber. Pokud ho vytvorime pres operator new tak ma ty metody taky ale uz je to object

      pokud se tedy primitivni typ co je v zasobniku po zavolani metody stane objektem, presune se na haldu_?</p>
    Proměnné referenčního typu jsou v paměti uloženy vlastně nadvakrát, jednou v zásobníku a jednou v haldě. V zásobníku je uložena pouze tzv. reference, tedy odkaz do haldy, kde se poté nalézá opravdový objekt.
    <!-- <iframe width="100%" height="300" src="//jsfiddle.net/QC3b6/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe> -->
    <p>Number JS Object je obalový objekt, který dovolí pracovat s číselnými hodnotami</p>
    <div>
      <p>Object Number má tyto vlastnosti ( Properties )</p>
      <ul>
        <li>Number.EPSILON</li>
        <li>Number.MAX_SAFE_INTEGER</li>
        <li>Number.MAX_VALUE</li>
        <li>Number.MIN_SAFE_INTEGER</li>
        <li>Number.MIN_VALUE</li>
        <li>Number.NEGATIVE_INFINITY</li>
        <li>Number.NaN</li>
        <li>Number.POSITIVE_INFINITY</li>
        <li>Number.prototype</li>
      </ul>

      <p>Object Number má tyto metody ( Methods )</p>
      <ul>
        <li>Number.isFinite()</li>
        <li>Number.isInteger()</li>
        <li>Number.isNaN()</li>
        <li>Number.isSafeInteger()</li>
        <li>Number.parseFloat()</li>
        <li>Number.parseInt()</li>
        <li>Number.prototype.toExponential()</li>
        <li>Number.prototype.toFixed()</li>
        <li>Number.prototype.toLocaleString()</li>
        <li>Number.prototype.toPrecision()</li>
        <li>Number.prototype.toSource()</li>
        <li>Number.prototype.toString()</li>
        <li>Number.prototype.valueOf()</li>
      </ul>

      <p>Object Number má tyto zděděné vlastnosti od objektu Function ( Properties ) pozn. obsolete a nestandardní vlastnosti a metody zde uvádět nebudu</p>
      <ul>
        <li>Function.caller</li>
        <li>Function.length</li>
        <li>Function.prototype</li>
        <li>Function.prototype.name</li>
      </ul>

      <p>Object Number má tyto zděděné metody od objektu Function ( Methods )</p>
      <ul>
        <li>Function.prototype.apply()</li>
        <li>Function.prototype.bind()</li>
        <li>Function.prototype.call()</li>
        <li>Function.prototype.toSource()</li>
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
  name: 'ObjectNumber',
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
