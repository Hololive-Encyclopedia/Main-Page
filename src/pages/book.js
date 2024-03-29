import React from "react";
import "../book.css";
// import yagoo from "../image/yagoo.jpg";
import IRyS from "../image/IRyS.jpg";
// import All from "../image/full.jpg";

export default function Book() {
    return (
        <div className='pages'>
            <input id='one' name='trigger' type='radio' />
                <input id='two' name='trigger' type='radio' />
                    <input id='three' name='trigger' type='radio' />
                        <input id='four' name='trigger' type='radio' />
                            <div className='pages_page'>
                                <div className='pages_page__inner'>
                                    {/* <img src={yagoo}/> */}
                                    {/* <div className='logo'>Fashion</div> */}
                                    <div className='pagenumber'>1 2</div>
                                    <div className='content'>
                                        <div className='content_center'>
                                            {/* <h4>The latest in fashion &amp; fashion design</h4> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pages_page'>
                                <div className='pages_page__inner'>
                                    <div className='content'>
                                        <div className='introduction'>
                                                <h1 className="intro-name">
                                                    Motoaki Tanigo<br/>
                                                    <span>- Also known as Yagoo and The best girl -</span>
                                                </h1>
                                            <div className="intro_list">
                                                <p>    He is the founder and CEO of COVER Corporation, <br/>
                                                a Japanese company that produces virtual YouTubers <br/>
                                                (VTubers) under the name Hololive Production. <br/></p>
                                                <p>   Yagoo was also recognized as one of Japan's Top 20 <br/>
                                                Entrepreneurs by Forbes Japan in January 2022.</p>
                                            </div>
                                            <div className="intro_links">
                                                <a href="https://www.youtube.com/@tanigox" className="youtube-link">
                                                    <i className="fa fa-youtube-play"></i>
                                                </a>
                                                <a href="https://twitter.com/tanigox" className="twitter-link">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                                <a href="https://www.instagram.com/tanigox/" className="instagram-link">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                                <a href="https://www.facebook.com/tanigo/" className="facebook-link">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </div>
                                            {/* <ul className="intro_list">
                                                <li >Motoaki Tanigo</li>
                                                <li>Career : CEO of the Hololive</li>
                                                <li>Nickname : Yagoo, the best girl</li>
                                                <li>Follow : 
                                                    <ul>
                                                        <li>Youtube Channel : <a href="https://www.youtube.com/@tanigox" className="youtube-link">Click me</a></li>
                                                        <li>Twitter : <a href="https://twitter.com/tanigox" className="twitter-link">Click me</a></li>
                                                        <li>Instagram : <a href="https://www.instagram.com/tanigox/" className="instagram-link">Click me</a></li>
                                                    </ul>
                                                </li>
                                            </ul> */}

                                        </div>
                                        {/* <div className='content_center right'>
                                            <h4>The latest in fashion &amp; fashion design</h4>
                                        </div> */}
                                        <div className='overlay'></div>
                                    </div>
                                    <div className='control next'>
                                        <label htmlFor='two'></label>
                                    </div>
                                </div>
                            </div>
                            <div className='pages_page'>
                                <div className='pages_page__inner'>
                                    {/* <div className='logo'>Fashion</div> */}
                                    <div className='pagenumber'>2 3</div>
                                    <div className='control'>
                                        <label htmlFor='one'></label>
                                    </div>
                                    <div className='content'>
                                        {/* <div className='content_picture'>
                                            <img src={IRyS} />
                                        </div> */}
                                        <div className='content_offset'>
                                            {/* <h2>Subtitle</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum sapien posuere ut. Nunc eget ullamcorper turpis. Sed in vehicula magna, vitae eleifend velit. Donec dui turpis, viverra vitae lobortis commodo, lobortis et ex.</p> */}
                                        </div>
                                        {/* <h1>
                                            <span>L</span>
                                            <span>o</span>
                                            <span>o</span>
                                            <span>k</span>
                                            <span>&nbsp;</span>
                                            <span>a</span>
                                            <span>t</span>
                                            <span>&nbsp;</span>
                                            <span>t</span>
                                            <span>h</span>
                                            <span>i</span>
                                            <span>s</span>
                                            <span>&nbsp;</span>
                                            <span>a</span>
                                            <span>w</span>
                                            <span>e</span>
                                            <span>s</span>
                                            <span>o</span>
                                            <span>m</span>
                                            <span>e</span>
                                            <br />
                                                <span>h</span>
                                                <span>e</span>
                                                <span>a</span>
                                                <span>d</span>
                                                <span>l</span>
                                                <span>i</span>
                                                <span>n</span>
                                                <span>e</span>
                                                <span>&nbsp;</span>
                                                <span>r</span>
                                                <span>i</span>
                                                <span>g</span>
                                                <span>h</span>
                                                <span>t</span>
                                                <span>&nbsp;</span>
                                                <span>h</span>
                                                <span>e</span>
                                                <span>r</span>
                                                <span>e</span>
                                        </h1> */}
                                    </div>
                                </div>
                            </div>
                            <div className='pages_page'>
                                <div className='pages_page__inner'>
                                
                                    <div className='hamburger'>
                                        <div className='hamburger_part'></div>
                                        <div className='hamburger_part'></div>
                                        <div className='hamburger_part'></div>
                                    </div>
                                    <div className='control next'>
                                        <label htmlFor='three'></label>
                                    </div>
                                    <div className='bg'></div>
                                    <div className='footer'>
                                        {/* <i className="fab fa-google-plus-g"></i>
                                        <i className="fas fa-retweet"></i>
                                        <i className="far fa-heart"></i>
                                        <i className="far fa-share-square"></i> */}
                                    </div>
                                    <div className='content'>
                                        <div className='content_quote'>
                                            <h4>The Origin of Hololive -- Holo JP</h4>
                                            <h5>
                                                <span>Being able to dominate the V world is nothing more than the foundation created by the predecessors.<br />From unknown to well-known, these people have extraordinary strength of heart and seasoned performance experience.</span>
                                                {/* <span></span> */}
                                            </h5>
                                        </div>
                                        {/* <div className='content_picture'>
                                            <img src={IRyS} />
                                        </div> */}
                                        {/* <h1>
                                            <span>L</span>
                                            <span>o</span>
                                            <span>o</span>
                                            <span>k</span>
                                            <span>&nbsp;</span>
                                            <span>a</span>
                                            <span>t</span>
                                            <span>&nbsp;</span>
                                            <span>t</span>
                                            <span>h</span>
                                            <span>i</span>
                                            <span>s</span>
                                            <span>&nbsp;</span>
                                            <span>a</span>
                                            <span>w</span>
                                            <span>e</span>
                                            <span>s</span>
                                            <span>o</span>
                                            <span>m</span>
                                            <span>e</span>
                                            <br />
                                                <span>h</span>
                                                <span>e</span>
                                                <span>a</span>
                                                <span>d</span>
                                                <span>l</span>
                                                <span>i</span>
                                                <span>n</span>
                                                <span>e</span>
                                                <span>&nbsp;</span>
                                                <span>r</span>
                                                <span>i</span>
                                                <span>g</span>
                                                <span>h</span>
                                                <span>t</span>
                                                <span>&nbsp;</span>
                                                <span>h</span>
                                                <span>e</span>
                                                <span>r</span>
                                                <span>e</span>
                                        </h1> */}
                                    </div>
                                </div>
                            </div>
                            <div className='pages_page'>
                                <div className='pages_page__inner'>
                                    {/* <div className='logo'>Fashion</div> */}
                                    <div className='pagenumber'>4 5</div>
                                    <div className='content'>
                                        <div className='content_picture'>
                                            <img src={IRyS} />
                                        </div>
                                        {/* <div className='content_center'>
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                                            <h6>Lorem ipsum dolor sit amet</h6>
                                        </div> */}
                                    </div>
                                    <div className='control'>
                                        <label htmlFor='two'></label>
                                    </div>
                                </div>
                            </div>
                            <div className='pages_page'>
                                <div className='pages_page__inner'>
                                    <div className='hamburger'>
                                        <div className='hamburger_part'></div>
                                        <div className='hamburger_part'></div>
                                        <div className='hamburger_part'></div>
                                    </div>
                                    <div className="intro_myth">
                                        <h1 className="EN_intro_title">
                                            Legend of the Hololive<br/>
                                            <span>- Myth -</span>
                                        </h1>
                                
                                    </div>
                                    <h5 className="EN_intro">
                                    As the name suggests, each member of the group has unique skills, and they became popular in the entire V world when they debuted.
                                    {/* <br /> */}
                                    {/* <span>A shark, a detective, a priest, a grim reaper and a phoenix endear themselves to fans with their own charisma.</span> */}
                                    </h5>
                                    <div className="EN_intro_extend">
                                        <span>Nowadays, they have created many miracles together in the V world.</span>
                                    </div>
                                    <div className='control next'>
                                        <label htmlFor='four'></label>
                                    </div>
                                    <div className='bg'></div>
                                    {/* <div className='content_centerimage'>
                                        <img src={All} />
                                    </div> */}
                                    <div className='content'>
                                        <div className='content_picture'>
                                            <img src={IRyS} />
                                        </div>
                                        {/* <div className='content_center right'>
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                                            <h6>Lorem ipsum dolor sit amet</h6>
                                        </div> */}
                                    </div>
                                    {/* <div className='footer'>
                                        <i className="fab fa-google-plus-g"></i>
                                        <i className="fas fa-retweet"></i>
                                        <i className="far fa-heart"></i>
                                        <i className="far fa-share-square"></i>
                                    </div> */}
                                </div>
                            </div>
                            <div className='pages_page'>
                                <div className='pages_page__inner'>
                                    {/* <div className='logo'>Fashion</div> */}
                                    <div className='pagenumber'>6 7</div>
                                    {/* <div className='content'> */}
                                    <div className='content_section'>
                                        <div className="ID_intro">
                                            <h2 className="ID_intro_title">Hololive Indonesia</h2>
                                            <h4 className="ID_intro">Hololive is actively developing out and expanding the market, making more people see the charm of VTuber.<br />
    Through VTuber's efforts and the company's publicity, as of 2023, the ID group had three generations, namely Area 15, Holoro and Holoh3roes.</h4>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                    <div className='control'>
                                        <label htmlFor='three'></label>
                                    </div>
                                </div>
                            </div>
                            <div className='pages_page'>
                                <div className='pages_page__inner'>
                                    <div className='hamburger'>
                                        <div className='hamburger_part'></div>
                                        <div className='hamburger_part'></div>
                                        <div className='hamburger_part'></div>
                                    </div>
                                    <div className='bg'></div>
                                    <div className='content'></div>
                                    {/* <div className='footer'>
                                        <i className="fab fa-google-plus-g"></i>
                                        <i className="fas fa-retweet"></i>
                                        <i className="far fa-heart"></i>
                                        <i className="far fa-share-square"></i>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        )
}