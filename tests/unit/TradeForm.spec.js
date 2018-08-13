import { shallowMount } from '@vue/test-utils'
import TradeForm from '@/components/widgets/trade-form.vue'

describe('TradeForm', () => {
  it('renders form title', () => {
    const wrapper = shallowMount(TradeForm)
    const title = wrapper.find('h1')
    expect(title.text()).toMatch('Trade in Yo Ride!')
  })
})
