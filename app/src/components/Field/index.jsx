import "./index.css"

export default function Field({ id, type, placeholder, value, onChange, onBlur, maxLength }) {
    return <div className="Field">
        <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} maxLength={maxLength}></input>
    </div>

}