import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { AppWrap, MotionWrap } from '../../wrapper'
import './Testimonial.scss'
import { images } from '../../constants'

const testimonials = [
    { name: 'Hassan Elqadi', company: 'Sissan', imgUrl: images.vue, feedback: 'Li derbna 9a3o Mayhemna Sda3o' },
    { name: 'AbdelHakim Sami', company: 'Chedadi', imgUrl: images.flutter, feedback: 'Li 3ta Zkko lhla yfkko' }
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
            {
                testimonials.length && (
                    <>
                        <div className='app__testimonial-item app__flex'>
                            <img src={test.imgUrl} alt="testimonial" />
                            <div className='app__testimonial-content'>
                                <p className='p-text'>
                                    {test.feedback}
                                </p>
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

                        <div className='app__testimonial-btns app__flex'>
                            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                                <HiChevronLeft />
                            </div>
                            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                                <HiChevronRight />
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