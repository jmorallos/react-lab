import "./index.css";

export function Footer() {
    return (
        <footer className="footer">
            <div className="links-container">
                <ul className="footer-links">
                    <li>
                        <a className="footer-links__link" href="#">About Us</a>
                    </li>

                    <li>
                        <a className="footer-links__link" href="#">Privacy Policy</a>
                    </li>

                    <li>
                        <a className="footer-links__link" href="#">Contact</a>
                    </li>
                </ul>

                <ul className="footer-links">
                    <li><a className="footer-links__link" href="#">Services</a></li>
                    <li><a className="footer-links__link" href="#">Pricing</a></li>
                    <li><a className="footer-links__link" href="#">Support</a></li>
                </ul>

                <ul className="footer-links">
                    <li><a className="footer-links__link" href="#">Privacy Policy</a></li>
                    <li><a className="footer-links__link" href="#">Terms of Service</a></li>
                    <li><a className="footer-links__link" href="#">Contact</a></li>
                </ul>
            </div>
            

            <p>© 2026 Jmorallos. All rights reserved.</p>


        </footer>
    );
}