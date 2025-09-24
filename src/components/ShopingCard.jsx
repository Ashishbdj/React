import img from "../assets/-original-imah4jyfveygyubc.webp"
function ShopingCard(props)
{
    return(
        <>
        <div style={{backgroundColor:"lightcyan", width:"23rem", height:"35rem",borderRadius:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div className="main" >
                <div style={{padding:"1rem"}}>
                    <img style={{width:"20rem",height:"20rem"}} src={props.img} alt="Iphone" />
                </div>
            </div>
            <div >
                <h1 style={{color:"black",fontSize:"20px",textAlign:"center"}}>{props.name}</h1>
                <div style={{textAlign:"center",fontSize:"2rem",fontWeight:"bold"}}>
                    <div style={{display:"inline",color:"black"}}>{props.rating}⭐</div>
                    <span style={{color:"black"}}>({props.userbuy})</span>
                </div>
                <div style={{textAlign:"center",fontSize:"1.5rem",fontWeight:"normal"}}>
                    <div style={{display:"inline",color:"black",marginRight:"1rem" }}>₹ {props.price}</div>
                    <div style={{display:"inline",color:"black",marginRight:"1rem"}}><s>₹ {props.discount}</s></div>
                    <div style={{display:"inline",color:"black"}}><span>{Math.floor(props.price/props.discount*100)}% off</span></div>
                    
                </div>
            </div>
            </div>
        </>
    )
}
export default ShopingCard