<template>
  <div class="login-wrapper d-flex w-100 align-center justify-center" style="min-height: 100vh;">
    <div class="blur-circle circle-1"></div>
    <div class="blur-circle circle-2"></div>

    <v-card class="login-card pa-8 pa-sm-10" width="100%" max-width="540" rounded="xl">
      
      <div class="card-brand-line"></div>

      <v-card-item class="text-center justify-center pa-0 mb-8">
        <v-card-title class="text-h4 font-weight-black text-slate-indigo mb-2">
          LOGIN
        </v-card-title>
        <v-card-subtitle class="text-body-1 text-medium-emphasis font-weight-medium">
          Welcome back! Please enter your details.
        </v-card-subtitle>
      </v-card-item>

      <v-card-text class="pa-0">
        <v-text-field 
          label="Username"
          variant="outlined"
          density="comfortable"
          color="green-darken-1"
          prepend-inner-icon="mdi-account-outline"
          class="mb-3 custom-input"
          rounded="lg"
        ></v-text-field>

        <v-text-field 
          type="password" 
          label="Password"
          variant="outlined"
          density="comfortable"
          color="green-darken-1"
          prepend-inner-icon="mdi-lock-outline"
          class="mb-6 custom-input"
          rounded="lg"
        ></v-text-field>

        <v-btn 
          block 
          color="green-darken-1"
          size="large"
          height="54"
          elevation="0"
          class="text-capitalize font-weight-bold signin-btn text-white rounded-lg"
        >
          Sign In
        </v-btn>

      
      </v-card-text>

    </v-card>
  </div>
</template>

<script lang="ts" setup>



</script>

<style scoped>
/* Ultra-Premium Fullscreen Layout Viewport Control */

</style>