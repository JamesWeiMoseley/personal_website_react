import React from 'react'
import '../../App.css'
import Pdf from '../../attachments/James_Moseley_resume.pdf';

function resume() {
    return (
        <div>
            <a href = {Pdf}> Download pdf</a>
        </div>
    )
}

export default resume
