import React, { useEffect, useState } from 'react'
import Header from '../components/navbar'
import Footer from '../components/footer'

export default function AboutMe() {
    return (
        <div>
            <Header activePage="contacts" />
            <div>
                <h1>Contact</h1>
            </div>
            <Footer></Footer>
        </div>
    )
}