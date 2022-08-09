import { AirdropMetadata } from './../common/Airdrop'
import { PublicKey } from '@solana/web3.js'
import { ReceiptType } from '@cardinal/staking/dist/cjs/programs/stakePool'
import { CSSProperties } from 'react'
import { url } from 'inspector'

export enum TokenStandard {
  // Fungible, can have more than 1
  Fungible = 1,
  // Non fungible are all unique
  NonFungible = 2,
}

export type Analytic = {
  metadata?: {
    key: string
    type: 'staked'
    totals?: {
      key: string
      value: number
    }[]
  }
}

export type StakePoolMetadata = {
  // Name of this stake pool used as an id. Should be in lower-case kebab-case since it is used in the URL as /{name}
  // https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Why-you-should-make-kebab-case-a-URL-naming-convention-best-practice
  name: string
  // Display name to be displayed in the header. Often the same as name but with capital letters and spaces
  displayName: string
  // Publickey for this stake pool
  stakePoolAddress: PublicKey
  // Default receipt type. Setting this will remove the option for the user to choose which receipt type to use
  receiptType?: ReceiptType
  // Default empty. Setting this will tell the UI to only show tokens of that standard. Supports fungible or non-fungible
  tokenStandard?: TokenStandard
  // Optional config to hide this pool from the main page
  hidden?: boolean
  // Optional config to disable finding this pool
  notFound?: boolean
  // Optional hostname to remap
  hostname?: string
  // Optional config to link redirect to page when you click on this pool
  redirect?: string
  // Hide allowed tokens style
  hideAllowedTokens?: boolean
  // styles to apply to the whole stake pool
  styles?: CSSProperties
  // Colors object to style the stake page
  colors?: {
    primary: string
    secondary: string
    accent?: string
    fontColor?: string
    fontColorSecondary?: string
    backgroundSecondary?: string
    backgroundprimary?: string
  }
  // Image url to be used as the icon in the pool selector and the header
  imageUrl?: string
  // Background image for pool
  backgroundImage?: string
  // Website url if specified will be navigated to when the image in the header is clicked
  websiteUrl?: string
  // Max staked is used to compute percentage of total staked
  maxStaked?: number
  // Links to show at the top right of the page
  links?: { text: string; value: string }[]
  // On devnet when you click the airdrop button on this page it will clone NFTs with this metadata and airdrop to the user
  airdrops?: AirdropMetadata[]
  // Analytics to show at the top of stake pool. supports trait based analytics and overall tokens data
  analytics?: Analytic[]
}

export const defaultSecondaryColor = 'rgba(29, 78, 216, 255)'

