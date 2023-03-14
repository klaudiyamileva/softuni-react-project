import { Client } from "./Client";
import { OfferList } from "./OfferList";
import { ResultList } from "./ResultList";
import { StatisticList } from "./StatisticList";

export const Work = () => {
    return (
        <>
            <OfferList />
            <StatisticList />
            <ResultList />
            <div className="container-fluid gtco-logo-area block-area">
                <div className="container">
                    <div className="row">
                        <Client imageUrl={'/styles/images/logo1.png'}/>
                        <Client imageUrl={'/styles/images/logo2.png'}/>
                        <Client imageUrl={'/styles/images/logo3.png'}/>
                        <Client imageUrl={'/styles/images/logo4.png'}/>
                        <Client imageUrl={'/styles/images/logo5.png'}/>
                    </div>
                </div>
            </div>
        </>
    );
};