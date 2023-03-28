import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Blog/Blog.module.css";

export const AddComment = ({
    onCreateComment
}) => {
    const [formData, setFormData] = useState({
        fullName: '',
        comment: ''
    });

    const [formErrors, setFormErrors] = useState({
        fullName: '',
        comment: ''
    });

    const { blogId } = useParams();

    const validateForm = () => {
        let valid = true;
        const errors = {};

        if (!formData.fullName) {
            errors.fullName = 'Full name is required';
            valid = false;
        }

        if (!formData.comment) {
            errors.comment = 'Comment is required';
            valid = false;
        }

        setFormErrors(errors);

        return valid;
    };

    const onSubmitComment = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const newComment = { ...formData, blogId };

            onCreateComment(newComment);

            setFormData({
                fullName: '',
                comment: ''
            });
        }
    };

    const handleChange = (e) => {
        setFormData((state) => (
            { ...state, [e.target.name]: e.target.value }
        ));
    };

    return (
        <form onSubmit={onSubmitComment} className={styles.col} id="contact">
            <h4> Add Your Comment </h4>
            <input type="text" name="fullName" className={styles.form} placeholder="Full Name" value={formData.fullName} onChange={handleChange}
            />
            {formErrors.fullName && <div className="error">{formErrors.fullName}</div>}
            <textarea name="comment" className={styles.form} placeholder="Comment" value={formData.comment} onChange={handleChange}
            />
            {formErrors.comment && <div className="error">{formErrors.comment}</div>}
            <input type="submit" className={styles.more} value="SENT" />
        </form>

    )
}