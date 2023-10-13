import styles from "./Home.module.css";
function Home() {
  return (
    <main role="main" class="container">
      <div className={styles.banner}>
        <h1>Navbar example</h1>
        <p class="lead">
          This example is a quick exercise to illustrate how the top-aligned
          navbar works. As you scroll, this navbar remains in its original
          position and moves with the rest of the page.
        </p>
        <a
          class="btn btn-lg btn-primary"
          href="../../components/navbar/"
          role="button"
        >
          View navbar docs »
        </a>
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-toggle="tooltip"
          data-bs-html="true"
          data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
        >
          Tooltip with HTML
        </button>
      </div>
    </main>
  );
}

export default Home;