export const stakePoolMetadatas: StakePoolMetadata[] = [
  {
    name: 'cardinal',
    displayName: 'Cardinal',
    stakePoolAddress: new PublicKey(
      'AxHiaxZeoDsyjD8Eyj5tQtrajkxYk5xebEK1QNQ1LSE7'
    ),
    imageUrl: '/logo-colored.png',
    colors: {
      primary: 'rgb(54,21,38,0.9)',
      secondary: 'rgb(157,120,138, 0.6)',
    },
  },
  {
    name: 'TheSuperSOL1',
    displayName: 'TheSuperSOL1',
    stakePoolAddress: new PublicKey(
      '8AoLaycYiegJhYedzcNAS3hohMaCtrjnShV2kUBbkSpH'
    ),
    
    websiteUrl: 'https://thesupersol.net/',
    imageUrl:
      'https://raw.githubusercontent.com/ogadwintara/SOSTOKEN/main/logo192.png',
    maxStaked: 1200,
    links: [
      {
        text: 'Home',
        value: 'https://thesupersol.net',
      },
    ],
    backgroundImage: '/8.png',
    
    styles: {
      fontFamily: 'Industry, sans-serif',
      fontWeight: 500,
    },
    colors: {
      primary: '#000000',
      secondary: '#000000',
      accent: '#ffc107',
      fontColor: '#FFFFFF',
      fontColorSecondary: '#FFFFFF',
      
    },
  },
  {
    name: 'block-token',
    displayName: 'Blockasset Token',
    stakePoolAddress: new PublicKey(
      'jhksrHQqRKBEFuker9buKw4zDDrmENGTTKnUn2QzsUD'
    ),
    websiteUrl: 'https://hub.blockasset.co/token-staking-v2',
    imageUrl:
      'https://blockasset.co/static/logo-e51ac9985ba7aef4ac8c1b1ae1c00511.png',
    links: [
      {
        text: 'NFT Staking',
        value: 'https://hub.blockasset.co/nft-staking-v2',
      },
      {
        text: 'Smesh Bros',
        value: 'https://hub.blockasset.co/smesh-staking',
      },
      {
        text: 'Block Token',
        value: 'https://hub.blockasset.co/token-staking-v2',
      },
    ],
    colors: {
      primary: '#000000',
      secondary: '#4da1de',
      accent: '#1fcfb11c',
      fontColor: '#FFFFFF',
    },
    airdrops: [],
  },


  {
    name: 'Sussy Sol Cats',
    displayName: 'Sussy Sol Cats',
    stakePoolAddress: new PublicKey(
      'EJCu7UwEsnRTTuz2qjsSksxwCZmk66aRXLGgeq7hvQUt'
    ),
    websiteUrl: 'https://thesussycats.netlify.app/',
    receiptType: ReceiptType.Original,
    imageUrl:
      'https://github.com/Zcrayzzen/asset/blob/main/New_Project_22.png?raw=true',
    maxStaked: 1111,
  },
  {
    name: 'Orbit',
    displayName: 'Orbit',
    hostname: 'stake.unfrgtn.space',
    stakePoolAddress: new PublicKey(
      '4TMt9ehagkdFgZJBnyBRBTNfXUD8xLX18JyPVeGDpaKb'
    ),
    websiteUrl: 'https://unfrgtn.space/',
    receiptType: ReceiptType.Original,
    imageUrl:
      'https://cdn.discordapp.com/attachments/475411995273854976/987098707449241600/logo_2.png',
    maxStaked: 2014,
    colors: {
      primary: '#000000',
      secondary: '#4da1de',
      accent: '#1fcfb11c',
      fontColor: '#FFFFFF',
    },
  },

  {
    name: 'skatex-founders',
    displayName: 'SkateX Founders',
    stakePoolAddress: new PublicKey(
      '5cYt8tVpVc1ECPohiUhKgBVUnRAHv9mEpE3WJzSpRaSh'
    ),
    websiteUrl: 'https://www.skatex.io/',
    receiptType: ReceiptType.Original,
    imageUrl: '/logos/skatex-logo.png',
    maxStaked: 1080,
    styles: {
      fontFamily: 'Industry, sans-serif',
      fontWeight: 500,
    },
    colors: {
      primary: '#211227',
      secondary: '#c7bdcb',
      fontColor: '#ffffff',
      fontColorSecondary: '#000000',
    },
  },
  {
    name: 'skatex-c2c',
    displayName: 'SkateX Coast2Coast',
    stakePoolAddress: new PublicKey(
      'FcVePnNEFFt1SdbTT1dHWWsRft8DAeCF3TRPBZFyLGpZ'
    ),
    websiteUrl: 'https://www.skatex.io/',
    receiptType: ReceiptType.Original,
    imageUrl: '/logos/skatex-logo.png',
    maxStaked: 2222,
    styles: {
      fontFamily: 'Industry, sans-serif',
      fontWeight: 500,
    },
    colors: {
      primary: '#211227',
      secondary: '#c7bdcb',
      fontColor: '#ffffff',
      fontColorSecondary: '#000000',
    },
  },
  {
    name: 'skatex-combo',
    displayName: 'SkateX Collection Combo',
    stakePoolAddress: new PublicKey(
      'CUwNn2VrgQ3R7znBXoTzUyYR1WoSAMHXw38GZNKmY4u3'
    ),
    websiteUrl: 'https://www.skatex.io/',
    receiptType: ReceiptType.Original,
    imageUrl: '/logos/skatex-logo.png',
    styles: {
      fontFamily: 'Industry, sans-serif',
      fontWeight: 500,
    },
    colors: {
      primary: '#211227',
      secondary: '#c7bdcb',
      fontColor: '#ffffff',
      fontColorSecondary: '#000000',
    },
  },
  {
    name: 'sla',
    displayName: 'Secret Llama Agency',
    stakePoolAddress: new PublicKey(
      'DFXwKJK2UCEVhujYPDmLmPUBKgEK58cKaUJzC3UGhysf'
    ),
    websiteUrl: 'https://www.secretllamaagency.com/',
    receiptType: ReceiptType.Original,
    imageUrl: 'https://www.secretllamaagency.com/images/Logo-7-p-500.png',
  },
  {
    name: 'reverb',
    displayName: 'Reverb',
    stakePoolAddress: new PublicKey(
      'J2kvKqkTMbXdbWS3eGmJFv35tKTrzy7wxkJmCzEJ7KAG'
    ),
    maxStaked: 1100,
    websiteUrl: 'https://pinclub.io/',
    receiptType: ReceiptType.Original,
    imageUrl: '/logos/reverb.png',
    colors: {
      primary: '#394b5a',
      secondary: '#6e989d',
      fontColor: '#ffffff',
    },
  },
  {
    name: 'dictators',
    displayName: 'Dictators',
    stakePoolAddress: new PublicKey(
      'FGwmVFD2b8UcdwUzwcaPzTSd8UCiyp5EoeNjoaqwnAy6'
    ),
    websiteUrl: 'https://citadel.thedictator.xyz',
    receiptType: ReceiptType.Original,
    maxStaked: 5000, // update with collection size
    imageUrl:
      'https://shdw-drive.genesysgo.net/4B5uhQo61B8JrutW1EXYhedw8uycMWE8JVmw1onbLjTh/Dlogo.svg',
    tokenStandard: TokenStandard.NonFungible,
    hideAllowedTokens: false,
    hidden: true,
    styles: {
      fontFamily: 'Industry, sans-serif',
      fontWeight: 500,
    },
    colors: {
      primary: '#1A1A1D',
      secondary: '#C3073F',
      accent: '#6F2232',
      fontColor: '#FFFFFF',
      fontColorSecondary: '#FFFFFF',
      backgroundSecondary: '#4E4E50',
    },
  },
]
