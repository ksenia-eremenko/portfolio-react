import React from 'react'

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="block-title">- CONTACTS</div>
      <div className="in">
        <div className="left">
      <div className="block-subtitle">Get in touch</div>
          <div className="text-in">
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me.</p>
            <h6><a href="mailto:ksushaa19@gmail.com">ksushaa19@gmail.com</a></h6>
            <h6>Kiev, Ukraine</h6>
          </div>
        </div>
        <form className="right form-style">
          <div className="f-item">
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div className="f-item">
            <input type="text" name="email" placeholder="Your email" />
          </div>
          <div className="f-item">
            <textarea name="text" placeholder="Write something.."></textarea>
          </div>
          <div className="f-item">
            <button className="styled-btn styled-btn-1">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts