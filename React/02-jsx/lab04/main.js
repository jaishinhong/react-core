const App = (
    
    <div className='main'>
        <div className='main_left'>
            <img src="./banner.png" className='main_left_img'/>
        </div>
        <div className='main_right'>
            <div className='main_right_box'>
                <h1>Discover authentic Japanese cuisine in LA. Opening Soon!</h1>
                <p>Welcome to Hensui, the newest addition to the vibrant Los Angeles dining scene! Our restaurant is dedicated to bringing you the most authentic and delicious Japanese cuisine.
                Stay tuned for our grand opening date, sign up with your e-mail address to get notified. </p>
                <div className ='main_right_box_submit'>
                    <input class="input" placeholder="E-mail"></input>
                    <button class='button'>SUBMIT</button>
                </div>              
            </div>
        </div>
    </div>
)



//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(App)
