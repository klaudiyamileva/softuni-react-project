import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <div className="container-fluid gtco-banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>
                                We promise to bring the best <span>solution</span> for your
                                business.
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
                                turpis nisl.
                            </p>
                            <Link to="/contact">
                                Contact Us <i className="fa fa-angle-right" aria-hidden="true" />
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <img className="card-img-top img-fluid" src="images/banner-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid gtco-feature" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="cover">
                                <div className="card">
                                    <svg id="image" className="back-bg" width="100%" viewBox="0 0 900 700">
                                        <defs>
                                            <linearGradient id="PSgrad_01" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                                                <stop offset="0%" stopColor="rgb(1,230,248)" stopOpacity={1} />
                                                <stop offset="100%" stopColor="rgb(29,62,222)" stopOpacity={1} />
                                            </linearGradient>
                                        </defs>
                                        <path fillRule="evenodd" opacity="0.102" fill="url(#PSgrad_01)"
                                            d="M616.656,2.494 L89.351,98.948 C19.867,111.658 -16.508,176.639 7.408,240.130 L122.755,546.348 C141.761,596.806 203.597,623.407 259.843,609.597 L697.535,502.126 C748.221,489.680 783.967,441.432 777.751,392.742 L739.837,95.775 C732.096,35.145 677.715,-8.675 616.656,2.494 Z" />
                                    </svg>
                                    {/* <svg width="100%" viewBox="0 0 700 500">
                                        <clipPath id="clip-path">
                                            <path
                                                d="M89.479,0.180 L512.635,25.932 C568.395,29.326 603.115,76.927 590.357,129.078 L528.827,380.603 C518.688,422.048 472.661,448.814 427.190,443.300 L73.350,400.391 C32.374,395.422 -0.267,360.907 -0.002,322.064 L1.609,85.154 C1.938,36.786 40.481,-2.801 89.479,0.180 Z">
                                            </path>
                                        </clipPath>
                                        <image clipPath="url(#clip-path)" xlinkHref="/styles/images/learn-img.jpg" width="100%" height={465}
                                            className="svg__image"></image>
                                    </svg> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h2> We are a Creative Digital Agency &amp; Marketing Experts</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
                                turpis nisl, vitae dictum mi
                            </p>
                            <p>
                                <small>
                                    Nunc sodales lobortis arcu, sit amet venenatis erat placerat a.
                                    Donec lacinia magna
                                </small>
                            </p>
                            <Link to="/blog">
                                See Our Blog <i className="fa fa-angle-right" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};