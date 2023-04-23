function Nav({title, children}){
    
    return(
        <div className="list">
            <h1>{title}</h1>
            {children}
        </div>
    )
}




function App(){

    


    
    return(
        <div className="container">
            <Nav title="ใหม่และโดดเด่น">
                <p>{'สินค้ามาใหม'}</p>
                <p>{'รองเท้ารุ่นใหม่ล่าสุด'}</p>
                <p>{'เสื้อผ้าสไตล์ใหม่ล่าสุด'}</p>
                <p>{'ปฏิทินเปิดตัว SNKRS'}</p>
                <p>{'เป็นเจ้าของได้แล้วที่ SNKRS'}</p>
                <p>{'ออกแบบเองกับ Nike By You'}</p>
                <p>{'สินค้าขายดี'}</p>
                <p>{'พิเศษสำหรับ Member'}</p>
                <p>{'ใหม่และโดดเด่น'}</p>
               
            </Nav>
            <Nav title="ซื้อสินค้าไอคอน">
                <p>{'Air Force 1'}</p>
                <p>{'Air Jordan 1'}</p>
                <p>{'Air Max'}</p>
                <p>{'Dunk'}</p>
                <p>{'Blazer'}</p>
                <p>{'Pegasus'}</p>
            </Nav>
            <Nav title="สินค้าใหม่สำหรับผู้ชาย">
                <p>{'รองเท้า'}</p>
                <p>{'เสื้อผ้า'}</p>
                <p>{'อุปกรณ์และอุปกรณ์เสริม'}</p>
                <p>{'ซื้อสินค้ามาใหม่ทั้งหมด'}</p>
                
            </Nav>
            <Nav title="สินค้าใหม่สำหรับผู้หญิง">
                <p>{'รองเท้า'}</p>
                <p>{'เสื้อผ้า'}</p>
                <p>{'อุปกรณ์และอุปกรณ์เสริม'}</p>
                <p>{'ซื้อสินค้ามาใหม่ทั้งหมด'}</p>
                
            </Nav>
            <Nav title="สินค้าใหม่สำหรับเด็ก">
                <p>{'รองเท้า'}</p>
                <p>{'เสื้อผ้า'}</p>
                <p>{'อุปกรณ์และอุปกรณ์เสริม'}</p>
                <p>{'ซื้อสินค้ามาใหม่ทั้งหมด'}</p>               
            </Nav>            
        </div>
        

    )
}






//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
