import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import './Skills.scss'
import { images } from '../../constants'

const skills = [
    { name: 'React', bgColor: '#edf2f8', icon: images.react },
    { name: 'Node', bgColor: '#edf2f8', icon: images.node },
    { name: 'SASS', bgColor: '#edf2f8', icon: images.sass },
    { name: 'Git', bgColor: '#edf2f8', icon: images.git },
    { name: 'GraphQL', bgColor: '#edf2f8', icon: images.graphql },
    { name: 'Python', bgColor: '#edf2f8', icon: images.python },
    { name: 'C++', bgColor: '#edf2f8', icon: images.cpp },
    { name: 'CSS', bgColor: '#edf2f8', icon: images.css },
    { name: 'Figma', bgColor: '#edf2f8', icon: images.figma },
    { name: 'HTML', bgColor: '#edf2f8', icon: images.html },
    { name: 'JavaScript', bgColor: '#edf2f8', icon: images.javascript },
    { name: 'Redux', bgColor: '#edf2f8', icon: images.redux },

]

const experiences = [
    {
        year: 2019,
        works: [{
            name: 'Games Developer',
            company: 'part-time',
            desc: 'I worked as a Games developer with C#, and Unity Engine'
        },
        {
            name: 'Python',
            company: 'self-employed',
            desc: 'I worked with Java on Algorithms and solving Problems'
        }]
    },
    {
        year: 2021,
        works: [{
            name: 'Web Developer',
            company: 'self-employed',
            desc: 'I worked as a Web developer with HTML, CSS and JavaScript'
        }]
    },
    {
        year: 2022,
        works: [{
            name: 'React Developer',
            company: 'part-time',
            desc: 'I worked as a React developer'
        }]
    }
]

const Skills = () => {
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
                                <p className="bold-text"> • {experience.year}</p>
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

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg'
)