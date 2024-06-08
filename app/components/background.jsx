import Image from 'next/image';
import HomePic from "/public/home.jpg";
 
export default function Background() {
  return (
    <Image
      alt="Garage"
      src={HomePic}
      placeholder="blur"
      quality={100}
      priority
      fill
      sizes="100vw"
      style={{
        objectFit:'cover',
      }} 
      className='opacity-80'
    />
  )
}