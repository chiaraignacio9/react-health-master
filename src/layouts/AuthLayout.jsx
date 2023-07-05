import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function AuthLayout() {
    return (
        <>  
        <Header />
            <main className='max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center'>
                <img
                    src='../img/logo.svg'
                    alt='Logotipo Health Master'
                    className='max-w-xs'
                />
                <div className='p-10 w-full'>
                    <Outlet />
                </div>
            </main>
        </>
    )
}
