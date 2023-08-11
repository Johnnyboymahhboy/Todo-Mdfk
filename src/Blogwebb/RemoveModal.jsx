import React from 'react'
import { MdClose } from 'react-icons/md';
export default function RemoveModal({Remove, CsloseBtn}) {



  return (
    <>
  
     

    <div className='Wholeformat'>
       <div className='Modal'>
          <p>Are you sure you want to remove this shit?</p>
          <div >
              <button className='modalYesBtn' onClick={Remove}>Yes</button>
              <button className='modalNoBtn' onClick={CsloseBtn}>No</button>
          </div>
       </div>
    </div>

    </>
  )
}
