import React, { useEffect, useState } from "react";
import DashLayout from "../Layouts/dashLayout";
import styles from "./Turmas.module.css";
import { useNavigate } from "react-router-dom";

const turmasMock = [
  { id: 1, turma: "Turma A", professor: "Prof. João"},
  { id: 2, turma: "Turma B", professor: "Profª. Maria"},
  { id: 3, turma: "Turma C", professor: "Prof. Carlos"},
  { id: 4, turma: "Turma D", professor: "Profª. Ana"},
  { id: 5, turma: "Turma E", professor: "Prof. Paulo"}
];

const Turmas = () => {
  const [showModal, setShowModal] = useState(false);
  const [turmas, setTurmas] = useState(turmasMock);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchTurmas = async () =>{
      const response = await fetch('http://localhost:8080/api/turmas')
      const json = await response.json()

      
      setTurmas(json)
      console.log(turmas)
    }
    fetchTurmas()
  },[])

  const handleAddTurma = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const professor = e.target.professor.value;
    const horario = e.target.horario.value;
    const novaTurma = {
      id: turmas.length + 1,
      nome,
      professor,
      horario,
    };
    setTurmas([...turmas, novaTurma]);
    setShowModal(false);
  };

  return (
    <DashLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Minhas Turmas</h1>
        <div className={styles.grid}>
          {turmas && turmas.map((turma) => (
            <div key={turma.id} className={styles.card} onClick={()=>navigate(`/trimestres/${turma.id}`)} >
              <h2>{turma.turma}</h2>
              <p><strong>Professor:</strong> {turma.professor}</p>
              {/* <p><strong>Horário:</strong> {turma.horario}</p> */}
            </div>
          ))}

          <div className={`${styles.card} ${styles.addCard}`} onClick={() => setShowModal(true)}>
            <h2>➕ Adicionar Turma</h2>
          </div>
        </div>

        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <h2>Nova Turma</h2>
              <form onSubmit={handleAddTurma}>
                <input name="nome" placeholder="Nome da Turma" required />
                <input name="professor" placeholder="Professor" required />
                <input name="horario" placeholder="Horário" required />
                <div className={styles.modalActions}>
                  <button type="submit">Adicionar</button>
                  <button type="button" onClick={() => setShowModal(false)}>Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashLayout>
  );
};

export default Turmas;
