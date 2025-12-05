import Spinner from 'react-bootstrap/Spinner';


export default function Loading() {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
    <Spinner animation="border" variant="warning" />
    </div>
  )
}
