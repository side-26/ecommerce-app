import React from 'react';
import Button from '@mui/material/Button';
import Title from './Components/Title.Component';
const MainHeader = ({clss,clss2,bg,fs,txt,txt2}) => {
    return (
        <header className={clss}>
            <Title txt={txt2} clss={clss2}>
            </Title>
            <Button variant="contained" sx={{backgroundColor:`${bg}`,fontSize:`${fs}`,fontFamily:"IranSansRegular",width:"8rem",height:"3rem"}}>
                    {txt}
            </Button>
        </header>
    );
}

export default MainHeader;
