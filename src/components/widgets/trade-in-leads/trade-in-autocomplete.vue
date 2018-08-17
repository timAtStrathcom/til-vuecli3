<template>
  <div class="field has-addons">
    <Autocomplete class="autocomplete" :value="autoCompleteValue" @input="valueChanged" :data="autoCompleteData"
                  placeholder="Enter Year, Make, and Model"
    />
    <button class="button is-primary">
      <font-awesome-icon :icon="icons.search"/>
    </button>
  </div>
</template>

<script>
import Autocomplete from 'buefy/src/components/autocomplete'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import yearsMakesModelsDB from '@/assets/data/yearsMakesModels.json'

export default {
  name: 'trade-in-autocomplete',
  components: {
    Autocomplete,
  },
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
  @import "~buefy/src/scss/components/_autocomplete.scss";

  .autocomplete {
    width: 100%
  }
</style>
