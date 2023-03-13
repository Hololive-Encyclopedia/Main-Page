import React from "react";
import "../footer.css";
function Footer() {
    return (
        <footer className="hololive-footer">
            <div className="container">
                <p>&copy; 2023 Hololive Encyclopedia. All Rights Reserved.</p>
                <p>Made with React by <a href="https://www.example.com">Paris Shieh</a></p>
                <div className="contact">
                    <h3>Contact :</h3>
                    <a href="https://github.com/BangDonKiller">
                        <i className="fa fa-github"></i>
                    </a>
                    <i className="fa fa-envelope"></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;