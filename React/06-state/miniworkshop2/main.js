const Modal = function({handleClickModal}){
    
    return(
    <div className="modal">
        <h1>Are you Ok?</h1>
        <p>Just checking in</p>
        <button onClick={handleClickModal} className="modal-button">Yeah, thanks!</button>
        <button onClick={handleClickModal} className="exit-button">X</button>
    </div>
    )     
    
        
}

const App = function(){

    let [show, setShow] = React.useState(false)

    function handleClick(){
        setShow(true)

    }

    function handleClickModal(){
        setShow(false)

    }

    return(
        <div className="container">
            <button className="openbutton"onClick={handleClick}>Open</button>
            {show && <Modal handleClickModal={handleClickModal}/>}
        </div>
    )
}




//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
