import React from 'react'
import './Work.css'
import theme from '../../assets/theme.svg'
import Work_Img from '../../assets/mywork'
import arrow from '../../assets/arrow.svg'

const Work = () => {
    return (
        <div className='work-section' id='work'>
            <div className="title">
                <h1>My Latest Work</h1>
                <img src={theme} alt='theme'/>
            </div>
            <div className="work">
                {Work_Img.map((w, index) => {
                    return <img src={w.work_img} alt='work-img' key={index} />
                })}
            </div>
            <div className="show_more">
                <p>Show More</p>
                <img src={arrow} alt='arrow' />
            </div>
        </div>
    )
}

export default Work
