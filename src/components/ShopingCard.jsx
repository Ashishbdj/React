import img from "../assets/-original-imah4jyfveygyubc.webp"
function ShopingCard()
{
    return(
        <>
        <div style={{backgroundColor:"lightcyan", width:"300px"}}>
            <div className="main" >
                <div style={{padding:"1rem"}}>
                    <img src={img} alt="Iphone" />
                </div>
            </div>
            <div >
                <h1 style={{color:"black",fontSize:"20px",textAlign:"center"}}>Motorola g5</h1>
                <div style={{textAlign:"center",fontSize:"2rem",fontWeight:"bold"}}>
                    <div style={{display:"inline",color:"black"}}>4.3⭐</div>
                    <span style={{color:"black"}}>(1200)</span>
                </div>
                <div style={{textAlign:"center",fontSize:"1.5rem",fontWeight:"normal"}}>
                    <div style={{display:"inline",color:"black",marginRight:"1rem" }}>Rs 5000</div>
                    <div style={{display:"inline",color:"black",marginRight:"1rem"}}>Rs 8000</div>
                    <div style={{display:"inline",color:"black"}}><span>27%off</span></div>
                    
                </div>
            </div>
            </div>
        </>
    )
}
export default ShopingCard