"use client";
import  Button  from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { MdOutlineErrorOutline } from "react-icons/md";

export default function Error({reset}) {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center w-100 flex-column'>
        <Alert variant='danger' className='w-75 d-flex align-items-center '>
          <MdOutlineErrorOutline />Cant Fetch Posts Data
        </Alert>
        <Button variant='danger' onClick={()=> reset()}>Re-try</Button>
        </div>
  )
}
