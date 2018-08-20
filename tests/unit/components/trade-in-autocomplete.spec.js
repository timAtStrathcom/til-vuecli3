import '@/widget-setup'
import { shallowMount } from '@vue/test-utils'
import TradeInLeadsAutocomplete from '@/components/trade-in-autocomplete'

describe('trade-in-leads-autocomplete', () => {
  it('matches snapshot', () => {
    const tradeInLeads = shallowMount(TradeInLeadsAutocomplete)
    expect(tradeInLeads).toMatchSnapshot()
  })
})
