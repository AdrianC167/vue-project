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
    <v-text-field label="Input an DNS/Hostname/IP Address(Please make sure your Hostname/DNS/IP address is accurate)" variant="solo-filled" id="input" v-model="name"></v-text-field>
    <v-btn @click="dnsLook"  id="button">Search</v-btn>
    <hr>
    <h4>Meta:</h4>
    <div>Protocol: {{ output?.meta?.protocol }}</div>
    <br>
    <div>Hostname: {{ output?.meta?.hostname }}</div>
    <br>
    <div>Port: {{ output?.meta?.port }}</div>
    <br>
    <v-divider :thickness="4"></v-divider>  
    <h4>Certificate:</h4>
    <div>Protocol: {{ output?.certificate?.protocol }}</div>
    <br>
    <div>Hostname: {{ output?.certificate?.hostname }}</div>
    <br>
    <div>Port: {{ output?.certificate?.port }}</div>
    <br>
    <div>Issued to: {{ output?.certificate?.issued_to }}</div>
    <br>
    <div>Issued by: {{ output?.certificate?.issued_by }}</div>
    <br>
    <div>Valid from: {{ output?.certificate?.valid_from }}</div>
    <br>
    <div>Valid to: {{ output?.certificate?.valid_to }}</div>
    <br>
    <div>Alternative name: {{ output?.certificate?.alternates_names }}</div>
    <br>
    <div>Serial number: {{ output?.certificate?.serial_number }}</div>
    <br>
    <div>Fingerprint: {{ output?.certificate?.fingerprint }}</div>
    <br>
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

#button{
width: 100%;
    
}
</style>