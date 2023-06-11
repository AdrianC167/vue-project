<script setup>
import {ref} from "vue"

let output = ref()
let number =  ref("")


async function ipLook() {
    let result = await fetch("https://networkcalc.com/api/ip/" + number.value)
    output.value = await result.json()
}


</script>

<template>
    <div class="IP">
        <h1>Subnet Calculator</h1>
    </div>
    <v-divider :thickness="4"></v-divider>

<v-text-field label="Input a proper ip value(otherwise no value will show)" variant="solo-filled" id="input" v-model="number"></v-text-field>
<v-btn @click="ipLook">Calculate</v-btn>
<hr>
<div>cidr notation: {{ output?.address.cidr_notation }}</div>
<br>
<div>subnet bits: {{ output?.address.subnet_bits }}</div> 
<br>
<div>subnet mask: {{ output?.address.subnet_mask}}</div>
<br> 
<div>wildcard mask: {{ output?.address.wildcard_mask }}</div>
<br> 
<div>network address: {{ output?.address.network_address }}</div> 
<br>
<div>broadcast address: {{ output?.address.broadcast_address}}</div>
<br> 
<div>assignable hosts: {{ output?.address.assignable_hosts }}</div> 
<br>
<div>first assignable host: {{ output?.address.first_assignable_host}}</div> 
<br>
<div>last assignable host: {{ output?.address.last_assignable_host}}</div> 

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300&display=swap');

.IP {
    font-family: 'Merienda', cursive;
    text-align: center;

}



</style>