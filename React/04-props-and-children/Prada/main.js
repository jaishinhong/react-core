function Registor(){

    return(
        <div className="registor">
            <div>
                
            </div>
            <p>{'SHOP THE SALE COLLECTION'}</p>
            <div>
                <p>{"Sign in / Registor"}</p>
            </div>
        </div>
    )
}

function App(){


    return(
        <>
            <Registor/>
        
        </>
    )
}




//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
