"use client";
import { MdOutlineErrorOutline } from "react-icons/md";
import Alert from 'react-bootstrap/Alert';
export default function Notfound() {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center w-100 flex-column'>
        <Alert variant='secondary' className='w-75 d-flex align-items-center '>
          <MdOutlineErrorOutline />404 Page Not Found
        </Alert>
        </div>
  )
}
