<template>
  <div>
    <Top v-bind:headerTitle="headerTitle" v-bind:addNewCard="addNewCard" />
    <CardForm />
  </div>
</template>

<script>
import Top from '../components/Top'

import CardForm from '../components/CardForm'
export default {
  components: {
        Top: Top,

        CardForm: CardForm
    },

    data(){ return { 
      headerTitle: "ADD A NEW BANK CARD",
      addNewCard: "NEW CARD"

      }}


}
</script>

<style scoped>
/* .addCard {
  border: black solid 3px;
  border-radius: 10px;
  padding: 20px;
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
} */

</style>


