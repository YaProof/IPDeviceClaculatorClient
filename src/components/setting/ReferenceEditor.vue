<template>
  <h1>{{ reference }}</h1>
</template>

<script>
export default {
  name: 'ReferenceEditor',
  props: {
    reference: {
      type: String,
      required: true
    }
  }
}
</script>
