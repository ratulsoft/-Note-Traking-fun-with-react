import { useState } from "react"


function App() {
  const [notetraking, setnotetraking] = useState("");  
  const [note, setnote] = useState([]);

   const notetrakingHandaler  = (e) => {
     setnotetraking(e.target.value);
     console.log(notetraking)
   }

   const submithandeler = (e)=> {
    e.preventDefault()
    if(notetraking.trim() === ""){
      return alert("type eror")
    }
      const createNote = {
        id:Date.now() + "" ,
        title:notetraking,

      }
      setnote([createNote, ...note]);
     setnotetraking("")
       
  
    }
  return (
    <>
       <h1>Note Traking </h1>
        <form onSubmit={submithandeler}>
          <input type="text" value={notetraking} onChange={notetrakingHandaler} />
          <button type="submit">Add Note</button>
        </form>
         <div className="note_list">
           <h2> Note List Daily </h2>
            <ul>
            {note.map(note=>(
              <li key={note}>
                <span>{note.title}</span>
                <button>Edit</button>
                <button>Delete</button>
              </li>
           
            ))}
            </ul>
            
         </div>
    </>
  )
}

export default App
