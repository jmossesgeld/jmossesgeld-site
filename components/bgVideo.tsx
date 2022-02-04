import styles from "./bgVideo.module.css";

export default function BgVideo() {
  return (
    <video autoPlay muted loop className={styles.video}>
      <source src="bgHDVideo.mp4" type="video/mp4" />
    </video>
  );
}
