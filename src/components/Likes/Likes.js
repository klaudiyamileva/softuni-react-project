import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as likesService from '../../services/likesService';
import styles from './Likes.module.css';

export const Likes = ({
    isOwner
}) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const { blogId } = useParams();
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        likesService.getLikesByBlogId(blogId)
            .then(result => {
                const count = Number(result.length);
                setLikes(count);
            });

        likesService.getlikeByUserId(auth._id)
            .then(result => {
                if (result !== []) {
                    const hasLiked = result.find(r => r.blogId === blogId);
                    if (hasLiked) {
                        setIsLiked(true);
                    }
                }
            });
    }, [blogId]);

    const likeBlog = async () => {
        await likesService.likeBlog(blogId);
        setLikes((state) => state + 1);
        setIsLiked(true);
    };

    return (
        <>
            <div className={styles.likes}>
                {likes === 1
                    ? <p className={styles.more}>{likes} Like</p>
                    : <p className={styles.more}>{likes} Likes</p>
                }

                {auth.accessToken && isOwner === false && (
                    <button className={styles.more} onClick={likeBlog} disabled={isLiked}>
                        Like
                    </button>
                )}
            </div>
        </>
    );
};