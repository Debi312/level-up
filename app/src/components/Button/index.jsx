import "./index.css"

export default function Button({ type, className, onClick, children }) {
    return <button className={`Button ${className ? className : ""}`} type={type} onClick={onClick}>{children}</button>

}