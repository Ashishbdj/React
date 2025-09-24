import JavascriptHTML from "./components/javascriptHTML"
import ShopingCard from "./components/ShopingCArd"
import img1 from "./assets/-original-imah4jyfveygyubc.webp"
import img2 from "./assets/-original-imahfw4ahckefvxe.webp"
import img3 from "./assets/-original-imahadxg8mgjzrfh.webp"
import img4 from "./assets/nord-5-5g-cph2079-oneplus-original-imahdvhguqneybrf.webp"  
function App()
{
 
  return(
   <div>
    <JavascriptHTML name="Ashish" age="22"/>
    <JavascriptHTML name="Anuj" age="20"/>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"2rem",padding:"2rem"}}>
    <ShopingCard img={img1} name="Apple iPhone 16 (White, 128 GB)" price={54999} discount={69999} rating={5.4} userbuy={1000}/>
    <ShopingCard img={img2} name="Samsung Galaxy S23 (Black, 256 GB)" price={74999} discount={89999} rating={4.8} userbuy={800}/>
    <ShopingCard img={img3} name="OnePlus 11 (Green, 128 GB)" price={56999} discount={64999} rating={4.5} userbuy={600}/>
    <ShopingCard img={img4} name="Google Pixel 7 (White, 128 GB)" price={59999} discount={64999} rating={4.6} userbuy={500}/>
    </div>
    
   </div>
  )
}

export default App