import { useState } from 'react'
import emailjs from 'emailjs-com'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Footer.scss'

const Footer = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { name, email, message } = formData

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0vmxz31', 'template_nj8ljez', e.target, "fHv_1o66YkbGxmYrr").then(res => { console.log(res) }).catch((err) => console.log(err))
    }

    return (
        <>
            <h2 className='head-text title-text'><span>Take a coffee</span> & <span>Chat with me</span></h2>

            <img src={images.pattern} alt="pattern" className='pattern' />
            <img src={images.pattern} alt="pattern" className='pattern-rotated' />

            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt='email' />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ihind.mizo@gmail.com&su=SUBJECT&body=BODY" className='p-text'>
                        ihind.mizo@Gmail.com
                    </a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt='mobile' />
                    <a href="tel:+212621075329" className='p-text'>
                        +212 621-075329
                    </a>
                </div>
            </div>

            <form className='app__footer-form app__flex' onSubmit={handleSubmit}>
                <div className='app__flex'>
                    <input className='p-text' type='text' placeholder='Your name' value={name} onChange={handleChangeInput} name='name' />
                </div>
                <div className='app__flex'>
                    <input className='p-text' type='email' placeholder='Your Email' value={email} onChange={handleChangeInput} name='email' />
                </div>
                <div>
                    <textarea className='p-text' placeholder='Your message' value={message} name="message" onChange={handleChangeInput}></textarea>
                </div>
                <button type='submit' className='p-text' >
                    Send Message
                </button>
            </form>

            <div className='copyright'>
                <p className='p-text'> @2022 E11even </p>
                <p className='p-text'> All rights reserved </p>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)