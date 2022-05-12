import { getSession, useSession } from "next-auth/react";
import { useRouter } from 'next/router'


const HomePage = ({session}) => {
    

    const router = useRouter()

    return (
        <div className="page_index">
            {
                session ? (
                    <div className="center">
                        <h1 className="index_title">Hola, {session.user.name}</h1>
                        <span className=" ">Tus datos son:</span>
                        <p>Nombre: {session.user.name}</p>
                        <p className="">Correo: {session.user.email}</p>
                        <p>tu foto de perfil</p>
                        <div className="perfil_img">
                            <img src={session.user.image} alt="" />
                        </div>
                        <button className="btn_session" onClick={() => router.push('/api/auth/signout')}>
                            Cerrar Sesion
                        </button>
                    </div>
                ) :
                (
                    <p>Skeleton</p>
                )
            }

        </div>
    );
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    if(!session) return {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }

    return {
        props: {
            session
        }
    }
}

export default HomePage;