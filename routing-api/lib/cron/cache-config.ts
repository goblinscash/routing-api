import { Protocol } from '@uniswap/router-sdk'
import { V2SubgraphProvider, V3SubgraphProvider } from '@uniswap/smart-order-router'
import { ChainId } from '@uniswap/sdk-core'

export const chainProtocols = [
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
  }, 
  // Currently there is no working V3 subgraph for Optimism so we use a static provider.
  // V2.

  {
    protocol: Protocol.V2,
    chainId: ChainId.MAINNET,
    timeout: 840000,
    provider: new V2SubgraphProvider(ChainId.MAINNET, 3, 900000, true, 1000), // 1000 is the largest page size supported by thegraph
  },
]
