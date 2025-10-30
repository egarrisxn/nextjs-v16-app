import type { CSSProperties } from "react";

interface AnimatedHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  stagger?: number;
  duration?: number;
}

export function AnimatedHeading({
  text,
  stagger = 0.1,
  duration = 0.8,
  className = "",
  ...props
}: AnimatedHeadingProps) {
  return (
    <h1
      className={`leading-none tracking-tight text-white select-none ${className}`}
      {...props}
    >
      <span className='block overflow-hidden text-[22vw] font-extrabold md:text-[16vw] xl:text-[12vw] 2xl:text-[10vw]'>
        {text.split("").map((letter, i) => (
          <span
            key={i}
            className='inline-block'
            style={
              {
                animation: `letterSlideIn ${duration}s ease-out forwards`,
                animationDelay: `${i * stagger}s`,
                transform: "translateY(-100%)",
                opacity: 0,
                clipPath: "inset(0 0 100% 0)",
              } as CSSProperties
            }
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
    </h1>
  );
}
