<template>
    <main>
        <section v-if="newCard==null"></section>
        <section v-else class="bank-card" :class="newCard.vendor">
            <section class="card-chip">
                <img v-if="newCard.vendor === 'vendor-bitcoin'" src="../assets/chip-dark.svg">
                <img v-else src="../assets/chip-light.svg"/>
            </section >
            <section  class="card-vendor">
                <img v-if="newCard.vendor === 'vendor-bitcoin'" src="../assets/vendor-bitcoin.svg">
                <img v-else-if="newCard.vendor === 'vendor-blockchain'" src="../assets/vendor-blockchain.svg">
                <img v-else-if="newCard.vendor === 'vendor-evil'" src="../assets/vendor-evil.svg">
                <img v-else-if="newCard.vendor === 'vendor-ninja'" src="../assets/vendor-ninja.svg">
            </section >
            <section  class="card-number">
                <p class="p-big">{{newCard.cardnumber}}</p>
            </section>
            <section  class="cardholder-name">
                <p>CARDHOLDER NAME</p>
            </section >
            <section  class="valid-thru">
                <p>VALID THRU</p>
            </section >
            <section  class="full-name">
                <p class="p-medium">{{newCard.cardholder}}</p>
            </section>
            <section  class="expiration-date">
                <p class="p-medium">{{newCard.validMonth}}/{{newCard.validYear}}</p>
            </section >
        </section>
    </main>
</template>

<script>
export default {
    props: { 
        newCard: Object
    }
}
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
}

.bank-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 410px;
    height: 220px;
    background-color: lightgrey;
    padding: 30px 20px 10px 20px;
    border-radius: 10px;
    border: 1px solid grey;
    box-shadow: 3px 3px 3px grey;
}

section {
    display: flex;
}

.card-chip {
    grid-column: 1/3;
    padding-bottom: 10px;
}

.card-vendor {
    grid-column: 3;
    align-self: flex-start;
    justify-content: flex-end;
    padding-right:10px;
}

.card-number{
    grid-column: 1/4;
    justify-content: center;
    align-items: center;
    padding: 0px;
}

.cardholder-name {
    grid-column: 1/3;
    flex-direction: row;
    align-items: flex-end;
}

.valid-thru {
    grid-column: 3;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
}

.full-name{
    grid-column: 1/3;
}

.expiration-date {
    grid-column: 3;
    justify-content: flex-end;
}

p {
    font-family: pt-mono, monospace;
    margin: 0px;
    text-transform: uppercase;
}

.p-big {
    font-size: 2.3rem;
    text-shadow: 0.7px 0.7px black;
}

.p-medium {
    font-size: 1.4rem;
    text-shadow: 0.7px 0.7px black;
}

.vendor-bitcoin {
    background-color: #E6D3B8;
}

.vendor-blockchain {
    background-color: #D7E6CF;
}

.vendor-evil {
    background-color: #ACCDE6;
    color: white;
    text-shadow: 0.7px 0.7px black;
}

.vendor-ninja {
     background-color: #E6B9B8;    
}
</style>