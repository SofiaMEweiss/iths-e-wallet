<template>
<main class="wrapper">
  <section class="card">
<div class="nummer1">Blipp + Märke </div>
<div class="nummer2"> Chip</div>
<div class="nummer3"> Kortnummer </div>
<div class="nummer4">CARDHOLDER NAME</div>
<div class="nummer5">VALID THRU</div>
<div class="nummer6"> Förnamn </div>
<div class="nummer7">Efternamn</div>
<div class="nummer8">mm/YY</div>

  </section>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>

.wrapper {
    display: flex;
    /* align-items: center; */
    justify-content: center;

}
.card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: grey;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    /* grid-row-gap: 10px; */
    /* grid-column-gap: 10px; */
    width: 40%;
    height: 230px;
    border-radius: 10px;
    border: 2px solid red;
    padding: 10px;
    
}
div {background-color: grey;}

.nummer1 {
    grid-column: 1/4;
}
.nummer2 {
    grid-column: 1/4;
}

.nummer3{
    grid-column: 1/4;
}
.nummer4 {
    grid-column: 1/3;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
}

.nummer5 {
    grid-column: 3;
        display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
}

.nummer6{
    grid-column: 1/2;
}
.nummer7 {
    grid-column: 2/3;
}

.nummer8 {
    grid-column: 3;
}
</style>