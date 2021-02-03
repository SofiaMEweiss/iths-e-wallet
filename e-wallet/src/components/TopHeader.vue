<template>
    <header>
        <h1>{{ topHeading }}</h1>
        <h2>{{ subHeading }}</h2>
    </header> 
</template>

<script>
export default {

    props: {
        topHeading: String,
        subHeading: String
    }

}
</script>


<style scoped>
header {
    display: flex;
    flex-direction: column;
    align-items:center;
}

h1 {
    font-size: 2rem;
    max-width:250px;
}

h2 {
    color: grey;
    font-size: 1rem;
}
</style>