
import styles from "./Posts.module.css"

export const metadata = {
  title: "Posts Details",
};

export default function PostsIdLayout({ children }) {
  return (
    <div className={styles.page}>{children}</div>
  );
}
