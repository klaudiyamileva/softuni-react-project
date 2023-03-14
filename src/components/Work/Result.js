export const Result = ({
    imageUrl,
    title,
    text
}) => {
    return (
        <div className="media col-md-6 col-lg-4">
        <div className="oval mr-4">
            <img className="align-self-start" src={imageUrl} alt="image" />
        </div>
        <div className="media-body">
            <h5 className="mb-0">{title}</h5>
            {text}
        </div>
    </div>
    );
};