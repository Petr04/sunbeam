import Image from 'next/image'
import CopyableString from '@/components/CopyableString'

const icons = {
  bitcoin: '/currency-bitcoin-gray-01.svg',
  ethereum: '/currency-ethereum-gray-01.svg',
}

export default function SupportCryptoDialog({ cryptoAddresses }) {
  return (
    <>
      {Object.keys(icons).map(cryptoName => (
        <div
          className="flex items-center gap-[10px] w-full"
          key={cryptoName}
        >
            <Image
              className="w-[24px] h-[24px] mx-[10px]"
              src={icons[cryptoName]}
              width={24} height={24}
              alt={icons[cryptoName].slice(1)}
            />
          <CopyableString>
            {cryptoAddresses[cryptoName]}
          </CopyableString>
        </div>
      ))}
    </>
  )
}
