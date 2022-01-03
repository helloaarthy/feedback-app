// import { useParams} from 'react-router-dom';
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

function Post() {
    // const params = useParams()
    const status = 200
    const navigate = useNavigate()

    const onClick = () => {
        console.log('Hello');
        navigate('/about')
    }
    if(status === 404) {
        return <Navigate to='notfound' />
    } 
    return (
        <div>
            <h1>POST</h1> 
           <button onClick={onClick}>Click</button>
           <Routes>
           <Route path='/show' element={<h1>Hello world!</h1>}/>
           </Routes>
        </div>
    )
}

// <h1>POST {params.id}</h1> 
// <p>Name: {params.name}</p>
export default Post
