<template>
  <div><input type="text" v-model="field">
  <p>{{field}}</p></div>
</template>

<script>
export default {
    data(){ return { 
        field: ""
    }}
    }
</script>

<style>

</style>