import React from 'react'
import './contact.css'
export default function contact() {
  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awesome">
                <span className='about_us'>Get in touch</span>
                <span className='shady'>Contact Me</span>
            </div>
            <div className='blur s-blurl' style={{background: "#ABF1FF94"}}></div>
        </div>
        <div className="c-right">
            <form>
                <input type="text" name="user_name" className="user" placeholder="Name"/>
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" value="Send" className="buttonj"/>
                <div
                className='blur c-blur'
                style={{background: "purple"}}
                ></div>
            </form>
        </div>
    </div>
  )
}
