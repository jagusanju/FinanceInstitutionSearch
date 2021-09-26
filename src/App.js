import styles from './App.module.css';
import SearchBar from './components/searchBar'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.AppHeader}>
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
