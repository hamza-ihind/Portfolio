// import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import './About.scss'
// import { urlFor, client } from '../../client'
import { images } from '../../constants'

// Temporary DataBase
const abouts = [
    { title: 'Front-End Developer', description: 'I am a Front-End Developer.', imgUrl: images.reactjs },
    { title: 'Back-End Developer', description: 'I am a Back-End Developer.', imgUrl: images.nodejs },
    { title: 'UI/UX Designer', description: 'I am a UI/UX Designer.', imgUrl: images.uiux }
]

const About = () => {

    return (
        <>
            <h2 className='head-text'>
                I know that <span>Good Developement</span>
                <br />
                means <span>Good business</span>
            </h2>

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

        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
)