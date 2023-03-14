import { Result } from "./Result";

export const ResultList = () => {
    return (
        <div className="container-fluid gtco-features-list block-list">
            <div className="container">
                <div className="row">
                    <Result imageUrl={'styles/images/quality-results.png'} title={'Quality Results'} text={'Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit.'}/>
                    <Result imageUrl={'/styles/images/analytics.png'} title={'Analytics'} text={'Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit.'}/>
                    <Result imageUrl={'/styles/images/affordable-pricing.png'} title={'Affordable Pricing'} text={'Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit.'}/>
                    <Result imageUrl={'/styles/images/easy-to-use.png'} title={'Easy To Use'} text={'Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit.'}/>
                    <Result imageUrl={'/styles/images/free-support.png'} title={'Free Support'} text={'Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit.'}/>
                    <Result imageUrl={'/styles/images/effectively-increase.png'} title={'Effectively Increase'} text={'Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit.'}/>
                </div>
            </div>
        </div>
    );
};