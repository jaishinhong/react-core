function Card({shoes:{img ,model, description, color, price}}){



    return(
        <div className="card">
            <img src={img} className="card-img"/>
            <p>{model}</p>
            <p className="card-des">{description}</p>
            <p className="card-color">{color}</p>
            <p className="card-price">{price}</p>
        </div>

    )
}







function App(){

    const shoes1 = {
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/68b0ba7b-a352-4ed1-a0e9-2df11a68b693/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-sc-se-mVqXvN.png',
        model: 'Nike Air Max SC SE',
        description: "girl's shoes",
        color: ' 1 color',
        price: '฿3,000'
    }
    const shoes2 = {
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4629f759-242f-4709-95f0-066fecf999c8/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-court-vision-low-3JRH8h.png',
        model: 'Nike Court Vision Low',
        description: "men's shoes",
        color: ' 1 color',
        price: '฿2,100'
    }
    const shoes3 = {
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bdb9af6b-24e3-40df-b843-4e7a51a33833/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%82%E0%B8%A3%E0%B9%89%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89-revolution-6-NC0P7k.png',
        model: 'Nike Revolution 6',
        description: "running shoes",
        color: ' 8 color',
        price: '฿2,500'
    }
    
    return(
        <div className="container">
            <Card shoes={shoes1}/>
            <Card shoes={shoes2}/>
            <Card shoes={shoes3}/>
        </div>
        

    )
}






//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
