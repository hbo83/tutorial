<template>
  <div class="objects">
  <Header />
  <Nav />
    <h1>Objekty</h1>
    <!--kdyz pochopis objekty, pochopis javascript-->
!!!!!!!stejne tyhle prirucky psat je naprosto napicu, ptze deprecated funkce a sracky jako infinite number atd... proto to nikdo nepise,,, je to proste k hovnu!!!!
na jednu stranu je to slozity a z reklam bys nemel tolik co maj blby nesmysli na FB, ale do budoucna bude programatoru vic a vic a nikde jsem nevidel cesky logicky sepsanej JS navod,
do budoucna ten web muze byt mekou vsech js programatoru v cr
jak bylo receno na videu, tim ze vytvorim tenhle web, si delam reklamu, tak smele do toho




dalsi odkaz na slovnik viz first-class object je objekt , ktery lze ukladat do promenne atd.. viz https://cs.wikipedia.org/wiki/First-class_objekt


<p>Javascript definuje 5 základních primitivních datových typů:</p><br />
<p>string</p>
<p>number</p>
<p>boolean</p>
<p>null</p>
<p>undefined</p>

<p>*primitivní hodnota je taková hodnota, která nemá vlastnosti a metody.</p>

<p>ale typy boolean, number a string mohou být také objekty, pokud je definujete přes operátor "new"</p>

<p>neprimitivní typy jsou vždy objekty:</p>

<ul>
<li>Dates</li>
<li>Maths</li>
<li>Regular expressions</li>
<li>Arrays</li>
<li>Functions</li>
<li>Objects</li>
</ul>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>


takze tady pisou ze mohou byt objekty :
https://www.w3schools.com/js/js_object_definition.asp

a tady zas pisou ze jsou objekty:
https://www.w3schools.com/js/js_number_methods.asp

zaverem lze tedy rict ze v js je vse objekt, to by taky korespondovalo s tim ze js je silne objektovy jazyk
<p>proměnné jsou také objekty. Mohou obsahovat primitivní typ ( String, number, ...), ale také objekt.</p>

<p>takze nakonec vlastne v js jsou i primitivni hodnoty objekty</p>
<!-- var x = "Mary",
var y = 123,

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

pojmenované hodnoty nazýváme vlastnostmi objektu ( preperty )
metody jsou akce, které můžeme provádět v na objektu.
vlastnosti objektu mohou být primitivní typ, jiný objekt či funkce.
js objekt je vlastně takový kontejner pro vlastnosti a metody, které náleží tomuto objektu.


objekt je možné vytvořit několika způsoby:
1. použít literál objektu
2. definovat a vytvořit objekt pomocí použití operátoru "new"
3. definovat objektový konstruktor a následně vytvořit instanci

v ECMAScript5 je možné objekt vytvořit přes Object.create()
pro usporu mista je lepsi pouzivat literal objektu
objekty jsou na rozdil od primitivnich typu predavany odkazem ( reference )ne hodnotou -->


  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'Objects',
  props: {
    msg: String
  },
  components: {
    Header,
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.objects {
  border: 1px solid black;
  float: left;
}

</style>
