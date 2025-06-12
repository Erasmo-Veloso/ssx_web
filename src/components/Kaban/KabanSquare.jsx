import React from "react";
import style from "./KabanSquare.module.css";
import { COLUMNS, DISCIPLINAS } from "../../constats/COLUMNS";
import Column from "../Column/Column";
import { DndContext } from "@dnd-kit/core";
import TabelaProvas from "../TableProvas/TableProvas";
import DownloadButton from "../DownlaodButton/DownloadButton";

/**
 * Componente principal do quadro Kanban
 * Responsável por gerenciar o estado das disciplinas e a interface do quadro
 */
const KabanSquare = () => {
  // Estado que armazena e gerencia as disciplinas
  // Inicializado com as disciplinas definidas em DISCIPLINAS
  const [subs, setSubs] = React.useState(DISCIPLINAS);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // Verifica se existe um destino válido para soltar o item
    if (!over) return;

    // Extrai o ID do item sendo arrastado e o novo status (coluna de destino)
    const subId = active.id;
    const newStatus = over.id;

    // Atualiza o estado das disciplinas
    // Mapeia todas as disciplinas e atualiza apenas a que foi movida
    setSubs(() =>
      subs.map((sub) =>
        sub.id === subId
          ? {
              ...sub,
              stauts: newStatus, // Atualiza o status da disciplina para a nova coluna
            }
          : sub
      )
    );
  };

  // Referência para a tabela de provas
  // Usada para permitir o download da tabela em PDF
  const tabelaRef = React.useRef();

  return (
    // Container principal do componente
    <div className={style.all}>
      {/* Botão para download da tabela em PDF
          Recebe o nome do arquivo e a referência da tabela */}
      <DownloadButton filename="tabela_provas.pdf" targetRef={tabelaRef} />
      
      {/* Container do quadro Kanban */}
      <div className={style.container}>
        <div className={style.wrapper}>
          {/* Contexto de drag and drop
              Envolve todas as colunas e gerencia o estado do drag and drop */}
          <DndContext onDragEnd={handleDragEnd}>
            {/* Renderiza cada coluna do Kanban
                Mapeia as colunas definidas em COLUMNS */}
            {COLUMNS.map((column) => {
              return (
                <Column
                  key={column.id}
                  column={column}
                  
                  subs={subs.filter((sub) => sub.stauts === column.id)}
                />
              );
            })}
          </DndContext>

          {/* Área da tabela de provas
              Exibe todas as disciplinas em formato tabular */}
          <div className={style.table}>
            <TabelaProvas 
              DISCIPLINAS={subs} 
              ref={tabelaRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporta o componente para uso em outras partes da aplicação
export default KabanSquare;
