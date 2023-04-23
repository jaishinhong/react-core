function App(){
    const clickHandle = (event)=>{
        console.log(event.target.value)
    }



    return(
        <div className="container">
            <input type="text" onChange={clickHandle}></input>

        </div>

    )
}






//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
