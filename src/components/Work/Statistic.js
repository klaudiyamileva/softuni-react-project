export const Statistic = ({
    number,
    text
}) => {
    return (
        <div className="col-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{number}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};