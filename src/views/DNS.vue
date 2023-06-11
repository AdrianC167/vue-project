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
    <div>Hostname: {{ output?.hostname }}</div>
    <v-divider :thickness="4"></v-divider> 
    <h3>Records</h3>
    <div>A: {{ output?.records?.A }}</div>
    <br>
    <div>CNAME: {{ output?.records?.CNAME }}</div>
    <br>
    <div>MX: {{ output?.records?.MX }}</div>
    <br>
    <div>NS: {{ output?.records?.NS }}</div>
    <br>
    <div>SOA: {{ output?.records?.SOA }}</div>
    <br>
    <v-expansion-panels>
    <v-expansion-panel  title="TXT" :text="output?.records?.TXT" id=text>
    </v-expansion-panel>
    </v-expansion-panels>
    


</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300&display=swap');

.DNS {
    font-family: 'Merienda', cursive;
    text-align: center;

}

#text {
text-align: left;


}

</style>