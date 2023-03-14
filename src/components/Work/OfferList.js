import { Link } from "react-router-dom";
import { Offer } from "./Offer";

export const OfferList = () => {
    return (
        <div className="container-fluid gtco-features" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Explore The Services<br/>We Offer For You</h2>
                        <p>Nunc sodales lobortis arcu, sit amet venenatis erat placerat a.Donec lacinia magna nulla</p>
                        <Link to="#">
                            All Services <i className="fa fa-angle-right" aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="col-lg-8">
                        <svg id="bg-services" width="100%" viewBox="0 0 1000 800">
                            <defs>
                                <linearGradient id="PSgrad_02" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                                    <stop offset="0%" stopColor="rgb(1,230,248)" stopOpacity={1} />
                                    <stop offset="100%" stopColor="rgb(29,62,222)" stopOpacity={1} />
                                </linearGradient>
                            </defs>
                            <path fillRule="evenodd" opacity="0.102" fill="url(#PSgrad_02)"
                                d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z" />
                        </svg>
                        <div className="row">
                            <div className="col">
                                <Offer imageUrl={'/styles/images/web-design.png'} title={'Web Design'} text={'Nullam quis libero in lorem accumsan sodales. Nam vel nisi'} />
                                <Offer imageUrl={'/styles/images/marketing.png'} title={'Marketing'} text={'Nullam quis libero in lorem accumsan sodales. Nam vel nisi'} />
                            </div>
                            <div className="col">
                                <Offer imageUrl={'/styles/images/seo.png'} title={'SEO'} text={'Nullam quis libero in lorem accumsan sodales. Nam vel nisi'} />
                                <Offer imageUrl={'/styles/images/graphics-design.png'} title={'Graphics Design'} text={'Nullam quis libero in lorem accumsan sodales. Nam vel nisi'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};