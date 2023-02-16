import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { AppWrap, MotionWrap } from '../../wrapper'
import './Testimonial.scss'
import { images } from '../../constants'

const testimonials = [
    { name: 'Ayoub Bahti', company: 'CEO, Image Detailing Inc', imgUrl: images.bahti, feedback: 'Hamza has a keen eye for design, is a master of React & several other programming technologies, and has a creative/artistic way about him that allows him to use all of his skills in synergy to bring a project full circle and at the right price. I can’t say enough about Hamza. If my own mother asked me tomorrow who she should hire for a web project… Hamza is the guy I’d recommend… and without hesitation.' },
    { name: 'Hassan Elqadi', company: 'Media Manager, Carnoisseur Ltd', imgUrl: images.hassan, feedback: 'I was looking for a Web professional who would create and evolve my website. Hamza delivers exactly what I want. It’s always a pleasure working and seeing him. I enjoy meeting him as he lives locally and I always leave his place with a spring in my step and a smile on my face. I know he will keep improving my website and advising me in the best ways forward for years to come, with SEO and new features. I look forward to a great working relationship and friendship with him.' }
]

const brands = [
    { name: 'Adidas', imgUrl: images.adidas },
    { name: 'Asus', imgUrl: images.asus },
    { name: 'Amazon', imgUrl: images.amazon },
    { name: 'Skype', imgUrl: images.skype },
    { name: 'Bolt', imgUrl: images.bolt },
    { name: 'NB', imgUrl: images.nb },
    { name: 'Spotify', imgUrl: images.spotify },
]

const Testimonial = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const test = testimonials[currentIndex]

    const handleClick = (index) => {
        setCurrentIndex(index)
    }

    return (
        <>

            <img src={images.pattern} alt="pattern" className='pattern' />
            <img src={images.pattern} alt="pattern" className='pattern-rotated' />

            {
                testimonials.length && (
                    <>
                        <div className='app__testimonial-item app__flex'>

                            <img src={test.imgUrl} alt="testimonial" />

                            <div className='testimonial-container'>

                                <div className='app__testimonial-btns app__flex'>
                                    <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                                        <HiChevronLeft />
                                    </div>
                                    <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                                        <HiChevronRight />
                                    </div>
                                </div>

                                <div className='app__testimonial-content'>
                                    <p className='p-text'>
                                        {test.feedback}
                                    </p>
                                    <img src={images.quote} alt="Quote" className='quote-png' />
                                    <div>
                                        <h4 className='bold-text'>
                                            {test.name}
                                        </h4>
                                        <h5 className='p-text'>
                                            {test.company}
                                        </h5>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </>
                )
            }

            {/* <div className='app__testimonial-brands app__flex'>
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand.id}
                    >
                        <img src={brand.imgUrl} alt={brand.name} />
                    </motion.div>
                ))}
            </div> */}
        </>
    )
}

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonial',
    'app__primarybg'
)