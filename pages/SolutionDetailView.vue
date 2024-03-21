<script setup>
import AigerInfo from "@/components/AigerInfo.vue";
import EofferInfo from "@/components/EofferInfo.vue";
import EosamInfo from "@/components/EosamInfo.vue";
// console.log($route.params.solName)
</script>

<template>
  <main id="main" role="main">
    <div v-if = "$route.params.solName == 'AIGER'">
      <AigerInfo />
    </div>
    <div v-if = "$route.params.solName == 'EOFFER'">
      <EofferInfo />
    </div>
    <div v-if = "$route.params.solName == 'EOSAM'">
      <EosamInfo />
    </div>
  </main>
</template>