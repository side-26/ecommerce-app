import React from 'react';
import Button from '@mui/material/Button';
import Title from './Components/Title.Component';
import BtnGroup from './Components/Btn-group.Component';
<<<<<<< HEAD
const MainHeader = ({ clss, clss2, bg, fs, txt, txt2,Isorder,deliverd,deliverdFu,btnActive }) => {
    console.log(deliverd)
=======
const MainHeader = ({ clss, clss2, bg, fs, txt, txt2,Isorder,deliverd,deliverdFu,btnActive,clickFu }) => {
    console.log(btnActive)
    
>>>>>>> 9a112dd1d8ce5070825ba1bb82c7502068e8d9c0
    return (

        <header className={clss}>
            <Title txt={txt2} clss={clss2}>
            </Title>
            {!Isorder?<Button onClick={()=>clickFu({})} disabled={btnActive} variant="contained" sx={{ backgroundColor: `${bg}`, fontSize: `${fs}`, fontFamily: "IranSansRegular", width: "8rem", height: "3rem" }}>
                {txt}
            </Button>:
            <BtnGroup variant="contained" aria-label="outlined button group">
                <Button onClick={()=>deliverdFu(true)} sx={{borderTopRightRadius:"3rem",borderBottomRightRadius:"3rem",fontFamily:"IranSansRegular",fontSize:"1rem",}} variant={deliverd&&"contained"}>تحویل داده شده</Button>
                <Button onClick={()=>deliverdFu(false)} sx={{borderTopLeftRadius:"3rem",borderBottomLeftRadius:"3rem",fontFamily:"IranSansRegular",fontSize:"1rem",}} variant={!deliverd&&"contained"}>در انتظار تحویل</Button>
            </BtnGroup>}
        </header>
    );
}

export default MainHeader;
