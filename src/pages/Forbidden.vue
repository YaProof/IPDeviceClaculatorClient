<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">
      Извините, у вас не хватает прав для просмотра этой страницы
    </p>
    <q-btn
      color="secondary"
      style="width:200px;"
      to="/"
      label="Вернуться на главную"
    />
  </div>
</template>

<script >
export default {
  name: 'Forbidden'
}
</script>
