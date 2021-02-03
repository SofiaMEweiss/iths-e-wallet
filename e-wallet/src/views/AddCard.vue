<template>
  <section>
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
</style>


