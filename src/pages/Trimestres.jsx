import React, { useState } from "react";
import DashLayout from "../Layouts/dashLayout";
import styles from "./Trimestres.module.css";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const trimestresMock = [
  { id: 1, nome: "I", descricao: "Provas do primeiro trimestre."},
  { id: 2, nome: "II", descricao: "Provas do segundo trimestre."},
  { id: 3, nome: "III", descricao: "Provas do terceiro trimestre."},
];

const Trimestres = () => {
  const [showModal, setShowModal] = useState(false);
  const [trimestres, setTrimestres] = useState(trimestresMock);
  const navigate = useNavigate();


  return (
    <DashLayout>
      <div className={styles.container}>
            <h1 className={styles.title} > <ArrowLeft size={24} onClick={()=> navigate(-1)}/> Trimestre</h1>
        <div className={styles.grid}>
          {trimestres.map((trimestres) => (
            <div key={trimestres.id} className={styles.card} onClick={()=> navigate(`/kaban?title=${trimestres.descricao}`)} >
              <h2>{trimestres.nome}</h2>
              <p>{trimestres.descricao}</p>
            </div>
          ))}

          
        </div>
      </div>
    </DashLayout>
  );
};

export default Trimestres;
