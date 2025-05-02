import React from 'react'
import "./style.css";

class Footer extends React.Component  {
  render() {
    return (
    <div className='container-footer'>
      <h4>World Beauty</h4>
      <div className='container-icons'>
        <i className="fa-brands fa-github fa-xl" style={{color: "#401D10"}}></i>
        <i className="fa-brands fa-instagram fa-xl" style={{color: "#401D10"}}></i>
        <i className="fa-brands fa-linkedin fa-xl" style={{color: "#401D10"}}></i>
        <i className="fa-brands fa-whatsapp fa-xl" style={{color: "#401D10"}}></i>
      </div>
      <p>Copyright© - 2025; Designed by Diego Castilho</p>
    </div>
    )
  }
}

export default Footer;