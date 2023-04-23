let fullname = "jai jai"
let birthYear = 1997
let CURRENT_YEAR = 2023
let imgSrc = 'https://picsum.photos/id/155/200/300'
const App = (
    <>
        <h1>{fullname}</h1>
        <p>{CURRENT_YEAR - birthYear}</p>
        <div>
            <img src ={imgSrc} />
        </div>
    </>
)




//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(App)
