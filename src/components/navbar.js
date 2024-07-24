import React, { useEffect } from "react";


export default function Header({ activePage }) {
    return (
        <div class="container">
            <div class="header__inner">
                <span class="logo__name">𝙳𝚑𝚊𝚗𝚞𝚜𝚑𝚔𝚞𝚖𝚊𝚛 𝚂𝚊𝚗𝚔𝚊𝚛</span>
                <div class="header__links">
                    <a href="/" className={`header__link ${activePage === 'home' ? 'header__link_active' : ''}`}>Home</a>
                    <a href="/projects" className={`header__link ${activePage === 'projects' ? 'header__link_active' : ''}`}>Projects</a>
                    <a href="/about" className={`header__link ${activePage === 'about' ? 'header__link_active' : ''}`}>About Me</a>
                    <a href="/contacts" className={`header__link ${activePage === 'contacts' ? 'header__link_active' : ''}`}>Contact Me</a>
                </div>
            </div>

        </div>
    )
}
