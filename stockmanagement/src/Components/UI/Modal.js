import React from 'react'
import  ReactDOM from 'react-dom'
import './Modal.css'

const Backdrop=props=>{
return <div> </div>
}

const Modaloverlay=props=>{
  return <div className='modal'>
    <div>{props.children}</div>
  </div>
}
const location=document.getElementById('overlays');


const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop/>,location)}
      {ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,location)}
    </React.Fragment>
  )
}

export default Modal