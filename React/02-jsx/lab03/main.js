let App = (
    <>
        <label htmlFor='username'>Username</label>                         
        <input className='username' id='username' name='username'></input>
    
    </>
)

//htmlFor must have the same name with id, name

//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(App)
