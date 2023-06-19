import styles from './HoverBaner.module.scss'


const HoverBaner = () => {
    return (
        <div className={styles.hoverBaner}>
            <img src="https://start.ru/static/images/global/play.svg" alt="" className={styles.playIcon} />
        </div>
    );
};

export default HoverBaner;