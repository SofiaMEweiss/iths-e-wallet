<template>
<div>
  <card :activeCard="activeCard"/>
  <form @submit.prevent="addCard">
    <label for="card-number">CARD NUMBER</label>
    <input 
    name="cardnumber"
    type="text"
    placeholder="Type XXXX XXXX XXXX XXXX"
    v-model="activeCard.cardnumber"
    >

    <label for="input-name">CARDHOLDER NAME</label>
    <input
    name="cardholder"
    class="cardform"
    type="type"
    placeholder="Type Firstname Lastname"
    v-model="activeCard.name"
    >

    <!-- id="input-name" -->

    <label for="valid-month">VALID THRU MONTH</label>
    <select name="valid-month"
    v-model="activeCard.validMonth">

    <option value="month" disabled selected></option>
    <option value="01">1</option>
    <option value="02">2</option>
    <option value="03">3</option>
    <option value="04">4</option>
    <option value="05">5</option>
    <option value="06">6</option>
    <option value="07">7</option>
    <option value="08">8</option>
    <option value="09">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    </select>
<label for="valid-year">YEAR</label>
<select name="valid-year" v-model="activeCard.validYear">
  <option value="year" disabled selected></option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
</select>

<label for="vendor">VENDOR</label>
<select name="vendor" v-model="activeCard.vendor">
<option value="vendor-bitcoin">Bitcoin Inc</option>
<option value="vendor-blockchain">Blockchain Inc</option>
<option value="vendor-evil">Evil Corp</option>
<option value="vendor-ninja">Ninja Bank</option>
</select>

    <button>ADD A NEW CARD</button>
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
                validMonth: "MM",
                validYear: "YY"
  }
}
},

methods: {
  addCard(){
    this.activeCard.id = Date.now().toString()
    this.$root.$data.cards.push(this.activeCard)
    this.$router.push("/")
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

<style scoped>
div {
  display: flex;
  flex-direction: column;
  font-family: pt-mono, monospace;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center

}

label, input {
width: 415px;
display: flex;
align-items: flex-start;
}

label {
  margin-top: 20px;
  width: 450px;
}

input {
  border-radius: 10px;
  font-size: 1.5rem;
  padding: 15px;
}

select {
  width: 450px;
  padding: 15px;
  border-radius: 10px;
  font-size: 1.5rem;
}

button {
  width: 450px;
  background-color: white;
  border: black solid 3px;
  border-radius: 7px;
  padding: 15px;
  font-size: 2rem;
  font-family: pt-mono, monospace;
  margin-top: 20px;
}

</style>