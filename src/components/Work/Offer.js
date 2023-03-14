export const Offer = ({
    imageUrl,
    title,
    text
}) => {
    return (
        <div className="card text-center">
        <div className="oval">
            <img className="card-img-top" src={imageUrl} />
        </div>
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">
                {text}
            </p>
        </div>
    </div>
    );
};