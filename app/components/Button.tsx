import { tv, VariantProps } from "tailwind-variants";

export type ButtonsProps = React.ComponentProps<"button"> & VariantProps<typeof button>


const button= tv({
    base:
    [ 'rounded-lg px-4 py-2 text-sm font-semibold shadow-sm cursor-pointer outline-none ',
     'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 ',
     'active:opacity-80',
    ]   ,
    variants: {
        variant:{
            primary:'bg-violet-600 text-white hover:bg-violet-700 ',
            outline:'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 ',
         },
    },    
    defaultVariants: {
        variant: 'primary',
    },
}  
 )
export function Button({variant, ...props }:ButtonsProps) {
  return (
   <button
   {...props}
    className={button({variant})}
    />
  );
}