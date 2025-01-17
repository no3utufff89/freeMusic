import { Route, Routes } from 'react-router'
import './App.scss'
import { Layout } from './components/themplate/Layout/Layout'
import { Home } from './pages/Home'
import { Playlist } from './pages/Playlist'
import { Chart } from './pages/Chart'
import { useAppDispatch } from './hooks'
import { useEffect } from 'react'
import { getArtistsData, getDefaultTracks } from './store/defaultDataSlice/requests'
import { Radio } from './pages/Radio'
import { Genres } from './pages/Genres'
import { CurrentGenre } from './pages/CurrentGenre'

function App() {
const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(getDefaultTracks());
  dispatch(getArtistsData());
},[])
  return (
   <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
          <Route path='playlist' element={<Playlist/>}/>     
          <Route path='chart' element={<Chart/>}/> 
          <Route path='radio' element={<Radio/>}/>
          <Route path='genres' element={<Genres/>}/>
            
          <Route path='genres/:genre' element={<CurrentGenre/>}/>
        </Route>
   </Routes>
  )
}

export default App
