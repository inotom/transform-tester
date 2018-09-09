<template>
  <div class="app">
    <h1 class="app__title">
      transform tester
    </h1>
    <div class="app__container">
      <transform-tester/>
    </div>
  </div>
</template>

<script>
import TransformTester from './components/TransformTester.vue';

export default {
  components: {
    TransformTester
  }
};
</script>
