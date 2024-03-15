import React, { useState } from 'react';
import '../style/Conatct.scss';
import { Alert, Space, notification } from 'antd';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import contactUs from '../lottie/contact-me (1).json';
import ExternalLink from './ExternalLink'; // Assuming ExternalLink component is in ExternalLink.js

const ContactMe = () => {
  const [message, setMessage] = useState({ type: '', text: '' });
  const form = React.useRef();

  const openNotification = (placement) => {
    const api = notification.open({
      message: 'Call Me',
      description: 'Please dial +201099769993 to contact Me.',
      duration: 0,
      placement,
    });

    return api;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.elements.message.value.trim() === '') {
      setMessage({ type: 'error', text: 'Please type a message before sending' });
      return;
    }

    emailjs
      .sendForm('service_54pd4ca', 'template_yljez1f', form.current, {
        publicKey: '4ClDgDeFacpjk46d7',
      })
      .then(
        () => {
          setMessage({ type: 'success', text: 'Message sent successfully' });
        },
        () => {
          setMessage({ type: 'error', text: 'Failed to send message' });
        },
      );
  };

  const handleCallClick = () => {
    if (window.innerWidth >= 768) {
      openNotification('top');

    } else {
      window.location.href = 'tel:+201099769993';
    }
  };

  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-center contact mt-4'>
          <div>
            <h3>Contact Me</h3>
          </div>

        </div>
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <Lottie animationData={contactUs} className='style-contact' />
          </div>
          <div className="col-12 col-lg-6 login-high mt-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row p-5">
                <div className="col-12 mt-3">
                  {message.type && (
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Alert description={message.text} type={message.type} closable />
                    </Space>
                  )}
                </div>
                <div className="col-12 col-sm-6 col-md-6 mt-3">
                  <input type="text" className="form-control" placeholder="userName" name="user_name" />
                </div>
                <div className="col-12 col-sm-6 col-md-6 mt-3">
                  <input type="number" className="form-control" placeholder="phone number" name="user_number" />
                </div>
                <div className="col-12 mt-3">
                  <input type="email" className="form-control" placeholder="Email" name="user_email" />
                </div>
                <div className="col-12 mt-3">
                  <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="type your message here and our team will help you ASAP!" rows="3" name="message"></textarea>
                </div>
                <div className="col-12 mt-3 mb-3">
                  <button type="submit" className='btn-reg'>Send Message</button>
                  <div className='row'>
                    <div className="col-12 col-sm-4 col-md-4 mt-3">
                      <ExternalLink to={'https://www.linkedin.com/in/eyad-shawky-81a046204/'}>
                        <button className='btn-contact'>LinkedIn</button>
                      </ExternalLink>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 mt-3">
                      <ExternalLink to='https://github.com/EyadShawky'>
                        <button className='btn-contact'>GitHub</button>
                      </ExternalLink>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 mt-3">
                      <button className='btn-contact' onClick={handleCallClick}>WhatsApp / Call</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
