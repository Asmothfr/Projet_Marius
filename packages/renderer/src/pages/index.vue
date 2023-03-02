<script lang="ts" setup>
import VueCarousel from '@chenfengyuan/vue-carousel'
import { useDatabase } from '~/stores/database'

const database = useDatabase()

const key = ref()
const word = ref()

function addWord(e: PointerEvent) {
  key.value = database.db.size
  database.db.set(key.value, word.value)
  e.preventDefault()
}

/** Tentative d'import. Crash à la déclaration de la variable.
 *
 * const writeDbFile = writeFile()
 *
 * function addDbWord(e: PointerEvent) {
 *   const keyObject = key.value
 *   const wordObject = word.value
 *   e.preventDefault()
 * }
 */

const data = ref([
  '<div class="example-slide">Slide 1</div>',
  '<div class="example-slide">Slide 2</div>',
  '<div class="example-slide">Slide 3</div>',
])
// find current size column
// const currentIndex = ref(0)
// const dbLength = computed(() => database.db.size)
// const maxColLength = ref(4)
// const lastColLength = computed(() => dbLength.value % maxColLength.value)
// const currentColLength = computed(() => currentIndex.value >= dbLength.value - lastColLength.value ? lastColLength.value : maxColLength.value)
// const howManyColumns = computed(() => Math.ceil(dbLength.value / maxColLength.value))

// const x = ref(0)
// const y = ref(0)

// onKeyStroke(['ArrowRight'], (e: KeyboardEvent) => {
//   x.value = (x.value + 1) % howManyColumns.value
// })

// onKeyStroke(['ArrowLeft'], (e: KeyboardEvent) => {
//   x.value = x.value - 1 < 0 ? howManyColumns.value - 1 : (x.value - 1) % howManyColumns.value
// })

// const currentColLength2 = computed(() => {
//   if (currentIndex.value >= 4 - 0)
//     return lastColLength.value

//   else
//     return maxColLength.value
// })
</script>

<template>
  <main>
    <form class="input__bloc">
      <label for="word">Enregistrer un nouveau mot</label>
      <input v-model="word" class="input__input" type="word">
      <button class="button__save" @click="addWord">
        Enregistrer
      </button>
    </form>
  </main>
  <div
    overflow-hidden
    flex gap-1 p-5
  >
    <button
      v-for=" [k, v] in database.db.entries()" :key="k"
      bg-green-800
      min-w-100px aspect-square
      flex items-center justify-center
    >
      {{ v }}
    </button>
    <VueCarousel :data="data" />
  </div>
</template>

<style scoped>
input{
  color: #000000;
}
/**
* Table
*/
.table__table{
  margin: 0 auto;
}
.table__border{
  padding: 1rem 2rem;
  border: 1px solid white;
  table-layout: fixed;
  border-collapse: collapse;
}
.table__hoverCell{
  background-color: #377a48;
  font-weight: 500;
}
/**
* Input
*/
.input__bloc
{
  margin: 1rem auto;
  max-width: 75vw;
  display: flex;
  flex-direction: column;
}
.input__input{
  color:#000000;
  padding: 0.2rem 0.5rem;
}
/**
* Button
*/
.button__save{
  background-color: #377a48;
  margin: 1rem auto;
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}
</style>
