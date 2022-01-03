// import { useState } from 'react';
// import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
// import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import AboutIconLink from './components/AboutIconLink';
import Card from './components/shared/Card';
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    // const addFeedback = (newFeedback) => {
    //     newFeedback.id = uuidv4()
    //     setFeedback([newFeedback, ...feedback])
    // }

    // const deleteFeedback = (id) => {
    //     if(window.confirm('Are you sure you want to delete?')) {
    //         setFeedback(feedback.filter((item) => item.id !== id))
    //     }
    // }
    return (
        <FeedbackProvider>
        <Router>
            <Header/>
                <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                        <FeedbackForm/>
                        <FeedbackStats/>
                        <FeedbackList/>
                        </>
                    }>  
                    </Route>
                    <Route path='/about' element={<AboutPage/>}/> 
                    <Route path='/post/*' element={<Post/>}/> 
                </Routes>
                <Card>
                    <NavLink to="/" className="active">
                        Home 
                    </NavLink>
                    <NavLink to="/about" className="active">
                        About
                    </NavLink>
                </Card>
                    <AboutIconLink/>
                </div>
        </Router> 
        </FeedbackProvider>
    )
}

export default App;