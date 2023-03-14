export const Client = ({
    imageUrl
}) => {
    return (
        <div className="col">
            <img src={imageUrl} className="img-fluid" alt="client" />
        </div>
    );
};