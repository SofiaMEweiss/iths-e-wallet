<template>
  <div>
      <div>
          <Card 
          v-for="Card of cards"
          :key="Card.id"
          :card="Card"
          @activeCard="activeCard"
          />
        </div>
  </div>
</template>

<script>
import Card from '../components/Card'
export default {

    components: {
        Card: Card
    },
computed: {
    cardStack(){
        return this.$root.$data.cards
    }

}
}
</script>

<style>

</style>