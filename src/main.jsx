import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Feature from './pages/Feature.jsx'
// import Home from './components/Home.jsx'
import Home from './pages/Home.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={ <Layout />}>
            <Route path='/' element={ <Home />}/>
            <Route path='/feature' element={ <Feature /> } />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <>
    <Provider store={store}>
        <RouterProvider router={router} >
            <App />
        </RouterProvider>
    </Provider>
    </>
)
