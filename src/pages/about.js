import React, { useEffect, useState } from 'react'
import Header from '../components/navbar'
import SideBar from '../components/side-bar'
import '../styles/about.css'
import Footer from '../components/footer'
import ProjectsSection from '../components/project'
import Person from '../images/person.png'
import AU from '../images/3.jpg'
export default function AboutMe() {
    return (
        <div style={{ backgroundColor: 'gainsboro' }}>
            <Header activePage="about" />
            <SideBar></SideBar>
            <div className='head-about'>


                <div className='main-about'>
                    <div className="intro-section">
                        <h1>So, who am I?</h1>
                        <p>
                            <span style={{ display: "none", marginRight: "20px" }}>________</span>
                            I’m Dhanushkumar, a passionate full-stack developer
                            in my final year at the <i>College of Engineering, Guindy</i>.
                            Driven by curiosity and a commitment to impactful solutions,
                            I specialize in both front-end and back-end technologies.
                            My projects majorly range from ReactWeb Application to Mobile Apps.
                            As the <i>General Secretary</i> of the NSS Unit 11, I’ve also
                            led community initiatives.Currently Im expanding my wings on Data Structures and Algorithms
                        </p>
                    </div>
                    <div className="image-section">
                        <img src={Person} alt="Dhanushkumar" />
                    </div>
                </div>
                <div className='section-title'>
                    <h2>Educational Background</h2>
                </div>

                <div className='edu-main'>
                    <div className='edu-main1'>
                        <div className='edu-main1-img-card'><img src={AU} /></div>
                    </div>
                    <div className='edu-main2'>
                        <p>Currently, I am in my final year at the prestigious College of Engineering, Guindy. My academic journey has equipped me with a solid foundation in both theoretical and practical aspects of Information Technology.</p>
                    </div>
                </div>

                <div className='section-title'>
                    <h2>Projects</h2>
                </div>

                <ProjectsSection />

                <div className='section-title'>
                    <h2>Skills</h2>
                </div>

                <div className='section-title'>
                    <h2>Leadership</h2>
                </div>



                <div>
                    {/* title component for title */}
                    {/* separate divs for Educational Background:

                projjects
                skills leadership and closing */}
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}