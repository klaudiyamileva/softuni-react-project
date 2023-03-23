import { useContext } from "react"
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"
import { getBlogById } from "../../services/blogService";
import { Navigate, Outlet } from 'react-router-dom';


export const BlogOwner = () => {
    const { auth, isAuthenticated } = useContext(AuthContext);
    const { blogId } = useParams();

    const currentBlog = getBlogById(blogId);

    if(isAuthenticated && auth._id !== currentBlog._ownerId) {
        return <Navigate to='/blog' replace/>
    }

    return <Outlet />
};