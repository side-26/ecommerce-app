import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeModalsState } from '../../../Redux/Actions.Redux/Modals.Actions/Modals';
import { fetchOrderRequest } from "../../../Redux/Actions.Redux/Orders.Actions/Orders.Action";
import { BASE_URL } from "../../../Config/Url.config";
import { styled } from '@mui/material/styles';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import style from './InfoModal.module.scss';
import InfoPage from './module/info_page.ModalPage/Info_Page.ModalPage';
import OrdersSection from './module/Orders_page.ModulPage/Orders_section.modalPage';
import { order } from '../../../Api/Order.api';
import { toast } from 'react-toastify';
const DeliverdBtn = styled(Button)({
    backgroundColor: "red"
})
const Infomodal = ({ orderId, hidden,setHidden,setDeliverd,deliverd }) => {
    const [place, setPlace] = useState(1);
    const [value, setValue] = useState(0);
    const [changed, setChanged] = useState(false)
    const orderObj = useSelector(state => state.orders.order);
    const modalState = useSelector(state => state.modalBool.infoModal);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOrderRequest(BASE_URL, orderId));
    }, [changed])
    const handelCloseModal = () => {
        setHidden(true)
    }
    const handelChangePlace = (val) => {
        setPlace(val);
    }
    const handleChange = (event, newValue) => {
        setValue(modalState);
    };
    const convertDate = () => {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        const newdate = `${day}/${month}/${year}`;
        return newdate
    }
    const handleChageStatus = (id) => {
        const data = {
            "deliverd": true,
            "timeDeliverd": convertDate()
        }
        order.patch(BASE_URL, id, data).then(res => {
            if (res.status >= 200 && res.status <= 299) {
                toast.success("???? ???????????? ?????????? ????????")
            }
        })
        setChanged(!changed);
        setDeliverd(!deliverd);
        setHidden(true)
        // alert(id)
    }
    console.log(orderObj)

    return (
        <section className={`${style["modal-container"]} ${hidden && style["hidden"]}`}>
            <div className={style["modal-layer"]}>
            </div>
            <div onClick={() => handelCloseModal()} className={style["modal-body"]}>
                <section onClick={e => { e.stopPropagation() }} className={style["modal-inner"]}>
                    <div className={style["modal-inner-header"]}>
                        <Typography sx={{ fontFamily: "IranSansBold" }}>?????????? ??????????????</Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            onClick={() => handelCloseModal()}
                            aria-label="menu"
                            sx={{ color: "red", }}
                        >
                            <CancelSharpIcon />
                        </IconButton>
                    </div>
                    <div className={style["modal-inner-body"]}>
                        <Box sx={{ width: '100%' }}>
                            <Tabs

                                value={value}
                                onChange={handleChange}
                                textColor="primary"
                                className={style["tab-group"]}
                                indicatorColor="primary"
                                aria-label="secondary tabs example"
                                sx={{ color: "#aaa", fontFamily: "IranSansRegular" }}
                            >
                                <Tab onClick={() => handelChangePlace(1)} aria-selected={true} value="one" label="???????????? ????????????" />
                                <Tab onClick={() => handelChangePlace(0)} value="two" label="???????????? ??????????????" />

                            </Tabs>
                        </Box>
                        <section className={style["modal-inner-body-container"]}>
                            {!!place && <InfoPage orderObj={orderObj} />}
                            {!!!place && <OrdersSection orders={orderObj.orders} />}

                        </section>
                        {!!!orderObj.deliverd && <section className={style["modal-inner-body-footer"]}>
                            <DeliverdBtn onClick={()=>handleChageStatus(orderObj.id)} variant="contained" color='success' sx={{ backgroundColor: "transparent", fontFamily: "IranSansBold", color: "#fff" }} >?????????? ???????? ????</DeliverdBtn>
                        </section>}
                    </div>
                </section>
            </div>

        </section>
    );
}

export default Infomodal;
