function App() {

    const [isShow, setIsShow] = React.useState(true)

    // setIsShow(false)
    // let isShow = true

    const handleClickTohide = () => {
            setIsShow(!isShow)   
        
    }

  return (
    <div className="container">
        {/* <div><button onClick={handleClickTohide}>Click to Hide me</button></div> */}
        <div>
            {isShow ? <button onClick={handleClickTohide}>Click to Hide me</button> :
            <button onClick={handleClickTohide}>Click to show me</button>}
        </div>
        {isShow && <h1>Text</h1>}
    </div>
  )
        
}







//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
