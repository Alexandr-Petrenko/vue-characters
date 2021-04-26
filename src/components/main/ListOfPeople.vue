<template>
  <section class="people-gallery">
    <ul class="people-gallery__list">
      <li
        v-for="character of sortedPeople"
        :key="character.created"
        class="people-gallery__item"
        >
        <img
          :src="require(`@/images/${character.name}.jpg`)"
          :alt="`${character.name}`"
          class="people-gallery__img"
        >
        <div class="dark-background"></div>
        <div class="people-gallery__info">
          <span class="people-gallery__birth">
            {{ character.birth_year }}
          </span>
          <h2 class="people-gallery__name">
            {{ character.name }}
          </h2>
          <div class="people-gallery__properties">
            <span class="people-gallery__property">
              {{ `Eye color : ${character.eye_color}` }}
            </span>
            <span class="people-gallery__property">
              {{ `Height : ${character.height}` }}
            </span>
            <span class="people-gallery__property">
              {{ `Mass : ${character.mass}` }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>

import { getPeople } from '../../api/people';

export default {
  name: 'ListOfPeople',

  data() {
    return {
      people: [],
      sortedPeople: [],
    };
  },

  props: [
    'sortProp',
    'eyeColor',
    'minHeight',
    'maxHeight',
    'minAge',
    'maxAge',
  ],

  watch: {
    sortProp(newVal) {
      switch (newVal) {
        case 'height':
          this.sortedPeople.sort((a, b) => b.height - a.height);
          break;
        case 'mass':
          this.sortedPeople.sort((a, b) => b.mass - a.mass);
          break;
        case 'birth_year':
          this.sortedPeople.sort((a, b) => {  // eslint-disable-line
            return parseInt(b.birth_year, 10) - parseInt(a.birth_year, 10);
          });
          break;
        default:
          break;
      }
    },
    eyeColor(newVal) {
      if (this.eyeColor) {
        this.sortedPeople = this.people.filter((people) => people.eye_color === newVal);
      }
    },

    minHeight(newVal) {
      this.sortedPeople = this.people.filter((people) => +people.height >= +newVal
          && +people.height <= this.maxHeight);
    },

    maxHeight(newVal) {
      this.sortedPeople = this.people.filter((people) => +people.height <= +newVal
          && +people.height >= this.minHeight);
    },

    minAge(newVal) {
      this.sortedPeople = this.people.filter((people) => parseInt(people.birth_year, 10)
        >= +newVal
        && parseInt(people.birth_year, 10) <= this.maxAge);
    },

    maxAge(newVal) {
      this.sortedPeople = this.people.filter((people) => parseInt(people.birth_year, 10) <= +newVal
        && parseInt(people.birth_year, 10) >= this.minAge);
    },

  },

  async mounted() {
    this.people = await getPeople();
    this.sortedPeople = await getPeople();
  },
};
</script>

<style scoped lang="scss">
  .people-gallery {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    &__item {
      width: 608px;
      height: 410px;
      margin-bottom: 16px;
      position: relative;
      border-radius: 6px;
      overflow: hidden;
    }

    &__img {
      width: 100%;
      max-width: 608px;
      height: 410px;
    }

    &__info {
      position: absolute;
      top: 21px;
      left: 24px;
      color: #fff;
      font-size: 14px;
    }

    &__name {
      font-size: 24px;
    }
  }

  .dark-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.5;
  }
</style>
