import React from 'react'
import DashLayout from '../Layouts/dashLayout'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Kanban } from 'lucide-react'
import KabanSquare from '../components/Kaban/KabanSquare'
import style from './KabanPage.module.css'

const KabanPage = () => {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const title = queryParams.get('title');

    console.log(title); 
  return (
    <div className={style.container}>
      <DashLayout>
        <h1><ArrowLeft onClick={()=>navigate(-1)}/> {title}</h1>
        <div className={style.content}>
            <KabanSquare/>
        </div>
      </DashLayout>
    </div>
  )
}

export default KabanPage
