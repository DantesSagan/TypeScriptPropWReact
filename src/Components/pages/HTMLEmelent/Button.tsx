type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;
// We can use simply React.ComponentProps<'button'>
// And in WrappingHTMLElement we use:
// <div>Primary Button</div>
//  Or we can use without React element like this:
// Omit<React.ComponentProps<'button'>, 'children'>
// Where don't needed write jsx element of React.ComponentProps
export default function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
}
