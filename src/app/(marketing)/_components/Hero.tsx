import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

function Hero() {
  return (
    <AnimatedGroup
      className='grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4 max-w-3xl'
      variants={{
        container: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              duration: 1.2,
              type: 'spring',
              bounce: 0.3,
            },
          },
        },
      }}
    >
      <img
        src='/document1.png'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-xl'
      />
      <img
        src='/document2.png'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-xl'
      />
      <img
        src='/document3.png'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-xl md:block hidden'
      />
      <img
        src='/document4.png'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-xl lg:block hidden'
      />
    </AnimatedGroup>
  );
}

export default Hero;