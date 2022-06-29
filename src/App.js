import React ,{useState} from "react" ;
import Header from "./comonents/Header";
import Footer from "./comonents/Footer";
import Note from "./comonents/Note";  
import notes from './Notes';
import Addnote from "./comonents/Addnote"


function App (){
   const[nots,setNotes] = useState([]);
function addIt(newNote){
  setNotes(prevNote=>{
     return [...prevNote,newNote]
  })
}
function deleteNote(id) {
   setNotes(prevNotes => {
     return prevNotes.filter((noteItem, index) => {
       return index !== id;
     });
   });
 }

  return <div>
   <Header/>
   <Addnote 
      onAdd = {addIt}
   />
   {nots.map ((noteItems,index) =>(
<Note key ={index} id ={index} title = {noteItems.title} content={noteItems.content} onDelete = {deleteNote}/>
   ))}
    
   <Footer/>
    </div>
}
export default App;
