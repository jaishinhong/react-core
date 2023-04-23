function App() {

    const [isShow, setIsShow] = React.useState(true)

    // setIsShow(false)
    // let isShow = true

    const handleClickTohide = () => {
        setIsShow(false);
        
    }

  return (
    <div className="container">
        <div>{<button onClick={handleClickTohide}>Click to Hide me</button>}</div>
        <h1>{isShow == true ? 'Text' : ''}</h1>
    </div>
  )
        
}







//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
