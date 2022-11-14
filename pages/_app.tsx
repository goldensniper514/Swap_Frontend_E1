import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import "../styles/Homepage.css"
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme
} from '@rainbow-me/rainbowkit';

import {
  Chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';


// celo chain
const celoChain: Chain = {
  id: 42220,
  name: 'Celo',
  network: 'celo',

  nativeCurrency: {
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18,
  },
  rpcUrls: {
    default: 'https://rpc.ankr.com/celo/',
  },
  blockExplorers: {
    default: {
      url: 'https://explorer.celo.org',
      name: 'Celoscan',
    },
  },
  testnet: false,
}

// celo testnet chain
const celoTestnetChain: Chain = {
  id: 44787,
  name: 'Celo (Alfajores Testnet)',
  network: 'Celo (Alfajores Testnet)',

  nativeCurrency: {
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18,
  },
  rpcUrls: {
    default: 'https://alfajores-forno.celo-testnet.org',
  },
  blockExplorers: {
    default: {
      url: 'https://alfajores-blockscout.celo-testnet.org/',
      name: 'AlfajoresScan',
    },
  },
  testnet: true,
}

//create provider
const { chains, provider } = configureChains(
  [
    celoTestnetChain
  ],
  [
    publicProvider(),
  ]
);

//connectors
const { connectors } = getDefaultWallets({
  chains,
  appName: 'IotaOrigin'
});

//create client
const wagmiClient = createClient({
  provider,
  connectors,
  autoConnect: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={midnightTheme({
          accentColor: "white",
          accentColorForeground: "black",
          borderRadius: "none",
        })}
        modalSize="compact"
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
