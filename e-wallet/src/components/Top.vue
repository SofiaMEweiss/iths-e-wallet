<template>
    <header>
        <h1>{{ headerTitle }}</h1>
        <p>{{ addNewCard }}</p>
    </header> 
</template>

<script>
export default {
props: {
    headerTitle: String,
    addNewCard: String
    
}
}
</script>

<style scoped>

header {
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 {
    width: 250px;
}

p {
    margin-top: 0px;
    color: grey;
    font-family: "Arial"; 
}

</style>