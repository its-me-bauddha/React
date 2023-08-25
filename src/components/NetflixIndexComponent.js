 import './NetflixIndexComponent.css';
import NetflixHeaderComponent from './NetflixHeaderComponent' 
import NetflixMainComponent from './NetflixMainComponent';
import NetflixRegisterComponent from './NetflixRegisterComponent';
import NetflixFooterComponent from './NetflixFooterComponent';
 export default function NetflixIndexComponent(){
    return(
        <div className="container-fluid">
           <div className="box">
            <header>
            <NetflixHeaderComponent/>
            </header>
            <section className="d-flex justify-content-center align-items-center" >
               <main className='-flex justify-content-center align-items-center'>
               <NetflixMainComponent></NetflixMainComponent>
               <NetflixRegisterComponent/>
               </main>
            </section>
            <footer className="m-5 p-3 "> 
               <NetflixFooterComponent></NetflixFooterComponent>
            </footer>
           </div>

        </div>
    )
 } 