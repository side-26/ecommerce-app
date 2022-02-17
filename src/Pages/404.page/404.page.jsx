import React, { useState } from 'react';
import Modal from '../../Components/Modals.Components/InfoModal.Component/InfoModal.component'

export const ErrorPage=()=> {
   
        return (
            <div>
            <h1>404 not found please check your connecion...</h1>
            <Modal orderId={3}/>
        </div>
        );
}
