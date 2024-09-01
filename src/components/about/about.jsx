import './about.css';
import { RiMedal2Fill } from "react-icons/ri";
import { FaSuitcase } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiFilePaper2Line } from "react-icons/ri";

function About(){
    return(
        <>
            <div className="app__about">
                <div className="app__about_heading">
                    <h1>About Me</h1>
                    <h4>My introduction</h4>
                </div>
                <div className="app__about_box">
                    <div className="app__about_box-boxes">
                        <div>
                            <RiMedal2Fill style={{fontSize:30}}/>
                            <p>Experience</p>
                            <h4>1 + Years</h4>
                        </div>
                        <div>
                            <FaSuitcase style={{fontSize:30}}/>
                            <p>Completed</p>
                            <h4>10 + Projects</h4>
                        </div>
                        <div>
                            <TfiHeadphoneAlt style={{fontSize:30}}/>
                            <p>Support</p>
                            <h4>Online 24/7</h4>
                        </div>
                    </div>
                    <div className="app__about_box-paragraph">
                        <p>Hi there, I'm Daksh Malik, currently pursuing a degree in Information Science and Engineering (ISE) at MSRIT. I have a strong passion for frontend development, which involves designing and creating the visual aspects of websites and apps to make them user-friendly and engaging. I find joy in crafting interfaces that not only look appealing but also provide a seamless experience for users.</p><br/>
                        <p className="paragraph-hide">I'm enthusiastic about the chance to team up with others and combine our talents to build something truly remarkable. Let’s work together to make amazing things happen in the digital world!</p><br/>
                    </div>
                    <div className="app__about_box-button">
                        <button onClick={()=>alert("uploading soon")}>
                            <p>Download CV</p>  <RiFilePaper2Line style={{fontSize:20}}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;