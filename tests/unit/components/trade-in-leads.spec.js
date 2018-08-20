import { shallowMount } from '@vue/test-utils'
import TradeInLeads from '@/components/trade-in-leads'

describe('trade-in-leads', () => {
  it('matches snapshot', () => {
    const tradeInLeads = shallowMount(TradeInLeads)
    expect(tradeInLeads).toMatchSnapshot()
  })
})
