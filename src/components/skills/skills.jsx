import './skills.css';
import { MdVerified } from "react-icons/md";

function Skills(){
    return(
        <>
            <div className="app__skills">
                <div className="app__skills-heading">
                    <h1>Skills</h1>
                    <h4>My technical level</h4>
                </div>
                <div className="app__skills-box">
                    <p className="app__skills-box_heading">Frontend developer</p>
                    <div className="app__skills-box_values">
                        <div className="values">
                            <div className='values_1'>
                                <div className='values_11'><MdVerified/></div>
                                <div className='values_12'>HTML</div>
                            </div>
                            <div className='values_2'>Basic</div>
                        </div>
                        
                        <div className="values">
                            <div className='values_1'>
                                <div className='values_11'><MdVerified/></div>
                                <div className='values_12'>Git</div>
                            </div>
                            <div className='values_2'>Intermediate</div>
                        </div>
                        
                        <div className="values">
                            <div className='values_1'>
                                <div className='values_11'><MdVerified/></div>
                                <div className='values_12'>CSS</div>
                            </div>
                            <div className='values_2'>Advanced</div>
                        </div>
                        
                        <div className="values">
                            <div className='values_1'>
                                <div className='values_11'><MdVerified/></div>
                                <div className='values_12'>React</div>
                            </div>
                            <div className='values_2'>Intermediate</div>
                        </div>
                        
                        <div className="values five">
                            <div className='values_1'>
                                <div className='values_11'><MdVerified/></div>
                                <div className='values_12'>JavaScript</div>
                            </div>
                            <div className='values_2'>Intermediate</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills