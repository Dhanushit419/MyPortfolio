import React, { useEffect, useState } from 'react'
import Header from '../components/navbar'
import SideBar from '../components/side-bar'
import Footer from '../components/footer'

export default function Projects() {
    return (
        <div>
            <Header activePage="projects" />
            <SideBar></SideBar>
            <Footer></Footer>
        </div>
    )
}