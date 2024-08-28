import './contact.css';
import { RiMailSendLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';

function Contact(){
    
    const [inputValue1, setInputValue1] = useState("")
    const [inputValue2, setInputValue2] = useState("")
    const [inputValue3, setInputValue3] = useState("")

    return(
        <>

            <div className="app__contact">
                <div className="app__contact-heading">
                    <h1>Contact Us</h1>
                    <h4>Get in touch</h4>
                </div>
                <div className="app__contact-box">
                    <div className="app__contact-box_chat">
                        <h1>Talk to me</h1>
                        <div className="chat-boxes">
                            <div>
                                <RiMailSendLine fontSize={25}/>
                                <p className="p1">Email</p>
                                <p className="p2">user@gmail.com</p>
                                <p className="p31"><p><a href="mailto:1ms23is036@msrit.edu">Write me</a></p> <FaArrowRight/></p>
                            </div>
                            <div>
                                <FaWhatsapp fontSize={25}/>
                                <p className="p1">Whatsapp</p>
                                <p className="p2">999-888-777</p>
                                <p className="p32"><p><a href="https://wa.me/9216150413" target="_blank">Write me</a></p> <FaArrowRight/></p>
                            </div>
                        </div>
                    </div>

                    <div className="app__contact-box_project">
                        <h1>Write me your project</h1>
                        <div className="project">
                            <div className="project_box">
                                <p>Name</p>
                                <input placeholder="Insert your name" value={inputValue1} onChange={(e)=>setInputValue1(e.target.value)}/>
                            </div>
                            <div className="project_box">
                                <p>Mail</p>
                                <input placeholder="Insert your email" value={inputValue2} onChange={(e)=>setInputValue2(e.target.value)}/>
                            </div>
                            <div className="project_box project_box-detail">
                                <p>Project</p>
                                <input placeholder="Write your project" value={inputValue3} onChange={(e)=>setInputValue3(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>{setInputValue1("");setInputValue2("");setInputValue3("")}}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact