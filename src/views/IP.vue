<script setup>
import {ref} from "vue"

let output = ref("255.255.255.255")
let number =  ref("")


async function ipLook() {
    let result = await fetch("https://networkcalc.com/api/ip/" + number.value)
    output.value = await result.json()
}


</script>

<template>
    <div class="IP">
        <h1>IP Checker</h1>
    </div>
    <v-divider :thickness="4"></v-divider>

<v-text-field label="Input a binary value" variant="solo-filled" id="input" v-model="number"></v-text-field>
<v-btn @click="ipLook">Convert</v-btn>
<hr>
<div>{{ output.address.cidr_notation }}</div> 
<div>{{ output.address.subnet_bits }}</div> 
<div>{{ output.address.subnet_mask}}</div> 
<div>{{ output.address.wildcard_mask }}</div> 
<div>{{ output.address.network_address }}</div> 
<div>{{ output.address.broadcast_address}}</div> 
<div>{{ output.address.assignable_hosts }}</div> 
<div>{{ output.address.first_assignable_host}}</div> 
<div>{{ output.address.last_assignable_host}}</div> 

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300&display=swap');

.IP {
    font-family: 'Merienda', cursive;
    text-align: center;

}



</style>