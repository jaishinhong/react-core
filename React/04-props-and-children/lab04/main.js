const ProductItem = function({product: {product, price, des}}){
    console.log(product)
    return(
        <>
            <h1>{product}</h1>
            <h2>{price}</h2>
            <p>{des}</p>    
        </>
        
    )
}

function App(){
    let product1 = {
        product: 'iphone',
        price: '300$',
        des: 'ios'
    }


    return(
        <div className="container">
            <ProductItem product={product1}/>
        
        </div>



    )
}



//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
