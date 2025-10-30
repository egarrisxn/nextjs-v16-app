"use client";

import type { ReactNode } from "react";
import { Ssgoi } from "@ssgoi/react";
import { fade } from "@ssgoi/react/view-transitions";

export function ViewTransitionProvider({ children }: { children: ReactNode }) {
  return (
    <Ssgoi config={{ defaultTransition: fade() }}>
      <div style={{ position: "relative", minHeight: "100vh" }}>{children}</div>
    </Ssgoi>
  );
}

// import type { ReactNode } from "react";
// import { Ssgoi } from "@ssgoi/react";
// import { scroll, fade, drill } from "@ssgoi/react/view-transitions";

// const ssgoiConfig = {
//   transitions: [
//     // Home → About: scroll up
//     { from: "/", to: "/about", transition: scroll({ direction: "up" }) },
//     // About → Home: scroll down
//     { from: "/about", to: "/", transition: scroll({ direction: "down" }) },
//     // List → Detail: drill (enter)
//     {
//       from: "/list",
//       to: "/detail/*",
//       transition: drill({ direction: "enter" }),
//     },
//   ],
// };

// export function ViewTransitionProvider({ children }: { children: ReactNode }) {
//   return (
//     <Ssgoi config={ssgoiConfig}>
//       <div style={{ position: "relative", minHeight: "100vh" }}>{children}</div>
//     </Ssgoi>
//   );
// }
