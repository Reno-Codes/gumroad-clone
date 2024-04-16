import "./footer.css";

function Footer() {
    return (
        <div className="section bg-black">
            <div className="container">
                <div className="footer-grid">
                    <a
                        href="/"
                        id="w-node-_footer"
                        className="brand w-nav-brand"
                    >
                        <img
                            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619c00d30ade22c25328ff43_gumroad-logo-white.svg"
                            loading="lazy"
                            alt=""
                            className="logo"
                        />
                    </a>
                    <div id="w-node-_footer" className="spacing-medium">
                        <h4 className="text-xl">
                            Subscribe to get tips and tactics to grow the way
                            you want.
                        </h4>
                        <div className="w-embed">
                            <form
                                className="inline-newsletter-grid"
                                // action="https://app.gumroad.com/follow_from_embed_form"
                                // method="post"
                            >
                                <input
                                    name="seller_id"
                                    type="hidden"
                                    value="123123123"
                                />
                                <input
                                    name="email"
                                    className="form-input footer-newsletter w-input"
                                    placeholder="Your email address"
                                    type="email"
                                />
                                <button
                                    className="form-submit-btn arrow w-button"
                                    type="submit"
                                >
                                    →
                                </button>
                            </form>
                        </div>
                    </div>
                    <div id="w-node-_footer" className="footer-links-grid">
                        <div id="w-node-_footer" className="spacing-small">
                            <a href="/" className="footer-link">
                                Help
                            </a>
                            <a href="/blog" className="footer-link">
                                Blog
                            </a>
                            <a href="/" className="footer-link">
                                Terms of Service
                            </a>
                            <a href="/" className="footer-link">
                                Privacy Policy
                            </a>
                        </div>
                        <div id="w-node-_footer" className="spacing-small">
                            <a
                                href="/features"
                                aria-current="page"
                                className="footer-link w--current"
                            >
                                Features
                            </a>
                            <a href="/pricing" className="footer-link">
                                Pricing
                            </a>
                            <a href="/discover" className="footer-link">
                                Discover
                            </a>
                            <a
                                href="https://jobs.gumroad.com/"
                                className="footer-link"
                            >
                                Jobs
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=st8ns96z7d4"
                                className="footer-link"
                            >
                                Board meetings
                            </a>
                        </div>
                    </div>
                    <div id="w-node-_footer" className="flex-vertical">
                        <img
                            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618f28a89e94524552a002cb_g-icon.svg"
                            loading="lazy"
                            alt=""
                            className="footer-gum-icon"
                        />
                        <div className="text-small">Ⓒ Gumroad, Inc.</div>
                    </div>
                    <div
                        id="w-node-_footer"
                        className="footer-social-icon-grid"
                    >
                        <a
                            href="https://twitter.com/gumroad"
                            className="social-link w-inline-block"
                        >
                            <div className="w-embed">
                                <svg
                                    width="30"
                                    height="25"
                                    viewBox="0 0 30 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M29.4254 0.298606C28.1446 1.20207 26.7264 1.89307 25.2256 2.34501C24.4201 1.41879 23.3495 0.762313 22.1587 0.464359C20.9679 0.166406 19.7143 0.241354 18.5675 0.679067C17.4207 1.11678 16.436 1.89614 15.7466 2.91174C15.0571 3.92734 14.6962 5.13017 14.7127 6.35756V7.69508C12.3622 7.75603 10.0331 7.23472 7.93283 6.17759C5.83257 5.12046 4.02635 3.56033 2.67504 1.63612C2.67504 1.63612 -2.67504 13.6738 9.36263 19.0239C6.60805 20.8937 3.32662 21.8312 0 21.6989C12.0377 28.3865 26.7504 21.6989 26.7504 6.31744C26.7491 5.94488 26.7133 5.57324 26.6434 5.2073C28.0084 3.86108 28.9718 2.16138 29.4254 0.298606Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UC6o7H5wr2Cf4ibntYEs4Mcg"
                            className="social-link w-inline-block"
                        >
                            <div className="w-embed">
                                <svg
                                    width="33"
                                    height="25"
                                    viewBox="0 0 33 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M32.2197 5.58439C32.2197 2.77196 30.1507 0.509525 27.5941 0.509525C24.1312 0.347654 20.5995 0.285156 16.9903 0.285156H15.8651C12.2647 0.285156 8.72672 0.347654 5.26378 0.51015C2.71346 0.51015 0.644451 2.78509 0.644451 5.59751C0.488181 7.82183 0.421923 10.0468 0.425673 12.2717C0.419422 14.4966 0.490265 16.7237 0.6382 18.9528C0.6382 21.7652 2.70721 24.0464 5.25753 24.0464C8.89549 24.2151 12.6272 24.2901 16.4214 24.2839C20.2219 24.2964 23.9432 24.2172 27.5853 24.0464C30.1419 24.0464 32.2109 21.7652 32.2109 18.9528C32.361 16.7216 32.4297 14.4966 32.4235 12.2655C32.4376 10.0405 32.3697 7.81349 32.2197 5.58439ZM13.3648 18.4028V6.12187L22.4284 12.2592L13.3648 18.4028Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                        <a
                            href="https://www.instagram.com/gumroad/"
                            className="social-link w-inline-block"
                        >
                            <div className="w-embed">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.7451 2.28498C18.0171 2.28893 19.2359 2.81703 20.1353 3.75392C21.0347 4.69081 21.5417 5.96037 21.5455 7.28533V17.285C21.5417 18.6099 21.0347 19.8795 20.1353 20.8164C19.2359 21.7533 18.0171 22.2814 16.7451 22.2853H7.14546C5.8735 22.2814 4.65472 21.7533 3.75531 20.8164C2.85589 19.8795 2.34892 18.6099 2.34512 17.285V7.28533C2.34892 5.96037 2.85589 4.69081 3.75531 3.75392C4.65472 2.81703 5.8735 2.28893 7.14546 2.28498H16.7451ZM16.7451 0.285156H7.14546C3.44929 0.285156 0.425293 3.43516 0.425293 7.28533V17.285C0.425293 21.1352 3.44929 24.2852 7.14546 24.2852H16.7451C20.4413 24.2852 23.4653 21.1352 23.4653 17.285V7.28533C23.4653 3.43516 20.4413 0.285156 16.7451 0.285156Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M18.1855 7.21075C17.9007 7.21075 17.6223 7.12027 17.3855 6.95073C17.1487 6.7812 16.9641 6.54023 16.8551 6.25831C16.7461 5.97639 16.7176 5.66617 16.7732 5.36688C16.8287 5.06759 16.9659 4.79267 17.1673 4.5769C17.3687 4.36112 17.6253 4.21418 17.9046 4.15465C18.1839 4.09511 18.4735 4.12567 18.7366 4.24245C18.9997 4.35922 19.2246 4.55698 19.3829 4.8107C19.5411 5.06443 19.6255 5.36272 19.6255 5.66788C19.6259 5.87061 19.589 6.07144 19.5168 6.25883C19.4445 6.44621 19.3385 6.61647 19.2047 6.75983C19.0709 6.90318 18.912 7.01681 18.7371 7.0942C18.5622 7.17158 18.3747 7.21119 18.1855 7.21075ZM11.9456 8.23897C12.7051 8.23897 13.4476 8.48028 14.0791 8.93239C14.7107 9.3845 15.2029 10.0271 15.4935 10.7789C15.7842 11.5308 15.8602 12.3581 15.7121 13.1562C15.5639 13.9543 15.1981 14.6875 14.6611 15.2629C14.124 15.8383 13.4397 16.2302 12.6948 16.389C11.9499 16.5477 11.1777 16.4662 10.476 16.1548C9.77432 15.8434 9.17456 15.316 8.7526 14.6394C8.33063 13.9628 8.1054 13.1673 8.1054 12.3535C8.10649 11.2626 8.51143 10.2167 9.23138 9.44537C9.95132 8.674 10.9275 8.24014 11.9456 8.23897ZM11.9456 6.18199C10.8064 6.18199 9.69274 6.54394 8.7455 7.22207C7.79826 7.9002 7.05997 8.86406 6.62401 9.99176C6.18804 11.1195 6.07397 12.3603 6.29623 13.5575C6.51848 14.7546 7.06707 15.8543 7.87264 16.7174C8.6782 17.5805 9.70454 18.1683 10.8219 18.4064C11.9392 18.6445 13.0974 18.5223 14.1499 18.0552C15.2024 17.5881 16.102 16.7971 16.7349 15.7822C17.3679 14.7673 17.7057 13.5741 17.7057 12.3535C17.7057 10.7167 17.0988 9.14696 16.0186 7.98958C14.9384 6.8322 13.4733 6.18199 11.9456 6.18199Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                        <a
                            href="https://www.facebook.com/gumroad"
                            className="social-link w-inline-block"
                        >
                            <div className="w-embed">
                                <svg
                                    width="14"
                                    height="25"
                                    viewBox="0 0 14 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.4653 0.285156H9.91988C8.35269 0.285156 6.84969 0.917297 5.74152 2.04252C4.63335 3.16773 4.01079 4.69386 4.01079 6.28516V9.88516H0.465332V14.6852H4.01079V24.2852H8.73806V14.6852H12.2835L13.4653 9.88516H8.73806V6.28516C8.73806 5.9669 8.86257 5.66167 9.08421 5.43663C9.30584 5.21159 9.60644 5.08516 9.91988 5.08516H13.4653V0.285156Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                        <a
                            href="http://pinterest.com/gumroad"
                            className="social-link w-inline-block"
                        >
                            <div className="w-embed">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.468 0.285156C5.83975 0.285156 0.465332 5.65717 0.465332 12.2825C0.465332 17.1939 3.42313 21.4144 7.65086 23.2729C7.61871 22.4374 7.64551 21.4304 7.85984 20.5199C8.09025 19.5451 9.40304 13.9803 9.40304 13.9803C9.40304 13.9803 9.01724 13.2144 9.01724 12.0843C9.01724 10.3061 10.046 8.97786 11.332 8.97786C12.4251 8.97786 12.9503 9.79732 12.9503 10.7775C12.9503 11.8754 12.2483 13.5143 11.8893 15.0354C11.5892 16.3102 12.527 17.3438 13.7862 17.3438C16.0581 17.3438 17.5906 14.4249 17.5906 10.9649C17.5906 8.33514 15.817 6.36951 12.5966 6.36951C8.9583 6.36951 6.68636 9.08498 6.68636 12.1164C6.68636 13.1609 6.99715 13.9 7.4794 14.4677C7.69909 14.7301 7.73124 14.8373 7.65086 15.1372C7.59192 15.3568 7.46332 15.887 7.40438 16.1013C7.32401 16.4066 7.07752 16.5137 6.80425 16.4012C5.12709 15.7156 4.34477 13.8839 4.34477 11.8165C4.34477 8.41013 7.2222 4.32354 12.9235 4.32354C17.5048 4.32354 20.5216 7.63887 20.5216 11.1952C20.5216 15.9031 17.9014 19.4166 14.0434 19.4166C12.7466 19.4166 11.5303 18.715 11.1124 17.9223C11.1124 17.9223 10.4158 20.686 10.2657 21.2216C10.0139 22.1481 9.51557 23.0694 9.06011 23.7924C10.1649 24.1182 11.3108 24.2841 12.4627 24.2852C19.0909 24.2852 24.4653 18.9131 24.4653 12.2878C24.4653 5.66253 19.0963 0.285156 12.468 0.285156Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
