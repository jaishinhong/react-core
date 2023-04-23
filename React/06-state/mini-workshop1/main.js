function AccordionClose({handleClick}){

    return(
        <div className="accodion">
            <p className="accodion-title">{"Section Title"}</p>
            <button onClick={handleClick} className="accodion-button"><i class="fa-solid fa-caret-right"></i></button>
        </div>

    )
}

function AccodionOpen({handleClick}){

    return(
        <div className="accodionOpen">
            <div className="accodionOpen-title">
                <p className="accodion-title">{'Section Title'}</p>
                <button onClick={handleClick} className="accodion-button"><i class="fa-sharp fa-solid fa-caret-down"></i></button>
            </div>
            <div className="accodionOpen-body">
                <p>Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium orem ipsum dolor sit amet consectetur. Cursus nisl purus tempor sapien est. Integer sed viverra pellentesque orci erat viverra hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci tellus purus quis. Venenatis semper ac volutpat nec semper tincidunt. Leo ultricies felis elementum rhoncus tristique nulla justo. Vitae consectetur phasellus magna tellus. Feugiat id maecenas auctor ut sit dui pretium.</p>
            </div>            
        </div>
    )
}




function App(){

    let[show1, setShow1] = React.useState(true)
    let[show2, setShow2] = React.useState(true)
    let[show3, setShow3] = React.useState(true)
    let[show4, setShow4] = React.useState(true)
    let[show5, setShow5] = React.useState(true)
    function handleClick(set){
        switch(set){
            case 1 : setShow1(!show1);break;
            case 2 : setShow2(!show2);break;
            case 3 : setShow3(!show3);break;
            case 4 : setShow4(!show4);break;
            case 5 : setShow5(!show5);break;
        }
    }


    return(
        <div className="container">
            {show1? <AccordionClose handleClick={()=>{handleClick(1)}}/> : <AccodionOpen handleClick={()=>{handleClick(1)}}/>}
            {show2? <AccordionClose handleClick={()=>{handleClick(2)}}/>: <AccodionOpen handleClick={()=>{handleClick(2)}}/>}
            {show3? <AccordionClose handleClick={()=>{handleClick(3)}}/>: <AccodionOpen handleClick={()=>{handleClick(3)}}/>}
            {show4? <AccordionClose handleClick={()=>{handleClick(4)}}/>: <AccodionOpen handleClick={()=>{handleClick(4)}}/>}
            {show5? <AccordionClose handleClick={()=>{handleClick(5)}}/>: <AccodionOpen handleClick={()=>{handleClick(5)}}/>}
            
        </div>

    )
}

//ReactDOM
const domroot = document.getElementById('root')
const root = ReactDOM.createRoot(domroot)
root.render(<App/>)
