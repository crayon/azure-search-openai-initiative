import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <a href="https://crayon.com" target={"_blank"} title="Crayon Group US">
                        <img src="https://crayondiversity.blob.core.windows.net/diversity-video/Logo1.png" width="192" alt="Crayon Logo" title="Crayon Log" />
                    </a>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>Intelligent Q & A</h3>
                    </Link>
                    <h4 className={styles.headerRightText}>Azure OpenAI + Cognitive Search</h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
