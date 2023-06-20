import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'


  const view = ({note,deletenotes}) => {
   
    return  note.map(notes=>(
    <tr key={notes.isbn}>
      <td>{notes.isbn}</td>
      <td>{notes.title}</td>
      <td>{notes.description}</td>
      <td className='delete-btn' onClick={()=>deletenotes(notes.isbn)}>
                <Icon icon={trash}/>
            </td> 
    </tr>
  ))

 }
 export default view;
 

