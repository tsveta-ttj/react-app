import { Link } from 'react-router-dom';
import styles from '../../components/home/Home.module.css';

export const Home = () => {
    return (
        <div id='home' className={styles.home}>

            <section id="welcome" className={styles.welcome}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        <span className={styles.accent}> Photography</span> for everyone
                    </h1>
                    <h2 className={styles.titleTwo}>If you <span className={styles.accent}>love</span> photography, that is perfect place for you </h2>

                    <p className={styles.text} >
                    All you have to do is <Link to={'/register'}>join</Link>  our community and share your <span className={styles.accent}> passion </span> with us
                    </p>
                    
                    <div class="divider divider--vertical"></div>
                </div>

                <img className={styles.img} src="https://cdn.pixabay.com/photo/2020/04/26/21/11/camera-png-5097207_960_720.png" alt="" />
            </section>

            <section id="gallery" className={styles.section}>
                <img className={styles.galleryImg} src="https://images.unsplash.com/photo-1585822955760-6898deab3b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />

                <img className={styles.galleryImg} src="https://images.unsplash.com/photo-1566475761078-432d3f7c0743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />



                <img className={styles.galleryImg} src="https://images.unsplash.com/photo-1610303871783-491dc6d0a165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />


            </section>

       

        </div>
    );
} 