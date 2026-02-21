import { useState } from "react"


function App() {

    // create useState to hold data
  const [notetraking, setnotetraking] = useState("");  
  const [note, setnote] = useState([
    {id:2,title:"ratul"},
    {id:3,title:"yeasin"}

  ]);
const[editmote , seteditmote] = useState(false);
const[editable, seteditable] = useState(null); 

  // track note 
   const notetrakingHandaler  = (e) => {
     setnotetraking(e.target.value);
     console.log(notetraking)
   }

   const submithandeler = (e)=> {
    e.preventDefault()
    if(notetraking.trim() === ""){
      return alert("type eror")
    }
      editmote ? updatehandaler() : createhandler()
    }

    const createhandler = ()=>{
           const createNote = {
        id:Date.now() + "" ,
        title:notetraking,
      }
      setnote([createNote, ...note]);
      setnotetraking("");
    }


function  edithandler (note){
    seteditmote(true);
    seteditable(note);
    setnotetraking(note.title);
}

const updatehandaler = ()=>{
    const update =  note.map((items)=>{
       if(items.id === editable.id){
        return {...items,title:notetraking }
       } return items;
    })
 setnote(update)
}


// .........let's create delete handelear
const deleteHandaler = (noteid)=>{
const update = note.filter(items => items.id !== noteid );
 setnote(update);
} 



  return (
    <>
       <h1>Note Traking </h1>
        <form onSubmit={submithandeler}>
          <input type="text" value={notetraking} onChange={notetrakingHandaler} />
          <button type="submit">{editmote ?"update note":"add note"}</button>
        </form>
         <div className="note_list">
           <h2> Note List Daily </h2>
            <ul>
            {note.map(note=>(
              <li key={note}>
                <span>{note.title}</span>
                <button onClick={()=>edithandler(note)}>Edit</button>
                <button onClick={()=>deleteHandaler(note.id)}>Delete</button>
              </li>
           
            ))}
            </ul>
            
         </div>
    </>
  )
}

export default App
