import React, { useState } from 'react'

export default function History({data}) {

  
 
  return (
    <div>
     {data.map(el => {
      return el.firstname
     })}
      
    </div>
  )
}
