import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'testemonials', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    style={active === item ? { backgroundColor: "#313bac" } : {}}
                    key={item + index}
                    className="app__navigation-dot"
                />
            ))}
        </div>
    )
}

export default NavigationDots