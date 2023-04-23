

function App(){
    const handleChange = (event)=>{
        console.log(event.target.value)
    }


    return(
        <div>
            <h1>Event Listening</h1>
            <button>clickme</button>
        </div>
        
    )

}




//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
