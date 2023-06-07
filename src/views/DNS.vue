<script setup>

import {ref} from "vue"

let output = ref()
let name =  ref("")


async function dnsLook() {
    let result = await fetch("https://networkcalc.com/api/dns/lookup/" + name.value)
    output.value = await result.json()
}


</script>

<template>
    <div class="DNS">
        <h1>DNS Lookup</h1>
    </div>
    <v-divider :thickness="4"></v-divider>
    <v-text-field label="Input a DNS, Hostname or IP Address(Please make sure you enter the right Hostname/DNS/IP address)" variant="solo-filled" id="input" v-model="name"></v-text-field>
    <v-btn @click="dnsLook">Search</v-btn>
    <hr>
    <div>{{ output }}</div>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300&display=swap');

.DNS {
    font-family: 'Merienda', cursive;
    text-align: center;

}


</style>