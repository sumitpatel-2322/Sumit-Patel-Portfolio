function Header(){
    return(
    <>
    <header className="m-0">
    <nav id="navbar" className="bg-dark-purple/90 content-center text-white rounded-xl m-0.5 p-4"> 
        <ul className="flex justify-evenly flex-wrap">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#projects">My projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    </header>
    </>
)
}
export default Header;