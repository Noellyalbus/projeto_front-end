
import './styled.css';
import checked from '../../../assets/Checked.svg';
function Checkbox({ label, ...props }) {
    return (
        <label class="relative flex items-center cursor-pointer space-x-2 ">
            <input type="checkbox" class="sr-only peer" {...props} />
            <div class="w-5 h-5 bg-white border-1 border-gray-300 rounded-xs">
            </div>
            <img src={checked} alt="Checked" class="w-5 h-5 absolute opacity-0 peer-checked:opacity-100 transition-opacity" />
            <span>{label}</span>
        </label>

    );
}
export default Checkbox;