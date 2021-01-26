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

<style>

</style>