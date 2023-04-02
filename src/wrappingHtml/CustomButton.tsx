type CustomButtonProps = {
    variant: 'red' | 'green'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'> //this omit method is restrict for children as you given the type assign
export default function CustomButton({ variant, children, ...rest }: CustomButtonProps) {
    return (
        <button style={{
            backgroundColor: `${variant}`
        }} {...rest}> {children}</button >
    )
}
