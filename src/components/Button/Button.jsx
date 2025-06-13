
import './styled.css';
function Button({ variant, ...props }) {
    const validVariants = ['primary', 'secondary', 'tertiary'];
    const safeVariant = validVariants.includes(variant) ? variant : 'primary';

    const className = `btn-${safeVariant} ${props.className}`.trim();
    console.log('Button className:', className);

    return (
        <>

            <button className={className} {...props}>
                {props.children}
            </button>
        </>
    );
}
export default Button;