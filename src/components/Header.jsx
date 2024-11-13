import bagIcon from '../assets/bag.png'
import useToggleClass from '../customHooks/useToggleClass';

const Header = () => {
    const [toggleMenu] = useToggleClass() // CustomHooks

    return (
        <header className="app__header" role="top Banner">
            <div className="app__header-container">
                <div className={`hamburger`} onClick={toggleMenu}>
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                </div>
                <div className="app__logo">
                    <a href='#' title='VENIA' aria-label="Go to Home">VENIA</a>
                </div>
                <nav className="app__nav" role='navigation' aria-label='Main Navigation'>
                    <ul>
                        <li><a href="#" className='active' accessKey='H' aria-label='Go to Home'>Home</a></li>
                        <li><a href="#" aria-label='Women'>Women</a></li>
                        <li><a href="#" aria-label='Men'>Men</a></li>
                        <li><a href="#" aria-label='Women'>Smart Gear</a></li>
                        <li><a href="#" aria-label='Accessories'>Accessories</a></li>
                    </ul>
                </nav>
                <div className="app__icon" role="Button Link" aria-label='Count of Items' tabIndex={"0"}>
                    <span className="badge" aria-label='10 Items in Cart'>10</span>
                    <img src={bagIcon} alt='cart' />
                </div>
            </div>
        </header>
    )
}

export default Header;