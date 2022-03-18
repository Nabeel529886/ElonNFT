import { NFTStorage, File } from 'nft.storage'
import { pack } from 'ipfs-car/pack';
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

async function storeAssets(){
const client = new NFTStorage({ token: process.env.NABEEL_NFT_STORAGE })

const metadata = await client.store({
    name: 'Elon Musk',
    description: 'Making Interplanatory Travel Possible and pushing the boundaries for the mankind',
    image: new File([await fs.promises.readFile("assets/elon musk.jpg")], 'elon mush.jpg', { type: 'image/jpg' }),
    attributes: [
      {
        trait_type: "Zodiac", value: "Cancer"
      },
      {
        trait_type: "Height", value: "6'1"
      },
      {
        trait_type: "Personality type", value: "INTJ"
      }
    ]
  })
  console.log(metadata.url)
}


storeAssets().then(() => process.exit(0))
.catch((error) => {
  console.log(error)
  process.exit(1)
})



