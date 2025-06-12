import React from 'react';
import html2pdf from 'html2pdf.js';
import style from './DownloadButton.module.css'

const DownloadButton = ({ targetRef, filename = 'tabela_provas.pdf' }) => {
  const handleDownload = () => {
    if (!targetRef?.current) return;

    html2pdf().set({
      margin: 10,
      filename,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    }).from(targetRef.current).save();
  };

  return (
    <button className={style.btn} onClick={handleDownload} style={{ marginBottom: '1rem' }}>
      Exportar PDF
    </button>
  );
};

export default DownloadButton;
