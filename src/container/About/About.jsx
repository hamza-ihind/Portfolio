// import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import './About.scss'
// import { urlFor, client } from '../../client'
import { images } from '../../constants'

// Temporary DataBase
const abouts = [
    { title: 'Front-End Developer', description: 'I am a Front-End Developer with a full understanding of the web development process from inception to deployment..', imgUrl: images.reactjs },
    { title: 'Back-End Developer', description: 'I am a Back-End Developer who tend to focus on smaller parts of the whole, such as applications and programs', imgUrl: images.nodejs },
    { title: 'UI/UX Designer', description: 'I am a UI/UX Designer, I create the user interface for an app, website, or other interactive media.', imgUrl: images.uiux }
]

const About = () => {

    return (
        <>
            <p className='p-text p-desc'>[ Who I am ?? ]</p>
            <h2 className='head-text'>
                a <span>Human-First</span>
                <br />
                a <span>Full-stack Web developer</span>
            </h2>

            <img src={images.pattern} alt="pattern" className='pattern' />
            <img src={images.pattern} alt="pattern" className='pattern-rotated' />

            <div className='app__flex'>
                <div className='app__profiles'>
                    {
                        abouts.map((about, index) => (
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.4, type: 'tween' }}
                                className='app__profile-item'
                                key={about.title + index}
                            >
                                <img src={about.imgUrl} alt={about.title} />

                                <h2 className='bold-text' style={{ marginTop: 20 }}>
                                    {about.title}
                                </h2>

                                <p className='p-text' style={{ marginTop: 10 }}>
                                    {about.description}
                                </p>

                            </motion.div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
)