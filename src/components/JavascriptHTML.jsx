function JavascriptHTML(props)
{
     let a=10
  let b=30
    return(
         <>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <h1>Hii I'm Html inside javascript</h1>
      <p>Hii i'm javascript inside html {a+b}</p>

    </>
    )
}

export default JavascriptHTML