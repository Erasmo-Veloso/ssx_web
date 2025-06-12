import React, { forwardRef } from 'react';

const COLUMNS = [
  { id: 'SEG', title: 'Segunda-feira' },
  { id: 'TER', title: 'Terça-feira' },
  { id: 'QUA', title: 'Quarta-feira' },
  { id: 'QUI', title: 'Quinta-feira' },
  { id: 'SEX', title: 'Sexta-feira' }
];

// Aqui usamos forwardRef corretamente
const TabelaProvas = forwardRef(({ DISCIPLINAS }, ref) => {
  const provasPorDia = {};

  COLUMNS.forEach(col => {
    provasPorDia[col.id] = DISCIPLINAS.filter(sub => sub.stauts === col.id);
  });

  return (
    <div ref={ref}>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th></th>
            {COLUMNS.map(col => (
              <th key={col.id}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {['Primeira', 'Segunda'].map((linha, index) => (
            <tr key={linha}>
              <td><strong>{linha}</strong></td>
              {COLUMNS.map(col => {
                const provas = provasPorDia[col.id];
                const prova = provas[index];
                return (
                  <td key={col.id}>
                    {prova ? prova.title : 'Disponível'}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default TabelaProvas;
