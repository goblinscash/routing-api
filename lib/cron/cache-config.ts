import { Protocol } from '@uniswap/router-sdk'
import { V3SubgraphProvider } from '@uniswap/smart-order-router'
import { ChainId } from '@uniswap/sdk-core'

export const chainProtocols = [
  // V3.
  {
    protocol: Protocol.V3,
    chainId: ChainId.BNB,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.BNB, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.SMARTBCH,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.SMARTBCH, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.BASE,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.BASE, 3, 90000),
  } 
]
