import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[600px] md:w-[600px]">
          <Image
            src={"/documents.svg"}
            fill
            className="object-contain"
            alt="Documents"
          />
        </div>
      </div> 
    </div>
  )
}

export default Hero;