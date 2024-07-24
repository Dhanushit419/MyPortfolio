import React, { useEffect } from "react";
import GitIcon from '../images/icons/github.png';
import Icon from '../images/icons/leetcode.png';
import LinkedInIcon from '../images/icons/linkedin.png';
import Mail from '../images/icons/mail.png';
import GFG from '../images/icons/gfg1.png';

export default function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const mediaHeader = document.querySelector('.media-header');
            const mediaHeader_links = document.querySelector('.media-header__links');
            const scrollPosition = window.scrollY;

            if (scrollPosition > 50) {
                mediaHeader.style.top = '20%';
                mediaHeader_links.style.gap = '40px';
            }
            else if (scrollPosition > 35) {
                mediaHeader.style.top = '22%';
                mediaHeader_links.style.gap = '37px';
            }
            else if (scrollPosition > 20) {
                mediaHeader.style.top = '23%';
                mediaHeader_links.style.gap = '35px';
            }
            else if (scrollPosition > 10) {
                mediaHeader.style.top = '24%';
                mediaHeader_links.style.gap = '25px';
            }
            else {
                mediaHeader.style.top = '25%';
                mediaHeader_links.style.gap = '20px';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="header">
            <div class="media-header">
                <div class="media-header__links">

                    <a href="https://www.linkedin.com/in/dhanushkumar-sankar-448a18270/" class="media" target="_blank">
                        <img src={LinkedInIcon} alt="linkedIn" class="media__icon" />
                    </a>
                    <a href="https://github.com/Dhanushit419" class="media" target="_blank">
                        <img src={GitIcon} alt="github" class="media__icon" />
                    </a>
                    <a href="https://leetcode.com/u/dhanushit419/" class="media" target="_blank">
                        <img src={Icon} alt="LeetCode" class="media__icon" />
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/dhanushit419/" class="media" target="_blank">
                        <img src={GFG} alt="Gfg" class="media__icon" />
                    </a>

                    <a href="mailto:dhanushit419@gmail.com" class="media" target="_blank">
                        <img src={Mail} alt="email" class="media__icon" />
                    </a>
                </div>
                <span class="media-header__line"></span>
            </div>
        </div>

    );
}