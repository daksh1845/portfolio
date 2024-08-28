import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Navbar(){
    
    function handleMenu(){
        const x=document.querySelector(".app__nav-icon_list")
        x.style.display="flex"
        const y=document.querySelector(".menu")
        y.style.display="none"
    }
    
    function handleCross(){
        const x=document.querySelector(".app__nav-icon_list")
        x.style.display="none"
        const y=document.querySelector(".menu")
        y.style.display="flex"
    }

    const handleScroll1 = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 70,
            behavior: 'smooth'
        });
        const x=document.querySelector(".app__nav-icon_list")
        x.style.display="none"
        const y=document.querySelector(".menu")
        y.style.display="flex"
    };

    const handleScroll2 = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 880,
            behavior: 'smooth'
        });
        const x=document.querySelector(".app__nav-icon_list")
        x.style.display="none"
        const y=document.querySelector(".menu")
        y.style.display="flex"
    };

    const handleScroll3 = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 2030,
            behavior: 'smooth'
        });
        const x=document.querySelector(".app__nav-icon_list")
        x.style.display="none"
        const y=document.querySelector(".menu")
        y.style.display="flex"
    };

    const handleScroll4 = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 2650,
            behavior: 'smooth'
        });
        const x=document.querySelector(".app__nav-icon_list")
        x.style.display="none"
        const y=document.querySelector(".menu")
        y.style.display="flex"
    };

    const handleScroll5 = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        });
        const x=document.querySelector(".app__nav-icon_list")
        x.style.display="none"
        const y=document.querySelector(".menu")
        y.style.display="flex"
    };

    const handleScroll6 = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 1530,
            behavior: 'smooth'
        });
        const x=document.querySelector(".app__nav-icon_list")
        x.style.display="none"
        const y=document.querySelector(".menu")
        y.style.display="flex"
    };

    const handleScroll7 = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 2370,
            behavior: 'smooth'
        });
        const x=document.querySelector(".app__nav-icon_list")
        x.style.display="none"
        const y=document.querySelector(".menu")
        y.style.display="flex"
    };

    return(
        <>
            <nav className="inner__padding app__nav">
                <div className="app__nav-logo">Malik</div>
                
                <div className="app__nav-list">
                    <ul>
                        <li><a className="home">Home</a></li>
                        <li><a href="" onClick={handleScroll5}>About</a></li>
                        <li><a href="" onClick={handleScroll6}>Skills</a></li>
                        <li><a href="" onClick={handleScroll7}>Contact</a></li>
                    </ul>
                </div>
                
                <div className="app__nav-icon">
                    <GiHamburgerMenu fontSize={34} onClick={handleMenu}  className="menu"/>    
                    <div className="app__nav-icon_list">
                        <ImCross onClick={handleCross} color='white' className="cross"/>
                        <ul>
                            <li><a className="home" onClick={handleScroll1}>Home</a></li>
                            <li><a href="" onClick={handleScroll2}>About</a></li>
                            <li><a href="" onClick={handleScroll3}>Skills</a></li>
                            <li><a href="" onClick={handleScroll4}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;