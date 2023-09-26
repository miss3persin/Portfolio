import { useState } from 'react';
import '../styles/Form.css'
import emailjs from 'emailjs-com';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
        'service_ljsosnj', 
        'template_zfz03fb',
        {
          to_email: 'victor.segunigebello@gmail.com', // Replace with the recipient's email
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'X0mXaI2H2EFOFMtiI'
      )
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='name-input'>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className='email-input'>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className='message-input'>
        <label htmlFor="message">Message: </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className='custom-area'
        />
      </div>
        <div>
            <div>
                {/* <a href=""><FontAwesomeIcon icon={faInstagram} /></a> */}
            </div>
      <button type="submit" className="send-btn hoverable" >SEND</button>
        </div>
    </form>
  );
};

export default Form;
