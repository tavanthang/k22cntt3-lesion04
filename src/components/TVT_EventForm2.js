import React from 'react'

export default function TVT_EventForm2() {

    const eventHandleClick1 = (content)=>{
        console.log('===================================');
        console.log(content);
        console.log('===================================');
    }
  return (
    <div className='alert alert-success'>
      <h2>Event Demo - Function Component</h2>
      <button onClick={eventHandleClick1("nguyen le duc thanh")}>Goi khi render</button>
      <button onClick={()=>eventHandleClick1("K22CNT3-ReactJs")}>Goi khi click</button>
    </div>
  )
}