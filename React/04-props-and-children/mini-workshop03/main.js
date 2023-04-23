function Key({className, num}){

    return(
        <p className={className}>{num}</p>
    )
}

function App(){



    return(
        <div className="container">
            <Key className="item item1" num="0"/>
            <Key className="item item2" num="C"/>
            <Key className="item item3" num="+/-"/>
            <Key className="item item4" num="%"/>
            <Key className="item item5" num="/"/>
            <Key className="item item6" num="7"/>
            <Key className="item item7" num="8"/>
            <Key className="item item8" num="9"/>
            <Key className="item item9" num="x"/>
            <Key className="item item10" num="4"/>
            <Key className="item item11" num="5"/>
            <Key className="item item12" num="6"/>
            <Key className="item item13" num="-"/>
            <Key className="item item14" num="3"/>
            <Key className="item item15" num="2"/>
            <Key className="item item16" num="1"/>
            <Key className="item item17" num="+"/>
            <Key className="item item18" num="0"/>
            <Key className="item item19" num="."/>
            <Key className="item item20" num="←"/>
            <Key className="item item21" num="="/>
            
            
        </div>
        
    )
}




//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
