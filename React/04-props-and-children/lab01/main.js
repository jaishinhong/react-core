function Profile({name, age}){ //destructering
    return (
        <>
            <h1>FullName : {name}</h1>
            <h2>Age : {age}</h2>
        </>
    )
       
}



function App(){
    return(
        <div className='container'>
            <Profile name='John Doe' age={27}/>
            <Profile name='Mark Ruffalo' age={30}/>
        </div>
            

    )

}






//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
