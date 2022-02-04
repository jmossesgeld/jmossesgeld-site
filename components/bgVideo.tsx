import styles from "./bgVideo.module.css";

export default function BgVideo() {
  return (
    <video autoPlay muted loop className={styles.video}>
      <source src="bgVideo.mp4" type="video/mp4" />
    </video>
  );
}
