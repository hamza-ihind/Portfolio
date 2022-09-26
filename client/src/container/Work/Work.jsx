import { useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'
import './Work.scss'

const works = [
    { title: 'Analog Clock', description: 'Analog Clock made with HTML CSS JS, to test my UI design skills, and it was my first project ever made with Vanilla JavaScript', tags: ["UI/UX", "All"], imgUrl: images.clock, codeLink: "https://github.com/hamza-ihind/Analog-Clock" },
    { title: 'Todoist Clone', description: 'Clone of Todoist made with React.js (unit and Integration testing) and Firebase, and using Sass', tags: ["Web Apps", "All"], imgUrl: images.todoist, codeLink: "https://github.com/hamza-ihind/Todoist-clone/tree/master/todoist-clone" },
    { title: 'ENSA Agadir Website', description: 'ENSA Agadir\'s (My School) Website, made with React.js and Sass, main Goal is to show some UI/UX design skills.', tags: ["UI/UX", "All"], imgUrl: images.ensa, codeLink: "https://github.com/hamza-ihind/ENSA" },

]

const Work = () => {

    const [activeFilter, setActiveFilter] = useState("all")
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
    const [filterWork, setFilterWork] = useState([])

    const handleWorkFilter = (item) => {
        setActiveFilter(item)
        setAnimateCard([{ y: 100, opacity: 0 }])

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === "All") setFilterWork(works)
            else setFilterWork(works.filter((work) => work.tags.includes(item)));
        }, 400);
    }

    return (
        <>
            <h2 className='head-text'> my projects <span> Portfolio </span></h2>

            <img src={images.pattern} alt="pattern" className='pattern' />
            <img src={images.pattern} alt="pattern" className='pattern-rotated' />

            <div className='app__work-filter'>
                {['UI/UX', 'Web Apps', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.4, delayChildren: 0.4 }}
                className='app__work-portfolio'
            >
                {filterWork.map((work, index) => (
                    <div className='app__work-item app__flex' key={index}>
                        <div className='app__work-img app_flex'>
                            <img src={work.imgUrl} alt={work.name} />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href={work.codeLink} >
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className='bold-text'>{work.title}</h4>
                            <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>
                            <div className='app__work-tag app__flex'>
                                <p className='p-text'>{work.tags[0]}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Work, 'app__work'),
    'work',
    'app__primarybg'
)