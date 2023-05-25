import img404 from './image_processing20210401-30591-1j4cjch.gif';
import Footer from '../footer';
import { Header } from '../header';
export function NoPage()
{
    return(
        <div>
            <Header/>
            <img src={img404} alt="404 not found" />
            <Footer/>
        </div>
    )
}