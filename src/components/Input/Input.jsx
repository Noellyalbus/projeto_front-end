
import './styled.css';
function Input({ label,...props}) {
    return ( 
     
        <label className='flex flex-col gap-1.25'>
            <span className='text-xs font-bold' >{label}</span>
        <input className='input'   {...props}/>
        <span className="error">Campo obrigatório ou inválido</span>
        </label>
        
     );
}
 
export default Input;

