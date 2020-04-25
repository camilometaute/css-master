<template>
  <div class="training-js">
    <section class="training-container">
      <div class="training-container__head">
        <h1>Agregando data con clicks de usuario</h1>
        <button @click="showCurrentDate">Mostrar fecha actual</button>
      </div>
      <div class="training-container__body">

      </div>
    </section>

    <section class="training-container">
      <div class="training-container__head">
        <h1>Práctica de computed</h1>
      </div>
      <div class="training-container__body">
        <input v-model="sortByName" id="filtername" type="text" placeholder="Busca...">
        <ul>
          <li  v-for="name in filterByNameAction">{{name}}</li>
        </ul>
      </div>
    </section>

    <section class="training-container">
      <div class="training-container__head">
        <h1>Práctica de watchers</h1>
      </div>
      <div class="training-container__body">
        <div class="increase_element">
          <button @click="decreaseValue" type="button" name="button">-</button>
          <input type="number" name="" value="" min="0" max="8" v-model.number="counter">
          <button @click="increaseValue" type="button" name="button">+</button>
        </div>
        <h4 class="current-bike">{{currentBike}}</h4>
      </div>
    </section>

    <section class="training-container">
      <div class="training-container__body">
        <input v-model="currentDate" type="date" name="" value="">
        <button type="button" name="button" @click="saveDatePicker">Save Date</button>
        <h4 v-show="showDate">Date saved: {{currentDate}}</h4>
      </div>
    </section>
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
      counter: 0,
      bikes: [
        'MT 09',
        'ECO 100',
        'YZ 125'
      ],
      currentBike: '',
      currentDate: '',
      showDate: false
    }
  },
  methods: {
    showCurrentDate() {
      const mySpan = document.createElement('span');
      const trainingContainerBody = document.querySelector('.training-container__body');

      mySpan.textContent = Date();
      mySpan.classList.add("item-date");
      trainingContainerBody.appendChild(mySpan);
    },
    decreaseValue() {
      this.counter -= 1;
      this.counter <= 0 ? this.counter = 8 : null;
    },
    increaseValue() {
      this.counter += 1;
      this.counter >= 9 ? this.counter = 0 : null;
    },
    saveDatePicker() {
      this.showDate = !this.showDate;
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
      if (this.counter > 3) {
        this.currentBike = this.bikes[1];
        console.log('Ahora current bike es:',this.currentBike);
      } else if (this.counter < 3 ) {
        this.currentBike = this.bikes[0];
        console.log('Ahora current bike es:',this.currentBike);
      } else {
        this.currentBike = this.bikes[2];
        console.log('Ahora current bike es:',this.currentBike);
      }
    }
  }
};
</script>

<style lang="scss">
.training-js {
  height: 80vh;

  .current-bike {
    background-color: #cbf3f0;
    color: #2ec4b6;
    font-size: 1.6rem;
    margin: 0 auto;
    padding: 3rem;
    text-align: center;
    width: 400px;
  }

  .increase_element {
    align-items: center;
    display: flex;
    margin: 0 auto;
    width: 600px;
    margin-bottom: 2rem;

    input {
      border-radius: .6rem;
      border: 1px solid #d3d3d3;
      flex: 1;
      font-size: 1.6rem;
      height: 40px;
      margin: 0 .2rem;
      padding: .8rem;
      text-align: center;
    }

    button {
      background: #2ec4b6;
      border-radius: .6rem;
      border: none;
      color: white;
      cursor: pointer;
      flex: 0;
      font-size: 1.4rem;
      height: 40px;
      padding: 0 1.4rem;

      &:hover {
        background-color: #cbf3f0;
      }
    }
  }

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
