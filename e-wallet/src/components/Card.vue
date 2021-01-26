<template>
    <main>
        <section class="bank-card">
            <section class="card-chip"><img src="../assets/chip-dark.svg"/></section >
            <section  class="card-vendor"><img src="../assets/vendor-bitcoin.svg"/></section >
            <section  class="card-number"><p class="p-big">XXXX XXXX XXXX XXXX</p></section >
            <section  class="cardholder-name"><p>CARDHOLDER NAME</p></section >
            <section  class="valid-thru"><p>VALID THRU</p></section >
            <section  class="full-name"><p class="p-medium">FIRSTNAME LASTNAME</p></section >
            <!-- <section  class="last-name"><p class="p-medium">LAST NAME</p></section > -->
            <section  class="expiration-date"><p class="p-medium">MM/YY</p></section >
        </section>
    </main>
</template>

<script>
export default {

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
    /* grid-row-gap: 10px;
    grid-column-gap: 10px; */
}

section {
    display: flex;
}

.card-chip {
    grid-column: 1/3;
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
}

.p-big {
    font-size: 2.3rem;
}

.p-medium {
    font-size: 1.4rem;
}

</style>