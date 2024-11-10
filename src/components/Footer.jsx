import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer__links">
                <div className="footer__block">
                    <ul>
                        <li>Acount</li>
                        <li><a href="#">Sign In</a></li>
                        <li><a href="#">Sign In</a></li>
                        <li><a href="#">Sign In</a></li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Carees</a></li>
                    </ul>
                    <ul>
                        <li>Help</li>
                        <li><a href="#">Contact US</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Return</a></li>
                    </ul>
                    <ul>
                        <li>Follow Us!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vel eaque eum! Consequuntur consequatur </li>
                        <li>
                            <ul>
                                <li><a href="#"><img src={instagram} alt='' /></a></li>
                                <li><a href="#"><img src={facebook} alt='' /></a></li>
                                <li><a href="#"><img src={twitter} alt='' /></a></li>

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <div>VENIA</div>
                <div>© Company Name Address Ave, City Name, State ZIP</div>
                <div>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;