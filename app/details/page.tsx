import { SsgoiTransition } from "@ssgoi/react";
// import { AnimatedHeading } from "@/components/ui/animated-heading";

export default function DetailsPage() {
  return (
    <SsgoiTransition id='/details'>
      <main>
        <h1>Details Page</h1>
      </main>
    </SsgoiTransition>
    // <SsgoiTransition id='/details'>
    //   <main className='flex min-h-screen w-full flex-col items-center justify-center bg-black p-4'>
    //     <AnimatedHeading text='DETAILS' />
    //   </main>
    // </SsgoiTransition>
  );
}
