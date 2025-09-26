function Button({label,onClick})
{
    return(
        <>
            <button style={{fontSize:"4rem",margin:"2rem 0.2rem",padding:"0.8rem",borderRadius:"10px"}} onClick={onClick}>{label}</button>
        </>
    )
}
export default Button