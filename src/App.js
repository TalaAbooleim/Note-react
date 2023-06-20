
import React from 'react'
import View from './view';
import { useState,useEffect} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const getdata=()=>{
  const data=localStorage.getItem('note')///iwill check 
  if (data){
    return JSON.parse(data)
  }
  else
  return []
}


export default function App() {
  const[note,setnote]=useState(getdata());
  const [isbn,setisbn]=useState('');
  const [title,settitle]=useState('');
  const [description,setdescription]=useState('');
  const[btnc,setbtn]=useState('');
  const handleAddsummit=(e)=>{
    e.preventDefault();
    let notes={
      isbn,
      title,
      description,
     
    }
    
    setnote([...note,notes])
    setisbn('')
    settitle('');
    setdescription('');
    

  }
  const deletenotes  =(isbn)=>{
    const filterednote=note.filter((element,index)=>{
      return element.isbn !== isbn
      

    })
    setnote(filterednote);
  }
  useEffect(()=>{
    localStorage.setItem('note',JSON.stringify(note))

  },[note])
  return (
    <div className='container'>
      
      <div className='notee'>
      <div className='note'>
        <h1>write  the note</h1>
      </div>
      <div className='flexnote'>
        <div className='formcontainer'> 
        <form className='form-group' onSubmit={handleAddsummit} >
         <label>
          number note
         </label>
         <br/>
         <input type='text' className='form-control' onChange={(e)=>setisbn(e.target.value)} value={isbn}></input>
         <br/>
         <br/>
          <label>
            Title
          </label>
          <br/>
          <input type='text' className='form-control' onChange={(e)=>settitle(e.target.value)} value={title}></input>
          <br/>
          <br/>
          <label>description</label>
          <br/>
          <input type='text'className='form-control'  onChange={(e)=> setdescription(e.target.value)} value={description}></input>
          <br/>
          <br/>
          <button className='add-btn' onChange={(e)=> setbtn(e.target.value)} value={btnc}>add note</button>
        </form>

        </div>
        <div className='formcontainer'>
          {note.length>0&&<>
          <div className='tabel-reponsive'>
            <table className='tabel'>
              <thead>
                <tr>
                <th className='tab'>number</th>
                  <th className='tab'>Title</th>
                  <th className='tab'>Description</th>
                  <th className='tab'>delete</th>
                  <th className='tab'>Edit</th>
                </tr>
              </thead>
              <tbody>
              <View note={note}deletenotes={deletenotes}/>
              {/* <| */}
              </tbody>
            </table>
          </div>
          </>}
          {note.length<1&&<div>the note not add yet</div>}
        </div>


      </div>
      </div>
    </div>
  )
}
