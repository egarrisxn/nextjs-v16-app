// "use client";

// import { useEffect, useState } from "react";

// export function TestEffect() {
//   const [count, setCount] = useState(0);

//   // ❌ This should trigger a warning — updating state from props or constants
//   useEffect(() => {
//     setCount(1);
//   }, []);

//   return <div>{count}</div>;
// }
