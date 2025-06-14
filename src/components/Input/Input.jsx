
import classNames from 'classnames';
import './styled.css';
function Input({ className,...props}) {
    return ( 
     
        <div className='flex flex-col gap-1.25'>
        <input className={classNames(`input`,`${className}`)}   {...props}/>
        <span className="error">Campo obrigatório ou inválido</span>
        </div>
        
     );
}
 
export default Input;

