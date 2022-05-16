import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.Home}>
      <header className={styles["Home-header"]}>
        <h1 className={styles["Home-title"]}>Code games</h1>
      </header>
      <main />
    </div>
  );
}

export default Home;
