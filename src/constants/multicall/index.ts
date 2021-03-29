import { ChainId } from '@sparkpointio/sparkswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x097e3CbD07Edb4FB0dB72568443Dc5472C185011', // TODO
  [ChainId.BSCTESTNET]: '0x98e8EB714dBBBAaC631A6866BD57423d15d53043'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
