<script setup>
import {ref, watch} from "vue"

let output = ref("")
let number =  ref("")


async function convertBinary() {
    let result = await fetch("https://networkcalc.com/api/binary/" + number.value)
    output.value = await result.json()
}


</script>

<template>
    <div class="Binary">
        <h1>Binary Converter</h1>
    </div>
    <v-divider :thickness="4"></v-divider>



<v-text-field label="Input a binary value" variant="solo-filled" id="input" v-model="number"></v-text-field>
<v-btn @click="convertBinary">Convert</v-btn>
<hr>
<div>Binary Value: {{ output.converted }}</div>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300&display=swap');

.Binary {
    font-family: 'Merienda', cursive;
    text-align: center;

}


</style>