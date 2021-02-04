<template>
  <section class="container">
    <TopHeader :topHeading="topHeading" :subHeading="subHeading" />
    <CardForm />
  </section>
</template>

<script>
import TopHeader from '../components/TopHeader'
import CardForm from '../components/CardForm'

export default {

  components: {
  TopHeader,
  CardForm
  },

  data(){ return { 
  topHeading: "ADD A NEW BANK CARD",
  subHeading: "NEW CARD"
  }}
}
</script>

<style scoped>
.container {
  border: 1px solid grey;
  border-radius: 10px;
  padding: 40px;
  background-color: rgb(252, 244, 241);
}
</style>


