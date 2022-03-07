import React from 'react';
import style from './imageModal.module.scss';
const imageModal = ({ srcImage, hidden, setHidden }) => {
    const handleClose = () => {
        setHidden(true)
    }
    return (
        <div id="myModal" className={`${style["modal"]} ${hidden && style["hidden"]}`}>
            <span onClick={handleClose} className={style["close"]}>close</span>
            <img src={srcImage} className={style["modal-content"]} alt='img' id="img01" />
        </div>
    );
}

export default imageModal;
