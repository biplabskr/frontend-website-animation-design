import React from 'react'
import "./WebsiteAni.css"
import astro from '../src/images/astro.png'
import Typed from 'typed.js';

export default function WebsiteAni() {

    React.useEffect(() => {
        const typed = new Typed(".chnge", {
            strings: ['great', 'gentle'],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div className='main'>

            <div className='low'></div>

            <div className='middle'>
                <div class="night-sky">
                    <div class="shooting-stars">
                    </div>
                </div>
            </div>

            <div className='top'>
                <img src={astro}
                    alt="" class="src" />
            </div>

            <div className='work'>

                <div className='container'>

                    <div className='navbar'>

                        <div className='logo'>
                            <h1>biplab sarkar</h1>
                        </div>

                        <div className='menu-list'>
                            <ul>
                                <li>
                                    <span className='span1'></span>
                                    <span className='span2'></span>
                                    <a>Home</a>
                                </li>
                                <li>
                                    <span className='span1'></span>
                                    <span className='span2'></span><a>Contact</a></li>
                                <li>
                                    <span className='span1'></span>
                                    <span className='span2'></span><a>About us</a></li>
                                <li>
                                    <span className='span1'></span>
                                    <span className='span2'></span><a>Labs</a></li>
                            </ul>
                        </div>

                        <div className='buttons'>
                            <button className='btns'>Login</button>
                            <button className='btns'>Sign up</button>
                        </div>

                    </div>

                    <div className='hero'>

                        <div className='left-hero'>

                            <div><h3> God is <span className='chnge'></span></h3></div>
                            <p>Lorem ipsum may be attributed to an unknown typesetter in the
                                15th century. It's thought that the typesetter scrambled
                                parts of Cicero's De Finibus Bonorum et Malorum for use in a
                                type specimen book.
                            </p>
                            <button>Explore now</button>


                        </div>

                        <div className='right-hero'>
                            <div className="login">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <form className='form'>
                                    <div class="form-example">
                                        <h4>Email: </h4>
                                        <input type="text" name="name" id="name" required />
                                    </div>
                                    <div class="form-example">
                                        <h4>Password: </h4>
                                        <input type="password" name="password" id="email" required />
                                    </div>
                                    <div class="form-example2">
                                        <input type="submit" value="Login" />
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
