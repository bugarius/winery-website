import React from "react";

const HorizontalMenu = () => {
    return (
        <nav className="menu_main_nav_area menu_hover_fade menu_show">
            <ul id="menu_main" className="menu_main_nav inited sf-js-enabled sf-arrows">
                <li className="menu-item menu-item-has-children"><a href="index.html"
                                                                    className="sf-with-ul"><span>Home</span></a>
                    <ul className="sub-menu fadeOutDownSmall animated fast"
                        style={{display: 'none'}}>
                        <li className="menu-item"><a href="index.html"><span>Home 1</span></a></li>
                        <li className="menu-item"><a href="home2.html"><span>Home 2</span></a></li>
                        <li className="menu-item"><a href="home3.html"><span>Home 3</span></a></li>
                    </ul>
                </li>
                <li className="current-menu-item wer menu-item"><a
                    href="index.html"><span>Our range</span></a></li>
                <li className="menu-item menu-item-has-children"><a href="blog-archive.html"
                                                                    className="sf-with-ul"><span>The Journal</span></a>
                    <ul className="sub-menu animated fast fadeOutDownSmall"
                        style={{display: 'none'}}>
                        <li className="menu-item menu-item-has-children"><a
                            href="blog-style-chess-2-columns-2.html" className="sf-with-ul"><span>Blog Style 1</span></a>
                            <ul className="sub-menu animated fast fadeOutDownSmall"
                                style={{display: 'none'}}>
                                <li className="menu-item"><a
                                    href="blog-style-chess-2-columns-2.html"><span>2 columns</span></a>
                                </li>
                                <li className="menu-item"><a href="blog-style-chess-4-columns.html"><span>4 columns</span></a>
                                </li>
                                <li className="menu-item"><a href="blog-style-chess-6-columns.html"><span>6 columns</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item menu-item-has-children"><a href="blog-style-2.html"
                                                                            className="sf-with-ul"><span>Blog Style 2</span></a>
                            <ul className="sub-menu animated fast fadeOutDownSmall"
                                style={{display: 'none'}}>
                                <li className="menu-item"><a
                                    href="blog-archive.html"><span>1 column</span></a></li>
                                <li className="menu-item"><a href="blog-style-2.html"><span>2 columns</span></a>
                                </li>
                                <li className="menu-item"><a
                                    href="blog-style-classic-3-columns.html"><span>3 columns</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item menu-item-has-children"><a
                            href="blog-style-portfolio-2-columns.html"
                            className="sf-with-ul"><span>Portfolio</span></a>
                            <ul className="sub-menu animated fast fadeOutDownSmall"
                                style={{display: 'none'}}>
                                <li className="menu-item"><a
                                    href="blog-style-portfolio-2-columns.html"><span>2 columns</span></a>
                                </li>
                                <li className="menu-item"><a
                                    href="blog-style-portfolio-3-columns.html"><span>3 columns</span></a>
                                </li>
                                <li className="menu-item"><a
                                    href="blog-style-portfolio-4-columns.html"><span>4 columns</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item"><a
                            href="post-formats.html"><span>Post Formats</span></a></li>
                        <li className="menu-item"><a href="single-post.html"><span>Post with comments</span></a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children"><a href="buy-wines.html"
                                                                    className="sf-with-ul"><span>Buy Wines</span></a>
                    <ul className="sub-menu animated fast fadeOutDownSmall"
                        style={{display: 'none'}}>
                        <li className="menu-item"><a href="cart.html"><span>Cart</span></a></li>
                        <li className="menu-item"><a href="checkout.html"><span>Checkout</span></a>
                        </li>
                        <li className="menu-item"><a href="account.html"><span>My Account</span></a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children"><a href="#" className="sf-with-ul"><span>Features</span></a>
                    <ul className="sub-menu fadeOutDownSmall animated fast"
                        style={{display: 'none'}}>
                        <li className="menu-item"><a href="typography.html"><span>Typography</span></a>
                        </li>
                        <li className="menu-item"><a href="shortcodes.html"><span>Shortcodes</span></a>
                        </li>
                        <li className="menu-item"><a href="events.html"><span>Events</span></a></li>
                        <li className="menu-item"><a
                            href="non-existing-page.html"><span>Page 404</span></a></li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children"><a href="contacts.html"
                                                                    className="sf-with-ul"><span>Contacts</span></a>
                    <ul className="sub-menu fadeOutDownSmall animated fast"
                        style={{display: 'none'}}>
                        <li className="menu-item"><a
                            href="contacts.html"><span>Contact Us</span></a></li>
                        <li className="menu-item"><a href="about-us.html"><span>About Us</span></a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="search_wrap search_style_fullscreen inited">
                <div className="search_form_wrap">
                    <form role="search" method="get" className="search_form" action="#">
                        <input type="text" className="search_field" placeholder="Search" name="s"/>
                        <button type="submit" className="search_submit icon-search"/>
                        <a className="search_close icon-cancel"/>
                    </form>
                </div>
                <div className="search_results widget_area">
                    <a href="#" className="search_results_close icon-cancel"/>
                    <div className="search_results_content"/>
                </div>
            </div>
        </nav>
    )
}

export default HorizontalMenu;
