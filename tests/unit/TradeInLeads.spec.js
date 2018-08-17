import { shallowMount } from '@vue/test-utils'
import TradeInLeads from '@/components/widgets/trade-in-leads/trade-in-leads'

describe('TradeInLeads', () => {
  it('renders form title', () => {
    const wrapper = shallowMount(TradeInLeads)
    const title = wrapper.find('h1')
    expect(title.text()).toMatch('Trade in Yo Ride!')
  })
})
