import { cva } from "class-variance-authority";

export const variants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-extrabold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "bg-background font-bold text-blue shadow-inset hover:bg-blue-secondary hover:opacity-80",
        outline2:
          "bg-background font-bold text-blue shadow-inset hover:bg-blue-secondary hover:opacity-80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:opacity-80",
        ghost: "text-blue hover:opacity-40",
        link: "text-blue font-bold underline-offset-4 hover:underline ",
        newStyle: "bg-blue font-bold text-primary-foreground hover:opacity-80",
        newStyle2: "bg-blue-secondary font-bold text-blue hover:opacity-80",
      },
      size: {
        default: "h-10 px-7 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        link: "p-0 h-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export * from "./cn";