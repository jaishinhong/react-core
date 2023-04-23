const ProductItem = function({product, price, des}){
    return(
        <>
            <h1>{product}</h1>
            <h2>{price}</h2>
            <p>{des}</p>    
        </>
        
    )
}



function App(){



    return(
        <div className="container">
            <ProductItem product='iphone' price='200$' des='ios'/>
            <ProductItem product='samsung' price='400$' des='android'/>
        
        </div>



    )
}






//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
