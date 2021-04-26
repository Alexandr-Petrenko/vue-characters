<template>
  <main class="main">
    <div class="container">
      <div class="main__header">
        <h2 class="main__heading">
          People
        </h2>
        <div class="control">
          <div class="control__properties">
            <div class="control__property"
                 @click="toggleEye">
              Eye color
              <ul class="control__list control__list--filter"
                  v-click-outside="hide"
                  v-show="opened === 'eye'"
                  @click.stop="">
                <li class="control__item" @click="filterEyeColor('blue')">
                  blue
                </li>
                <li class="control__item" @click="filterEyeColor('blue-gray')">
                  blue-gray
                </li>
                <li class="control__item" @click="filterEyeColor('brown')">
                  brown
                </li>
                <li class="control__item" @click="filterEyeColor('red')">
                  red
                </li>
                <li class="control__item" @click="filterEyeColor('yellow')">
                  yellow
                </li>
              </ul>
            </div>
            <div class="control__property"
                 @click="toggleHeight">
              Height
              <div class="control__item control__item--inputs"
                   v-show="opened === 'height'"
                   v-click-outside="hide"
                   @click.stop="">
                <div class="control__wrapper">
                  <input
                    type="number"
                    class="control__input"
                    v-model="minHeight">
                  <input
                    type="number"
                    class="control__input"
                    v-model="maxHeight">
                </div>
                <div class="control__wrapper">
                  <span class="control__output">{{ minHeight }}</span>
                  <span class="control__output">{{ maxHeight }}</span>
                </div>
                <div class="control__slider"></div>
              </div>
            </div>
            <div class="control__property" @click="toggleAge">
              Age
              <div class="control__item control__item--inputs"
                   v-show="opened === 'age'"
                   @click.stop=""
              >
                <div class="control__wrapper">
                  <input
                    type="number"
                    class="control__input"
                    v-model="minAge">
                  <input
                    type="number"
                    class="control__input"
                    v-model="maxAge">
                </div>
                <div class="control__wrapper">
                  <span class="control__output">{{ minHeight }}</span>
                  <span class="control__output">{{ maxHeight }}</span>
                </div>
                <div class="control__slider"></div>
              </div>
            </div>
          </div>
          <div class="control__properties control__properties--end">
            <div
              class="control__wrapper"
              v-click-outside="hide"
              @click.stop="toggleSort">
              Sort by
              <ul class="control__list" v-show="opened === 'sort'">
                <li class="control__item" @click="sortedWasDone('birth_year')">
                  age
                </li>
                <li class="control__item" @click="sortedWasDone('mass')">
                  mass
                </li>
                <li class="control__item" @click="sortedWasDone('height')">
                  height
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ListOfPeople
        :sortProp="sortedBy"
        :eyeColor="eyeColor"
        :min-height="minHeight"
        :max-height="maxHeight"
        :max-age="maxAge"
        :min-age="minAge"
      ></ListOfPeople>
    </div>
  </main>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import ListOfPeople from './ListOfPeople.vue';

export default {
  name: 'Main',
  components: { ListOfPeople },

  data() {
    return {
      opened: false,
      sortedBy: '',
      eyeColor: '',
      minHeight: '96',
      maxHeight: '202',
      minAge: '19',
      maxAge: '112',
    };
  },

  methods: {
    toggleSort() {
      setTimeout(() => {
        this.opened = 'sort';
      }, 0);
    },

    toggleEye() {
      setTimeout(() => {
        this.opened = 'eye';
      }, 0);
    },

    toggleHeight() {
      setTimeout(() => {
        this.opened = 'height';
      }, 0);
    },

    toggleAge() {
      setTimeout(() => {
        this.opened = 'age';
      }, 0);
    },

    filterEyeColor(color) {
      this.eyeColor = color;
    },

    hide() {
      this.opened = false;
    },

    sortedWasDone(property) {
      this.sortedBy = property;
    },
  },

  directives: {
    ClickOutside,
  },
};
</script>

<style scoped lang="scss">
  .main {
    padding: 64px 10px 112px 10px;
    font-size: 14px;

    &__header {
      margin-bottom: 48px;
    }

    &__heading {
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 148%;
    }
  }

  .control {
    display: flex;
    justify-content: space-between;

    &__wrapper {
      position: relative;
      cursor: pointer;
    }

    &__list {
      width: 101px;
      padding: 16px 59px 16px 20px;
      position: absolute;
      left: -20px;
      top: 16px;
      z-index: 1;
      background: #fff;
      border-radius: 6px;

      &--filter {
        left: -20px;
        padding-right: 15px;
      }
    }

    &__item {
      margin-bottom: 10px;
      position: relative;

      &--inputs {
        position: absolute;
        right: calc(50% - 125px);
        width: 250px;
        padding: 20px 20px 25px 20px;
        background: #fff;
        z-index: 1;
        border-radius: 6px;
      }
    }

    &__property {
      position: relative;
      margin-right: -40px;

      &:after {
        position: absolute;
        content: "";
        top: calc(50% - 3px);
        right: -9px;
        width: 3px;
        height: 3px;
        border-bottom: 1px solid #000;
        border-right: 1px solid #000;
        transform: rotate(45deg);
      }
    }

    &__properties {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 230px;

      &--end {
        justify-content: flex-end;
      }
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__input {
      width: 100px;
      height: 42px;
      margin-bottom: 8px;
      appearance: none;
      padding: 8px 0 9px 12px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 6px;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        outline: none;
      }

      &:focus {
        outline: none;
      }
    }

    &__output {
      margin-bottom: 9px;
      line-height: 180%;
    }

    &__slider {
      height: 2px;
      position: relative;
      background: #ff634a;

      &:before, &:after {
        content: '';
        position: absolute;
        left: 0;
        top: -4px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ff634a;
      }

      &:after {
        left: calc(100% - 10px);
      }
    }
  }
</style>
