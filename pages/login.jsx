import { useRouter } from "next/router";
import Image from 'next/image'
import GitHubIcon from "../components/GitHubIcon";


const LoginPage = () => {

    const router = useRouter()

    return (
        <div className="page_login">
            <div className="login_image">
                <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    src={'/comidafast.jpg'}
                    alt=""
                />
            </div>
            <div className="login_form">
                <h1 className="login_title">Bienvenido</h1>
                <div className="context">
                    <span>Inicia Sesión con</span>
                    <button
                        className="btn_github" 
                        onClick={() => router.push('/api/auth/signin/github')}
                    >
                        <span className="btn_text">GitHub</span>
                        <div className="btnIcon">
                            <GitHubIcon/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;