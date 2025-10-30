import { SsgoiTransition } from "@ssgoi/react";
// import { AnimatedHeading } from "@/components/ui/animated-heading";

export default function AboutPage() {
  return (
    <SsgoiTransition id='/about'>
      <main>
        <h1>About Page</h1>
      </main>
    </SsgoiTransition>
    // <SsgoiTransition id='/about'>
    //   <main className='flex min-h-screen w-full flex-col items-center justify-center bg-black p-4'>
    //     <AnimatedHeading text='ABOUT' />
    //   </main>
    // </SsgoiTransition>
  );
}
