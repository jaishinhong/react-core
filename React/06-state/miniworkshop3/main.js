


function App() {

    const images = [
        "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    ];

    let [slide, setSlide] = React.useState(0)

    function handdleLeftClick() {
        if(slide === 0){
            setSlide(3)
        }else{
            setSlide(slide-1)
        }
    }

    function handdleRightClick() {
        if(slide === 3){
            setSlide(0)
        }else{
            setSlide(slide+1)
        }
    }

    return (
        <div className="container">
            <button onClick={handdleLeftClick}>{'<'}</button>
            <img src={images[slide]}></img>
            <button onClick={handdleRightClick}>{'>'}</button>

        </div>
    )
}



//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
