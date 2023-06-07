<script setup>
import { hasScopeRef } from "@vue/compiler-core";
import {ref} from "vue"



</script>

<template>
  

  <v-app id="inspire">
    <v-app-bar
      class="px-3"
      color="white"
      flat
      density="compact"
    >
      <!-- <v-avatar
        <img href="logo.png>"
        color="grey-darken-1"
        size="32"
      ></v-avatar> -->
        
      <v-spacer></v-spacer>

      <v-tabs
        centered
        color="grey-darken-2"
      >
      <v-tab to="/">Home</v-tab>
      <v-tab to="/subnet">Subnet Calculator</v-tab>
      <v-tab to="/DNS-Lookup">DNS Lookup</v-tab>
      <v-tab to="/Binary-converter">Binary Converter</v-tab>
      <v-tab to="/TLS">TLS Certificate Checker</v-tab> 
      
      </v-tabs>
  
      <v-spacer></v-spacer>

      <!-- <v-avatar
        class="hidden-sm-and-down"
        color="grey-darken-1"
        size="32"
      ></v-avatar> -->
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
            <h4>Articles</h4>
            <v-divider :thickness="2"></v-divider>
            <a href="https://networkcalc.com/articles/find-your-external-ip">How to Find Your External IP Address: A Simple Guide</a>
            <v-divider :thickness="1"></v-divider>
            <a href="https://networkcalc.com/articles/subnet-mask-cheat-sheet">Subnet Mask Cheat Sheet</a>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >  
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <RouterView/>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>


</template>
  
