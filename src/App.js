import { Route, Routes } from 'react-router-dom';
import { Blog } from './components/Blog/Blog';
import { BlogAdd } from './components/Blog/BlogAdd';
import { BlogEdit } from './components/Blog/BlogEdit';
import { BlogList } from './components/Blog/BlogList';
import { Career } from './components/Careers/Career';
import { AllCareers } from './components/Careers/AllCareers';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Register } from './components/Register/Register';
import { Work } from './components/Work/Work';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <Header />
                <main className="main">
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/work' element={<Work />}></Route>
                        <Route path='/blog' element={<BlogList />}></Route>
                        <Route path='/blog/:blogId' element={<Blog />}></Route>
                        <Route path='/blog/add' element={<BlogAdd />}></Route>
                        <Route path='/blog/:blogId/edit' element={<BlogEdit />}></Route>
                        <Route path='/careers' element={<AllCareers />}></Route>
                        <Route path='/careers/:careerId' element={<Career />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/register' element={<Register />}></Route>
                        <Route path='/logout' element={<Logout />}></Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
