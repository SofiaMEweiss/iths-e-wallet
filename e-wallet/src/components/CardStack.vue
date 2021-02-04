<template>
  <section>
      <div class="cardstack">
          <div v-for="(card, index) of cardStack" :key="card.id" @click="onClick(index)"> 
            <CreditCard :newCard="card"/>
          </div>
        </div>
  </section>
</template>

<script>
import CreditCard from '../components/CreditCard'

export default {
    components: {
        CreditCard
    },

    computed: {
        cardStack(){
        return this.$root.$data.cards
        }
    },

    methods: {
        activeCard(id) {
        this.$root.newCard(id)
        },

        onClick(index) {
        this.$root.$data.activeCardIndex = index;
        }
    }
}
</script>

<style>
.cardstack {
    position: sticky;
    display: grid;
    grid-auto-rows: 100px;
}
</style>