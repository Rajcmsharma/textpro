import React, { useRef } from 'react';
import Nav from './Nav';
import emailjs from '@emailjs/browser';

function About() {

  let form = useRef();
  //  function run on submit of form 
  const sendEmail = (e) => {
    e.preventDefault();
    //visit email.js for getting all this and make register on that its free
    emailjs.sendForm('your service id ', 'your template id', form.current, 'public url')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  //  return data by react function component
  return (

    <div className="About">
      <Nav />
      <h2>About Me</h2>
      <p>Welcome to my digital world!</p>

      <p>I'm a passionate and dedicated individual who wears many hats: developer, designer, and dreamer. This app is the result of countless hours of hard work, fueled by my love for technology and creativity.</p>

      <p>So, who am I? I'm just a regular person who decided to take a leap into the world of software development. With a background in computer science and a deep curiosity about how things work, I embarked on this solo journey to bring my ideas to life.</p>

      <p>My mission is crystal clear: to make your digital life more convenient, efficient, and enjoyable. From the simplest text utilities to the most ambitious features, I'm committed to creating solutions that cater to your everyday needs.</p>

      <p>Your input is not only valuable; it's the cornerstone of my work. As a solo developer, your feedback is my guiding light. I rely on your insights to fine-tune my creations and ensure they meet your expectations.</p>

      <p>While I might be a one-person team, I don't shy away from embracing cutting-edge technologies. I'm always on the lookout for the latest trends and innovations, incorporating them into my projects to provide you with the best possible experiences.</p>

      <p>My journey is an ever-evolving one. I'm committed to constant improvement, which means that this app will continue to grow and adapt. Technology is a dynamic field, and I'm excited to explore its limitless potential with you.</p>

      <p>Thank you for choosing my creations. Your support means the world to me. Together, we'll navigate the ever-changing landscape of technology, pushing boundaries and making our digital world a better place.</p>

      <p>If you have any questions, suggestions, or just want to chat, please don't hesitate to <button type='button' className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">
        get in touch with me
      </button>. Your voice shapes the future of this app, and I'm always eager to hear from you.</p>

      <p>Stay curious, stay innovative, and let's continue this incredible journey together!</p>

      {/* modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Feedback</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" >
              <form className="row g-3" ref={form}>
              <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name='user_name'/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">Email</label>
                  <input type="email" name='user_email' className="form-control" id="inputEmail4"/>
                </div>
                
                <div className="col-12">
                  <label htmlFor="idea" className="form-label">Feedback And Suggestion</label>
                  <textarea rows={10} className="form-control" id="idea" placeholder="give your feedback here" name='message'/>
                </div>
                
               
               
                
               
               
              </form>
            </div>
            <div className="modal-footer">
              
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={sendEmail}>Send Mail</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal end */}





    </div>
  );
}

export default About;
