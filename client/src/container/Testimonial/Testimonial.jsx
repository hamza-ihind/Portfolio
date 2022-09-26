import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { AppWrap, MotionWrap } from '../../wrapper'
import './Testimonial.scss'
import { images } from '../../constants'

const testimonials = [
    { name: 'Ayoub Bahti', company: 'شركة القاضــي للميكة', imgUrl: images.bahti, feedback: 'Li derbna 9a3o Mayhemna Sda3o Li derbna 9a3o Mayhemna Sda3o Li derbna 9a3o Mayhemna Sda3o Li derbna 9a3o Mayhemna Sda3o' },
    { name: 'Hassan Elqadi', company: 'اللي عطا زكو لهلا يفكو', imgUrl: images.hassan, feedback: 'Li derbna 9a3o Mayhemna Sda3o Li derbna 9a3o Mayhemna Sda3o Li derbna 9a3o Mayhemna Sda3o Li derbna 9a3o Mayhemna Sda3o' }
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

                                <div className='app__testimonial-btns app__flex'>
                                    <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                                        <HiChevronRight />
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