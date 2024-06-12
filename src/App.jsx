
import './App.css'
import FetchApi from './FetchApi'
import AxiosApi from './AxiosApi'

function App() {
 
  return (
    <>
      <h1 style={{textAlign:'center',margin:'50px 0 30px',fontSize:'40px'}}>
        Get API data using Javascript fetch method:
      </h1>
      <FetchApi />

      <h1 style={{textAlign:'center',margin:'50px 0 30px',fontSize:'40px'}}>
        Get API data using Javascript axios method:
      </h1>
      <AxiosApi />
    </>
  )
}

export default App
