import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import './Skills.scss'
import { images } from '../../constants'

const skills = [
    { name: 'React.js', bgColor: 'rgba(97, 219, 251, 0.1)', icon: images.react },
    { name: 'Node.js', bgColor: 'rgba(33, 170, 106, 0.1)', icon: images.node },
    { name: 'SASS', bgColor: 'rgba(240, 98, 146, 0.1)', icon: images.sass },
    { name: 'Git', bgColor: 'rgba(255, 86, 31, 0.1)', icon: images.git },
    { name: 'CSS', bgColor: 'rgba(2, 130, 201, 0.1)', icon: images.css },
    { name: 'GraphQL', bgColor: 'rgba(251, 105, 157, 0.1)', icon: images.graphql },
    { name: 'Python', bgColor: 'rgba(255, 193, 7, 0.1)', icon: images.python },
    { name: 'C++', bgColor: 'rgba(1, 84, 157, 0.1)', icon: images.cpp },
    { name: 'Figma', bgColor: 'rgba(95, 113, 97, 0.1)', icon: images.figma },
    { name: 'HTML', bgColor: 'rgba(250, 103, 0, 0.1)', icon: images.html },
    { name: 'JavaScript', bgColor: 'rgba(255, 214, 0, 0.1)', icon: images.javascript },
    { name: 'Redux', bgColor: 'rgba(134, 94, 191, 0.1)', icon: images.redux },
    { name: 'C#', bgColor: 'rgb(71, 1, 55, 0.1)', icon: images.csharp },
    { name: 'Adobe XD', bgColor: 'rgba(71, 1, 55, 0.2)', icon: images.xd },
    { name: 'Vue.js', bgColor: 'rgba(80, 111, 105, 0.2)', icon: images.vue },

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

            <img src={images.pattern} alt="pattern" className='pattern' />
            <img src={images.pattern} alt="pattern" className='pattern-rotated' />

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