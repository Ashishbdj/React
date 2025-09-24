import JavascriptHTML from "./components/javascriptHTML"
import ShopingCard from "./components/ShopingCArd"
function App()
{
 
  return(
   <div>
    <JavascriptHTML name="Ashish" age="22"/>
    <JavascriptHTML name="Anuj" age="20"/>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"2rem",padding:"2rem"}}>
    <ShopingCard/>
    <ShopingCard/>
    <ShopingCard/>
    <ShopingCard/>
    </div>
    
   </div>
  )
}

export default App