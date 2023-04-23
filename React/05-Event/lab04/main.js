
function App(){
    function handleClick(event){
        let result = confirm("Go to google.com?")
        if(!result){
            event.preventDefault()
        } 
    }
   

    return(
        <div className='container'>
            <a onClick={handleClick} href="https://google.com">Google</a>
        </div>

    )
}






//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
