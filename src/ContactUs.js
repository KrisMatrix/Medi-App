import './ContactUs.css';

function ContactUs() {
  function tempDisplay() {
    alert("Still need to do Backend!");
  }

  return (
    <div className="contact-page">
      <div className="contact-block">
        <form method="POST" action="">

          <label htmlFor="name">Name:</label><br/>
          <input type="text" id="name" name="name"/><br/>

          <label htmlFor="e-mail">E-mail:</label><br/>
          <input type="text" id="e-mail" name="e-mail"/><br/>
          
          <label htmlFor="subject">Subject:</label><br/>
          <input type="text" id="subject" name="subject"/><br/>
          
          <label htmlFor="message">Message:</label><br/>
          <textarea id="message" name="message" rows="5" cols="50" 
            defaultValue="Place holder text ..">
          </textarea>

          <b>Captcha:</b><span>Captcha No.</span><br/>

          <label htmlFor="enter_captcha">Enter Captcha:</label><br/>
          <input type="text" id="enter_captcha" name="enter_captcha"/><br />

          <button onClick={tempDisplay}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
