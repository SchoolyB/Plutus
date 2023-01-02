import React from 'react'

export default function Contact() {
  return (
    <div id='contactFormContainer'>
      <h1>
      Contact Me
      </h1>

      <div id="contactForm">
        <form action="https://formspree.io/f/mknelldn" method='POST'>
          <label>Name
            <input placeholder='Enter your name'></input>
          </label>
          
          <label>Email
            <input placeholder='Enter your email'></input>
          </label>

          <textarea placeholder='Leave us your feedback'></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>

    </div>
  )
}
