import React, { useState, useRef, useEffect } from "react";
import styles from "./DashLayout.module.css";
import { useNavigate } from "react-router-dom";

export default function DashLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  // Fecha o menu ao clicar fora somente em telas pequenas
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 1024 && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className={styles.layout}>
      <aside
        ref={sidebarRef}
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
      >
        <div className={styles.sidebarHeader}>SSX-WEB</div>
        <nav className={styles.nav}>
          <button onClick={()=> navigate("/turmas")} className={styles.navItem}>Turmas</button>
        </nav>
      </aside>

      {sidebarOpen && window.innerWidth <= 1024 && <div className={styles.backdrop} />}

      <div className={styles.main}>
        <header className={styles.header}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={styles.menuButton}
          >
            <span className={styles.menuIcon} />
          </button>
          <h1 className={styles.headerTitle}>Painel do Professor</h1>
        </header>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}