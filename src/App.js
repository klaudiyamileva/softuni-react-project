import { Route, Routes } from 'react-router-dom';
import { Blog } from './components/Blog/Blog';
import { BlogAdd } from './components/Blog/BlogAdd';
import { BlogEdit } from './components/Blog/BlogEdit';
import { BlogList } from './components/Blog/BlogList';
import { Career } from './components/Careers/Career';
import { CareersList } from './components/Careers/CareersList';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Work } from './components/Work/Work';

function App() {
        return (
            <div className="App">
                <Header />
                <main className="main">
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/work' element={<Work />}></Route>
                    <Route path='/blog' element={<BlogList />}></Route>
                    <Route path='/blog/:id' element={<Blog />}></Route>
                    <Route path='/blog/add' element={<BlogAdd />}></Route>
                    <Route path='/blog/edit' element={<BlogEdit />}></Route>
                    <Route path='/careers' element={<CareersList />}></Route>
                    <Route path='/careers/:id' element={<Career />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                </Routes>
                </main>
                <Footer />
            </div>
        );
    }

export default App;
