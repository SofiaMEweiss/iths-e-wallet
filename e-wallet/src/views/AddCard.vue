<template>
  <div class="AddCard">
    <Top v-bind:headerTitle="headerTitle" v-bind:addNewCard="addNewCard" />
    <Card />
    <CardForm />
  </div>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
export default {
  components: {
        Top: Top,
        Card: Card,
        CardForm: CardForm
    },

    data(){ return { 
      headerTitle: "ADD A NEW BANK CARD",
      addNewCard: "NEW CARD"

      }}


}
</script>

<style scoped>


</style>


