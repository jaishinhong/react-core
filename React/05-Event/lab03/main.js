

function App(){
    const handleChange = (event)=>{
        console.log(event.target.name)
        console.log(event.target.value)
        console.log(event.target.checked)
    }


    return(
        <div className="container">
           <form onChange={handleChange}>
                <div>
                <input type='checkbox' id='iPhone' name="iPhone"></input>
                <label htmlFor="iPhone">{'iPhone'}</label>
                </div>
                <div>
                    <input type='checkbox' id="samsung" name='Samsung'></input>
                    <label htmlFor="samsung">{'Samsung'}</label>
                </div>
                <div>
                    <input type='checkbox' id="Xiaomi" name='Xiaomi'></input>
                    <label htmlFor="Xiaomi">{'Xiaomi'}</label>
                </div>
           </form>
        </div>
        
    )

}




//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
