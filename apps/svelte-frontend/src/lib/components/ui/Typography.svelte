<script lang="ts" context="module">
    import { cva } from "class-variance-authority"

    export const typographyVariants = cva(
  "transition-colors",
  {
    variants: {
      variant: {
        default: "text-base",
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight",
        p: "leading-7 [&:not(:first-child)]:mt-6",
        blockquote: "mt-6 border-l-2 pl-6 italic",
        body: "text-base",
        body2: "text-sm",
        inlinecode: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        lead: "text-xl text-muted-foreground",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none",
        muted: "text-sm"
      },
      color: {
        default: "text-primary",
        secondary: "text-secondary",
        destructive: "text-destructive",
        accent: "text-accent",
        muted: "text-muted-foreground",
        "primary-foreground": "text-primary-foreground",
        "secondary-foreground": "text-secondary-foreground",
        "destructive-foreground": "text-destructive-foreground",
        "accent-foreground": "text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "body",
      color: "default",
    },
  }
)
</script>