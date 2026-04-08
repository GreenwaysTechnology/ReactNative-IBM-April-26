import { createRoot } from 'react-dom/client'

function ListView({items}){

  return <div>
      <h1>Fruits List</h1>
      <ul>
          {items.map((item,index)=>{
             return <li key={index}>
                  <span>{item}</span>
             </li>
          })}
      </ul>
  </div>
}

function App(){
  const items = ["Apple","Banana","Organge","Mango"]
   return <>
       <ListView items={items} /> 
   </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
