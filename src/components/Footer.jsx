import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

const Footer = () => {
    return (
        <footer role='contentinfo'>
            <div className="footer__links">
                <div className="footer__block">
                    <ul aria-labelledby='account'>
                        <li id="account">Account</li>
                        <li><a href="#" title='Sign In'>Sign In</a></li>
                        <li><a href="#" title='Register'>Register</a></li>
                        <li><a href="#" title='Order Status'>Order Status</a></li>
                    </ul>
                    <ul aria-labelledby='aboutus'>
                        <li id='aboutus' >About Us</li>
                        <li><a href="#" title='Our Story'>Our Story</a></li>
                        <li><a href="#" title='Carees'>Carees</a></li>
                    </ul>
                    <ul aria-labelledby='help'>
                        <li id='help'>Help</li>
                        <li><a href="#" title='Contact US'>Contact US</a></li>
                        <li><a href="#" title='Order Status'>Order Status</a></li>
                        <li><a href="#" title='Return'>Return</a></li>
                    </ul>
                    <ul aria-labelledby='follow-us'>
                        <li id="follow-us">Follow Us!</li>
                        <li aria-label='How to follow social media'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vel eaque eum! Consequuntur consequatur </li>
                        <li>
                            <ul>
                                <li><a href="#" title="Follow us on instagram" aria-label="instagram"><img src={instagram} alt='instagram logo' /></a></li>
                                <li><a href="#" title="Follow us on Facebook" aria-label="Facebook"><img src={facebook} alt='Facebook logo' /></a></li>
                                <li><a href="#" title="Follow us on twitter" aria-label="twitter"><img src={twitter} alt='twitter logo' /></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <div><a href="#" title="VENIA" aria-label="Go to Home">VENIA</a></div>
                <div aria-label='Copywrite Name'>© Company Name Address Ave, City Name, State ZIP</div>
                <div>
                    <a href="#" aria-label="Learn about Terms of Use">Terms of Use</a>
                    <a href="#" aria-label="Learn about Privacy Policy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;