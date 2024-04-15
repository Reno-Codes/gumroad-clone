import "./featuresPage.css";

function FeaturesPage() {
    return (
        <section className="bg-yellow">
            <div className="container">
                <div className="section-intro">
                    <p className="section-tagline">Product Features</p>
                    <h1>Built for new beginnings</h1>
                    <p className="text-md">
                        Gumroad is a powerful, but simple, e-commerce platform
                        that puts a wide selection of tools at your fingertips.
                        Now you can sell the digital services you want—books,
                        memberships, courses, and more—right to your audience.
                    </p>
                </div>
            </div>

            <div className="container loop-container">
                <div className="loop-outer-circle features">
                    <div className="loop-inner-circle features">
                        <div className="loop-features-sticker-row">
                            <img
                                src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61941f331e5c53632cd4114e_Drawing%20%26%20Painting.svg"
                                loading="lazy"
                                alt=""
                                className="features-loop-sticker"
                            ></img>
                            <img
                                src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61941f3392e9c549f0d48fdf_Design%20%26%20Tech.svg"
                                loading="lazy"
                                alt=""
                                className="features-loop-sticker"
                            ></img>
                            <img
                                src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61941f34a6c4b5120f0dba6d_Books%20%26%20Writing.svg"
                                loading="lazy"
                                alt=""
                                className="features-loop-sticker"
                            ></img>
                            <img
                                src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61941f34ac1c9745f910e592_Games.svg"
                                loading="lazy"
                                alt=""
                                className="features-loop-sticker"
                            ></img>
                        </div>
                        <div className="loop-row bottom features">
                            <div className="idea-loop-text-wrap _04">
                                <div className="idea-loop-text">Repeat</div>
                                <div className="idea-loop-text-bg arrow-right features"></div>
                            </div>
                            <div className="idea-loop-text-wrap _04">
                                <div className="idea-loop-text">Get Paid</div>
                                <div className="idea-loop-text-bg arrow-right features"></div>
                            </div>
                        </div>
                        <div className="loop-row top">
                            <div className="idea-loop-text-wrap _02">
                                <div className="idea-loop-text">
                                    Open Account
                                </div>
                                <div className="idea-loop-text-bg features"></div>
                            </div>
                            <div className="idea-loop-text-wrap _02">
                                <div className="idea-loop-text">
                                    Add Product
                                </div>
                                <div className="idea-loop-text-bg features"></div>
                            </div>
                            <div className="idea-loop-text-wrap _02">
                                <div className="idea-loop-text">
                                    Start Selling
                                </div>
                                <div className="idea-loop-text-bg features"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="floater-wrap features-6">
                <img
                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f8c3ff2eb7c8fd3395df8_feature-receipt-5.svg"
                    loading="lazy"
                    alt=""
                    className="floater-image"
                ></img>
            </div>
            <div className="floater-wrap features-5">
                <img
                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f8c3f5befb74e95dac64e_feature-receipt-4.svg"
                    loading="lazy"
                    alt=""
                    className="floater-image"
                ></img>
            </div>
            <div className="floater-wrap features-2">
                <img
                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f8c3f5befb74e95dac64e_feature-receipt-4.svg"
                    loading="lazy"
                    alt=""
                    className="floater-image"
                ></img>
            </div>
            <div className="floater-wrap features-3">
                <img
                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f8c3ff2eb7c8fd3395df8_feature-receipt-5.svg"
                    loading="lazy"
                    alt=""
                    className="floater-image"
                ></img>
            </div>

            {/* TODO: White section, intro-section, under yellow section */}
        </section>
    );
}

export default FeaturesPage;
