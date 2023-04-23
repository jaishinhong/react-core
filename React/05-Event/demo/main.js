


function App(){
    const handleClick = ()=>{
        console.log("click")
    }

    return (
        <div className='container'>
            <h1>Event Handler</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}



//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
