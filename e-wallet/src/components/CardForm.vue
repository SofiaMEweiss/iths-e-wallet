<template>
<div>
  <card :activeCard="activeCard"/>
  <form @submit.prevent="AddCard">
    <label for="card-number">Card Number</label>
    <input 
    name="cardnumber"
    type="text"
    v-model="activeCard.cardnumber"
    >

    <label for="input-name">Cardholder name</label>
    <input
    id="input-name"
    class="cardform"
    type="type"
    v-model="activeCard.name">

    <button>Add Card</button>
  </form>
  </div>
<!-- <form>
    <Card v-for="card in cards" v-bind:key="card.id"
      v-bind:card="card"/>
    <input type="text"
      v-model="cards.cardholder"
      placeholder="Firstname Lastname"
      >
      <button v-on:click="addName">Add Card</button>
  </form> -->
</template>

<script>
import Card from '../components/Card'
export default {
  components: {Card},
data(){return{
  activeCard: {
      id: "",
                cardholder: "FIRSTNAME LASTNAME",
                vendor: "",
                cardnumber: "XXXX XXXX XXXX XXXX",
                validMonth: "00",
                validYear: "00"
  }
}
},

methods: {
  addCard(){
    this.$root.$data.cards.push(this.activeCard)
  }
}}



//     cardInfo:{
//       id:9393939393,
//       cardHolder: "Sofia Weiss"},

// cards: this.$root.$data.cards,

// newContent:''
// }},
// methods:{
//     addName(){
        
//         this.cards.push({
//             id: Date.now(),
//             cardholder: this.cardholder,
//           })
//         this.cardholder=''
        
//     }

// }
// }
</script>

<style>

</style>