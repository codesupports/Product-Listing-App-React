import bagIcon from '../assets/bag.png'
import useToggleClass from '../customHooks/useToggleClass';

const Header = () => {
    const [toggleMenu] = useToggleClass() // CustomHooks

    return (
        <header className="app__header">
            <div className="app__header-container">
                <div className={`hamburger`} onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="app__logo">
                    <a href='#' title='VENIA'>VENIA</a>
                </div>
                <nav className="app__nav">
                    <ul>
                        <li><a href="#" className='active'>Home</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Smart Gear</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </nav>
                <div className="app__icon">

                    <span className="badge">10</span>
                    <img src={bagIcon} alt='cart' />
                </div>
            </div>
        </header>
    )
}

export default Header;