import Image from 'next/image';
import styles from './page.module.css';
import MoviesList from './components/MoviesList';

export default function Home() {
  return (
    <main className={styles.main}>
      <MoviesList />
    </main>
  );
}
