let height = 175
let weight = 80

function calcBMI(h, w){
    return w / (h/100)**2
}



let App = (
    <div className="box">
        <p>{calcBMI(height, weight)}</p>
    </div>
)



//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(App)
