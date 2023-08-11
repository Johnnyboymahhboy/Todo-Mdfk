import React, { useEffect, useState } from 'react'
import History from './History'




export default function Header() {
    const [data, setData] = useState([
      {firstname: "John", lastname: "Densing"},
      {firstname: "Ladyrule", lastname: "Gacuma"},
      {firstname: "Eddin", lastname: "Maccaya"},
      {firstname: "Jellyn", lastname: "Ang"}
    ])

  return (
   <>
    <History data={data}  />
   </>
  )
}
