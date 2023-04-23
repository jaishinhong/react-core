
// const header = document.createElement('h1')
// console.log(header)

//-----------REACT---------------------------------------




// const header = React.createElement('h1', {
//     className: 'text-red'
// }, 'Hello from React')



// const domRoot = document.getElementById('root')
// const root = ReactDOM.createRoot(domRoot)


// root.render(header)

//-----------REACT2---------------------------------------
let list1 = React.createElement('li', null, 'item-1')
let list2 = React.createElement('li', null, 'item-2')
let list3 = React.createElement('li', null, 'item-3')
let lists = React.createElement('ul', null, list1, list2, list3)
let card = React.createElement('h2', null, 'My list', lists)


const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)


root.render(card)