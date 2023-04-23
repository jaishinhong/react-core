function Registor(){

    return(
        <div className="registor">
            <p>{'SHOP THE SALE COLLECTION'}</p>
            <div>
                <p>{"Sign in / Registor"}</p>
            </div>
        </div>
    )
}
function Header(){

    return(
        <h1 className="header">PRADA</h1>
    )
}
function Nav({title}){

    return(
        <p>{title}</p>
    )
}
function Card({src, color, des}){
    console.log(src)

    return(
        <div>
            <img src={src}></img>
            <p>{color}</p>
            <p>{des}</p>        
        </div>
    )
}



function App(){

    return(
        <>
            <Registor/>
            <div className="main-body">
                <Header/>
                <nav>
                    <Nav title='Women'/>
                    <Nav title='Men'/>
                    <Nav title='Children'/>
                    <Nav title='Sale'/>
                    <Nav title='New In'/>
                    <Nav title='Home collection'/>
                </nav>
                <div className='sexywomen'>
                    <img src="./sexy-woman-with-boho-accsessorises-posing-in-pool-2021-04-06-18-50-44-utc 1.png"></img>
                </div>
                <div className="summer">
                    <h2>SUMMER 2021</h2>
                    <p>Explore sports-inspired ready-to-wear and bold accessories from the latest collection.</p>
                    <div className="summer-box">{"NEW IN FOR HER"}</div>
                </div>
                <h1 className="newArrivals">NEW ARRIVALS</h1>
                <div className='card'>
                    <Card src="./image1.png" color='4 COLORS' des='Terry tote bag'/>
                    <Card src="./image2.png" color='8 COLORS'des='Re-Nylon bucket hat'/>
                    <Card src="./image3.png" color='1 COLORS' des='Prada Symbole sunglasses'/>
                </div>
                <div className="fall-collection">
                    <div className="fall-collection-left">
                        <div>
                            <h2>{"LIGHT LAYERS"}</h2>
                            <p>The Pre-Fall 2021 womenswear collections lightweight jackets in relaxed fits.</p>
                            <div className="fall-shop">{'SHOP NOW'}</div>
                        </div>
                    </div>
                    <img src='./image4.png'></img>
                </div>
                <div className='card'>
                    <Card src="./image5.png" color='2 COLORS' des='Cotton pique T-shirt'/>
                    <Card src="./image6.png" color='1 COLORS'des='Cotton robe'/>
                    <Card src="./image7.png" color='2 COLORS' des='Prada Symbole sunglasses'/>
                </div>
                <div className="swimming">
                    <img src="./swimming-pool.png"/>
                    <h2 className="swimming-h2">LA PRADINA</h2>
                    <div className="swimming-div">EVERYTHING FOR HER</div>
                </div>
                    
            </div>
            
        </>
    )
}
//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
