import Footer from "../components/Footer";
import "./featuresPage.css";

function FeaturesPage() {
    return (
        <>
            <div className="page-wrap">
                <section className="bg-yellow">
                    <div className="container">
                        <div className="section-intro">
                            <p className="section-tagline">Product Features</p>
                            <h1>Built for new beginnings</h1>
                            <p className="text-md">
                                Gumroad is a powerful, but simple, e-commerce
                                platform that puts a wide selection of tools at
                                your fingertips. Now you can sell the digital
                                services you want—books, memberships, courses,
                                and more—right to your audience.
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
                                        <div className="idea-loop-text">
                                            Repeat
                                        </div>
                                        <div className="idea-loop-text-bg arrow-right features"></div>
                                    </div>
                                    <div className="idea-loop-text-wrap _04">
                                        <div className="idea-loop-text">
                                            Get Paid
                                        </div>
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
                </section>

                <section className="container">
                    <div className="section-intro">
                        <p className="section-tagline">Customizable Options</p>
                        <h2 className="section-title">Your store, your way</h2>
                        <p className="text-md">
                            Gumroad plays well with others. Set up your store on
                            our
                            <span className="line-break">
                                platform, or easily embed it on your existing
                                site.
                            </span>
                        </p>
                    </div>
                </section>

                <div className="grid-halves">
                    <div className="bg-black">
                        <div className="column-padding">
                            <div className="content-grid xl">
                                <div className="spacing-base">
                                    <h3 className="text-yellow-dark">
                                        Create a home here
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        No site? No problem. Use our flexible
                                        page editor to build a storefront and
                                        customize your site's colors, and more.
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-yellow-dark">
                                        Use your own website, too
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Already have a site? Link it to ours
                                        under a custom domain.
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-yellow-dark">
                                        Power-up your page
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        You can easily embed our payment
                                        platform and 'follow' button on your
                                        existing site.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-dark border-right">
                        <div className="column-padding centered">
                            <div className="callout-wrap">
                                <img
                                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61991f9baa14038b9c100d6c_home-feature-4.svg"
                                    loading="lazy"
                                    alt=""
                                    className="callout-image"
                                ></img>
                                <img
                                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f8f9c02e6955b582e990c_thumbsup.svg"
                                    loading="lazy"
                                    width="172"
                                    alt=""
                                    className="sticker features-01"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-bottom">
                    <div className="bg-pink">
                        <div className="slider-grid" aria-hidden="true">
                            <div aria-hidden="true">
                                <div
                                    className="column-padding slider-column-left"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="relative"
                                        aria-hidden="true"
                                    >
                                        <img
                                            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619451f5da3d1c898a88673f_nick-greenawalt.png"
                                            loading="lazy"
                                            width="482.5"
                                            sizes="(max-width: 479px) 85vw, (max-width: 767px) 83vw, (max-width: 991px) 482.5px, (max-width: 1919px) 34vw, 482.5px"
                                            alt=""
                                            srcSet="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619451f5da3d1c898a88673f_nick-greenawalt-p-500.png 500w, https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619451f5da3d1c898a88673f_nick-greenawalt-p-800.png 800w, https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619451f5da3d1c898a88673f_nick-greenawalt.png 965w"
                                            className="slider-creator-image"
                                        />
                                        <a
                                            href="https://motionbynick.gumroad.com/"
                                            target="_blank"
                                            className="name-button bottom-left button-shadow"
                                            tabIndex={-1}
                                        >
                                            <div>motionbynick</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true">
                                <div
                                    className="column-padding slider-column-right"
                                    aria-hidden="true"
                                >
                                    <div>
                                        <div className="content-grid">
                                            <p
                                                className="text-lg"
                                                aria-hidden="true"
                                            >
                                                “I like to move fast and break
                                                shit. Gumroad allows me to
                                                quickly experiment with new
                                                ideas, without the headache of
                                                managing a complicated store.”
                                                <br aria-hidden="true" />
                                            </p>
                                            <p aria-hidden="true">
                                                <strong>
                                                    Nick Greenawalt sells motion
                                                    design tutorials
                                                </strong>
                                                <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="intro-section">
                    <div className="container">
                        <div className="section-intro">
                            <p className="section-tagline">
                                Payment Integrations
                            </p>
                            <h2 className="section-title">Money, incoming</h2>
                            <p className="text-md">
                                Once you get set up, it's easy to ring the
                                register.
                                <span className="line-break">
                                    Here’s how you can sell and get paid, fast.
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="grid-halves">
                    <div className="bg-purple border-right">
                        <div className="column-padding">
                            <div className="callout-wrap">
                                <img
                                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f82531c01ed0820276db1_features-3.svg"
                                    loading="lazy"
                                    alt=""
                                    className="callout-image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-black border-right">
                        <div className="column-padding">
                            <div className="content-grid xl">
                                <div className="spacing-base">
                                    <h3 className="text-purple">
                                        Create simple memberships
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Give customers access to a library of
                                        content for as long as they're
                                        subscribed.
                                        <br />
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-purple">
                                        Set up subscriptions
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Let customers pay over time—monthly,
                                        quarterly, biannually, yearly, and more.
                                        <br />
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-purple">
                                        The sky's the limit
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Give your audience the chance to pay
                                        what they want for your product.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-halves">
                    <div className="bg-black">
                        <div className="column-padding">
                            <div className="content-grid xl">
                                <div className="spacing-base">
                                    <h3 className="text-purple">
                                        Say ¥£$ to different currencies
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Increase your sales opportunities by
                                        accepting payments from a global
                                        audience.
                                        <br />
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-purple">
                                        Don't sweat VAT
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        We collect VAT as required and send it
                                        to the EU . You don't need to do a
                                        thing.
                                        <br />
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-purple">
                                        Want to give 10% off?
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Create discount offer codes for your
                                        products, as a percentage or fixed
                                        amount. <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple no-overflow">
                        <img
                            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6194643c04fdc36b37ec99d3_features-4.svg"
                            loading="lazy"
                            alt=""
                            className="callout-image image-full"
                        />
                    </div>
                </div>

                <div className="grid-halves">
                    <div className="bg-purple">
                        <div
                            data-w-id="8516860a-aaa3-0997-f495-2eaf90bb195a"
                            className="column-padding"
                        >
                            <div className="callout-wrap">
                                <img
                                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619957efd3a10ea42e318885_features-5.svg"
                                    loading="lazy"
                                    alt=""
                                    className="callout-image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-black">
                        <div className="column-padding">
                            <div className="content-grid xl">
                                <div className="spacing-base">
                                    <h3 className="text-purple">
                                        Generate license keys
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Selling software? We can create your
                                        license keys, so you can get back to
                                        beta.
                                        <br />
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-purple">
                                        Sell multiple versions
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Allow buyers to pick from PDF, ePub, and
                                        Mobi. Even charge more for lossless
                                        audio.
                                        <br />
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-purple">
                                        Protect your work
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        We can create lightweight DRM to help
                                        keep customers honest.
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="intro-section">
                    <div className="container">
                        <div className="section-intro">
                            <p className="section-tagline">
                                Comprehensive Platform
                            </p>
                            <h2 className="section-title">
                                From start to finesse
                            </h2>
                            <p className="text-md">
                                We've spent ten years building an end-to-end
                                <span className="line-break">
                                    platform so you can start selling in
                                    seconds.
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="grid-halves">
                    <div className="bg-yellow-dark">
                        <div
                            data-w-id="737cf5a9-8727-0655-8d7b-7ca1eda6fb18"
                            className="column-padding centered"
                        >
                            <div className="callout-wrap">
                                <img
                                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619fafc95befb7dd73dbd25b_features-6.svg"
                                    loading="lazy"
                                    alt=""
                                    className="callout-image"
                                />
                                <img
                                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61995a30e1c4e20157f864cf_easy.svg"
                                    loading="lazy"
                                    width="150"
                                    alt=""
                                    className="sticker features-03"
                                />
                                <img
                                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61995a30882d3a6d21ec46f2_price-tag.svg"
                                    loading="lazy"
                                    width="200"
                                    alt=""
                                    className="sticker features-02"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-black">
                        <div className="column-padding">
                            <div className="content-grid xl">
                                <div className="spacing-base">
                                    <h3 className="text-yellow-dark">
                                        Tools to get going fast
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Create a profit-making machine in no
                                        time with our flexible page editor or
                                        easily embed a 'Follow' button onto your
                                        existing site.
                                        <br />
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-yellow-dark">
                                        Sell anything
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        We don't limit your ideas. Whether it's
                                        a digital download, eBook, course, or
                                        monthly membership, we make sure it
                                        checks out.
                                        <br />
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-yellow-dark">
                                        Bring your friends
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Already have fans? Easily import your
                                        existing email list—and export your
                                        followers and customers at any time.
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-halves">
                    <div className="bg-black">
                        <div className="column-padding">
                            <div className="content-grid xl">
                                <div className="spacing-base">
                                    <h3 className="text-yellow-dark">
                                        Be ready when they are
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        All payments are secure and smooth, so
                                        your customers can read, listen, or
                                        watch their purchase immediately.
                                        <br />
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-yellow-dark">
                                        Make decisions with your data
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Dive deeper into your sales with
                                        analytics that can help you improve your
                                        products and messaging.
                                        <br />
                                    </div>
                                </div>
                                <div className="spacing-base">
                                    <h3 className="text-yellow-dark">
                                        Grow your audience
                                        <br />
                                    </h3>
                                    <div className="text-div-halves">
                                        Post new updates, send email broadcasts,
                                        and use powerful automated workflows to
                                        connect and grow your audience.
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-dark features-2">
                        <div className="column-padding centered">
                            <div className="callout-wrap">
                                <img
                                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61944b89c2b99c07f3dbba06_sales-graph.svg"
                                    loading="lazy"
                                    alt=""
                                    className="callout-image"
                                />
                                <img
                                    src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61995ae69b20f14faece0e1d_clapping.svg"
                                    loading="lazy"
                                    width="200"
                                    alt=""
                                    className="sticker features-04"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-pink">
                    <div className="container">
                        <div className="section-intro cta">
                            <h2 className="section-title">
                                Share your work.
                                <span className="line-break">
                                    Someone out there needs it.
                                </span>
                            </h2>
                            <a
                                href="/signup"
                                className="shadow-button-wrap w-inline-block"
                            >
                                <div className="shadow-button-text">
                                    Start Selling
                                </div>
                                <div className="shadow-button-shadow _2 red"></div>
                                <div className="shadow-button-shadow yellow"></div>
                            </a>
                        </div>
                    </div>
                </section>

                <Footer></Footer>
            </div>
        </>
    );
}

export default FeaturesPage;
