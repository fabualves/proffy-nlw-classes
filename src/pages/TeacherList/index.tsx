import React from 'react'

import {Link} from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import PageHeader from '../../components/PageHeader'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes São os Proffys Disponíveis."/>
        </div>
    )
}

export default TeacherList;