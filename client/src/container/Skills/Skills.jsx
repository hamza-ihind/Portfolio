import { useState, useEffect } from 'react'
import ReactTooltip from 'react-tooltip'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import './Skills.scss'
import { images } from '../../constants'

const skills = [
    { name: 'react', bgColor: '', icon: images.react },
    { name: 'node', bgColor: '', icon: images.node },
    { name: 'sass', bgColor: '', icon: images.sass },
    { name: 'git', bgColor: '', icon: images.git },
    { name: 'graphql', bgColor: '', icon: images.graphql },
    { name: 'python', bgColor: '', icon: images.python }
]

const experiences = [
    {
        year: 2021,
        works: [{
            name: 'Web Developer',
            company: 'self-employed',
            desc: 'I worked as a Web developer with HTML, CSS and JavaScript'
        }]
    },
]

const Skills = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <h2 className='head-text'>
                <span>Skills</span> & <span>Experience</span>
            </h2>

            <div className='app__skills-container'>

                <motion.div className='app__skills-list'>
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className='app__skills-item app__flex'
                            key={skill.name}
                        >
                            <div className='app_flex' style={{ backgroundColor: skill.bgColor }}>
                                <img src={skill.icon} alt={skill.name} />
                            </div>

                            <p className='p-text'>{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>

                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                            {show && <ReactTooltip
                                                id={work.name}
                                                effect="solid"
                                                arrowColor="black"
                                                className="skills-tooltip"

                                            >
                                                <p
                                                    onMouseEnter={setShow(false)}
                                                    onMouseLeave={setShow(true)}
                                                >
                                                    {work.desc}
                                                </p>
                                            </ReactTooltip>}
                                        </motion.div>

                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default AppWrap(Skills, 'skills')