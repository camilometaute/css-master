<template>
  <div class="training-js">
    <div class="training-container">
      <div class="training-container__head">
        <h1>Agregando data con clicks de usuario</h1>
        <button @click="showCurrentDate">Mostrar fecha actual</button>
      </div>
      <div class="training-container__body">

      </div>
    </div>

    <div class="training-container">
      <div class="training-container__head">
        <h1>Práctica de computed</h1>
      </div>
      <div class="training-container__body">
        <input v-model="sortByName" id="filtername" type="text" placeholder="Busca...">
        <ul>
          <li  v-for="name in filterByNameAction">{{name}}</li>
        </ul>
      </div>
    </div>

    <div class="training-container">
      <div class="training-container__head">
        <h1>Práctica de watchers</h1>
      </div>
      <div class="training-container__body">
        <input type="number" name="" value="" v-model.number="counter">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message : 'Sin data actual',
      sortByName: '',
      names: [
        'Evan You',
        'John Lindquist',
        'Jen Looper',
        'Miriam Suzanne'
      ],
      counter: 0
    }
  },
  methods: {
    showCurrentDate() {
      const mySpan = document.createElement('span');
      const trainingContainerBody = document.querySelector('.training-container__body');

      mySpan.textContent = Date();
      mySpan.classList.add("item-date");
      trainingContainerBody.appendChild(mySpan);
    }
  },
  computed: {
    filterByNameAction() {
      let filter = new RegExp(this.sortByName, 'i')
      return this.names.filter(el => el.match(filter))
    }
  },
  watch: {
    counter() {
      console.log('The counter was changed! by', this.counter);
    }
  }
};
</script>

<style lang="scss">
.training-js {
  height: 80vh;

  .training-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5rem;

    &__head {
      align-items: center;
      border-top: 1px solid #d3d3d3;
      display: flex;
      flex-direction: column;
      flex: 0 0 100%;

      h1 {
        font-size: 3rem;
      }

      button {
        flex: 0 0 20%;
      }
    }

    &__body {
      display: flex;
      flex-direction: column;
      flex: 0 0 100%;

      input {
        border-radius: .6rem;
        border: 1px solid #d3d3d3;
        height: 40px;
        margin: 2rem auto;
        padding: .8rem;
        width: 200px;
      }

      ul {
        background-color: #d3d3d3;
        margin: 0 auto;
        width: 600px;

        li {
          list-style: none;
          text-align: left;
          margin: 1rem 0;
          padding: 1rem;
        }
      }

      .item-date {
        margin: .3rem 0;
        padding: 1rem;
        background: lightgreen;
      }
    }
  }
}
 </style>
