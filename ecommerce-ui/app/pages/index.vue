<template>
  <v-layout>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>Ecommerce</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-cart"></v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row density="comfortable">
          <v-col v-for="n in 8" :key="n" cols="3">
            <v-card class="mx-auto" max-width="344">

              <v-img
                height="200"
                src="https://images-na.ssl-images-amazon.com/images/I/81uTW77d3rL.jpg"
                cover
              ></v-img>

              <v-card-title>
                Victus by HP 15.6 inch Gaming Laptop 15-fa0000
              </v-card-title>

              <v-card-subtitle>
                ₱20,000
              </v-card-subtitle>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-cart" color="orange"></v-btn>
                
              </v-card-actions>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
</script>