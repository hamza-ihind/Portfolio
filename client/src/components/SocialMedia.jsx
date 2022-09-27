import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='app__social' style={{ zIndex: 10 }}>
            <div >
                <a href="https://twitter.com/HamzaIhind">
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href='https://www.facebook.com/nomap.ihind03'>
                    <FaFacebookF />
                </a>
            </div>
            <div>
                <a href='https://www.instagram.com/e11even.js/'>
                    <BsInstagram />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia