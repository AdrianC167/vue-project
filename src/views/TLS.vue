<script setup>
import {ref} from "vue"

let output = ref()
let name =  ref("")


async function dnsLook() {
    let result = await fetch("https://networkcalc.com/api/security/certificate/" + name.value)
    output.value = await result.json()
}


</script>

<template>
    <div class="TLS">
        <h1>TLS Certificate Checker</h1>
    </div>
    <v-divider :thickness="4"></v-divider>
    <v-text-field label="Input a DNS, Hostname or IP Address(Please make sure you enter the right Hostname/DNS/IP address)" variant="solo-filled" id="input" v-model="name"></v-text-field>
    <v-btn @click="dnsLook">Search</v-btn>
    <hr>
    <h4>Meta:</h4>
    <div>Protocol: {{ output?.meta?.protocol }}</div>
    <div>Hostname: {{ output?.meta?.hostname }}</div>
    <div>Port: {{ output?.meta?.port }}</div>
    <v-divider :thickness="4"></v-divider>  
    <h4>Certificate:</h4>
    <div>Protocol: {{ output?.certificate?.protocol }}</div>
    <div>Hostname: {{ output?.certificate?.hostname }}</div>
    <div>Port: {{ output?.certificate?.port }}</div>
    <div>Issued to: {{ output?.certificate?.issued_to }}</div>
    <div>Issued by: {{ output?.certificate?.issued_by }}</div>
    <div>Valid from: {{ output?.certificate?.valid_from }}</div>
    <div>Valid to: {{ output?.certificate?.valid_to }}</div>
    <div>Alternative name: {{ output?.certificate?.alternates_names }}</div>
    <div>Serial number: {{ output?.certificate?.serial_number }}</div>
    <div>Fingerprint: {{ output?.certificate?.fingerprint }}</div>
    <v-expansion-panels>
    <v-expansion-panel  title="Raw Certificate" :text="output?.certificate?.raw">
    </v-expansion-panel>
    </v-expansion-panels>
   

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300&display=swap');

.TLS {
    font-family: 'Merienda', cursive;
    text-align: center;

}


</style>