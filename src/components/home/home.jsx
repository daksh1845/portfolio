import './home.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GiHand } from "react-icons/gi";
import { FaPaperPlane } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { LuRectangleVertical } from "react-icons/lu";
import face from '../../images/my-photo.jpg'

function Home(){

    const handleScroll = () => {
        window.scrollTo({
            top: 2650,
            behavior: 'smooth'
        });
    };

    return(
        <>
            <div className="app__home">
                <div className="app__home-container">
                    <div className="app__home-container_links">
                        <a href="https://x.com/coderdaksh" target=" "><FaXTwitter/></a>
                        <a href="https://www.linkedin.com/in/daksh-malik-6b6a7921a/" target=" "><FaLinkedin/></a>
                        <a href="https://github.com/daksh1845" target=" "><FiGithub/></a>
                    </div>
                    <div className="app__home-container_desc">
                        <h1 className="desc_heading">
                            Daksh Malik
                            <GiHand style={{color:'#FFBF00'}}/>
                        </h1>
                        <div className="desc_box">
                            <div className="desc_span"></div>
                            <div className="desc_line">Frontend Developer</div>
                        </div>
                        <div className="desc_desc">
                            I create responsive websites by turning designs into functional pages that look great and are easy to use on any device.
                        </div>
                        <div>
                            <button className="desc_button" onClick={handleScroll}>
                                <p>Say Hello</p>
                                <FaPaperPlane/>
                            </button>
                        </div>
                        <div className="scroll">
                            <div className="scroll_animate">
                                <div className="scroll_animate_div"></div>
                                <LuRectangleVertical style={{fontSize:'25px'}} className="scroll_animate_icon"/>
                            </div>
                            <p>Scroll down</p>
                            <FaArrowDown/>
                        </div>
                    </div>
                    <div className="app__home-container_img">
                        <img src={face}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;