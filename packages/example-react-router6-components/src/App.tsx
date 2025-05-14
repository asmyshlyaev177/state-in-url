import {useUrlState} from "state-in-url/react-router";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className='p-8'>
      <h1>useSharedState hook for React</h1>
     <BrowserRouter basename={'/a/b'}>
       <Routes>
         <Route path="/" element={<A />} />
       </Routes>
     </BrowserRouter>

    </div>
  )
}
const initialSearch = {
  query: '',
}

function A() {
  const { setUrl} = useUrlState(initialSearch, {useHistory: true, replace: true})
  return <div>
    <button onClick={() => {
      setUrl(state => ({
        ...state,
        query: 'hello world'
      }))
    }}>
      click me
    </button>
  </div>
}



export default App
