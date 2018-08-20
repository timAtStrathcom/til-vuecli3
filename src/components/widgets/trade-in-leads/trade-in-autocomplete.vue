<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <input class="input" :value="autoCompleteValue" @input="valueChanged"
             placeholder="Enter Year, Make, and Model"
      >
    </div>
    <div class="control">
      <button class="button is-primary">
        <font-awesome-icon :icon="icons.search"/>
      </button>
    </div>
  </div>
</template>

<script>
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import yearsMakesModelsDB from '@/assets/data/yearsMakesModels.json'

export default {
  name: 'trade-in-autocomplete',
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      autoCompleteValue: this.value,
    }
  },
  created() {
    this.icons = {
      search: faSearch,
    }
    this.autoCompleteData = yearsMakesModelsDB
  },
  methods: {
    valueChanged(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style scoped>
</style>
