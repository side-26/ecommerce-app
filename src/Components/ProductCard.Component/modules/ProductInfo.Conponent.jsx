import React from 'react';
import DirectionsCarSharpIcon from '@mui/icons-material/DirectionsCarSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
const Productinfo = ({clss,size,type,country,products}) => {
    return (
        <div className={clss}>
            <span>
                <DirectionsCarSharpIcon/>
                {size}
            </span>
            <span>
                <PublicSharpIcon/>
            {country}
            </span>
            <span>
                <SettingsSharpIcon/>
                {type}
            </span>
            
        </div>
    );
}

export default Productinfo;
