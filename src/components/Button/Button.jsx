
import classNames from 'classnames';
import './styled.css';
function Button({ variant,className, ...props }) {
    const validVariants = ['primary', 'secondary', 'tertiary'];
    const safeVariant = validVariants.includes(variant) ? variant : 'primary';

   
    return (
        <>

            <button className={classNames(`btn-${safeVariant}`,`${className}`) } {...props}>
                {props.children}
            </button>
        </>
    );
}
export default Button;