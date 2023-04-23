function App() {

    const [isShow, setIsShow] = React.useState(true)

    const handleClickTohide = () => {
        setIsShow(false);
    }

  return (
    <div className="container">
        <div>{isShow && <button onClick={handleClickTohide}>Click to Hide me</button>}</div>
    </div>
  )
        
}







//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
