import { SsgoiTransition } from "@ssgoi/react";
// import { AnimatedHeading } from "@/components/ui/animated-heading";

export default function ListPage() {
  return (
    <SsgoiTransition id='/list'>
      <main>
        <h1>List Page</h1>
      </main>
    </SsgoiTransition>
    // <SsgoiTransition id='/list'>
    //   <main className='flex min-h-screen w-full flex-col items-center justify-center bg-black p-4'>
    //     <AnimatedHeading text='LIST' />
    //   </main>
    // </SsgoiTransition>
  );
}
