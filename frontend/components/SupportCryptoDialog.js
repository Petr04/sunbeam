import Image from 'next/image'
import CopyableString from '@/components/CopyableString'

// mock addresses
const addresses = {
  bitcoin: 'moRx7gsdheXi5a64KijT32R77hDLqWU55E',
  ethereum: '0xC70C937C8D6952D5C930BDD5EB4F382A517E47F8',
  // polygon: '0x654BBB0CBE3878ABEF4FD015F4F016C323D99374',
}

const icons = {
  bitcoin: '/currency-bitcoin-gray-01.svg',
  ethereum: '/currency-ethereum-gray-01.svg',
}

export default function SupportCryptoDialog() {
  return (
    <>
      {Object.keys(addresses).map(cryptoName => (
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
            {addresses[cryptoName]}
          </CopyableString>
        </div>
      ))}
    </>
  )
}
