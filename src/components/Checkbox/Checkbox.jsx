import checked from '../../../assets/checkbox-checked.svg';
function Checkbox({ label, ...props }) {
    return (
        <label className="relative flex items-center cursor-pointer space-x-2 ">
            <input type="checkbox" className="sr-only peer" {...props}  />
            <div className="w-5 h-5 bg-white border-1 border-gray-300 rounded-xs">
            </div>
            <img src={checked} alt="Checked" className="w-5 h-5 absolute opacity-0 peer-checked:opacity-100 transition-opacity" />
            <span className='text-sm text-(--dark-gray-2)'>{label}</span>
        </label>

    );
}
export default Checkbox;