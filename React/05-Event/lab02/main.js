

function App(){
    const handleChange = (event)=>{
        console.log(event.target.value)
    }


    return(
        <div className="container">
            <select onChange={handleChange}>
                <option>Thailand</option>
                <option>China</option>
                <option>Japan</option>
                <option>America</option>
                <option>Taiwan</option>
            </select>
        </div>
        
    )

}




//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
