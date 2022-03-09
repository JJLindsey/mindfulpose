import React from 'react'
import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs'
import logo from '../assets/images/icon64MP.png'

function Footer() {
    return (
        <footer class="d-flex justify-content-center mt-auto" id="footer">
            <div class="row" id="footer-row">
                <div class="col-md">
                    <img class="mb-2" src={logo} alt="logo" width="24" height="19"/>
                    <small class="d-block mb-3 text-muted">&copy; MindfulPose 2022</small>
                </div>
                <div class="col-md">
                    <h5>Contact</h5>
                    <ul class="list-unstyled text-small">
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#"><BsFacebook /></a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#"><BsInstagram/></a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#"><BsYoutube/></a></li>
                    </ul>
                </div>
                <div class="col-md">
                    <h5>About</h5>
                    <ul class="list-unstyled text-small">
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer