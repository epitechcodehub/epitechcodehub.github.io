export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded-lg p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Repositories</a>
        <a className="link link-hover">Developers</a>
        <a className="link link-hover">Projects</a>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Epitech Code Hub
        </p>
      </aside>
    </footer>
  );
}