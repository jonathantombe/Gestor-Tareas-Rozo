import './Header.css'
import FotoPerfil from '../../../images/descarga (10).jpg'

export const Header = () => {
    return (
        <>
            <div className='header-app'>
                <div className='container-header-1'>
                    <h1 className='container-title'>gestor de tareas</h1>
                    <div className='container-img'>
                        <img src={FotoPerfil} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}