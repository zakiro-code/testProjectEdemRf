import React, {useContext} from 'react';
import LinkTour from "../LinkTour";
import MyButton from "../button/MyButton";
import classes from "./CreateOrFindTours.module.scss";
import {CreateTourModalShowContext, FindTourModalShowContext} from "../../../context/context";
import MyModal from "../MyModal/MyModal";

const CreateOrFindTours = (props) => {


    const {isShowModalCreateTour, setIsShowModalCreateTour} = useContext(CreateTourModalShowContext);
    const showHideModalCreateFunc = (e) => {
        if(isShowModalCreateTour) {
            setIsShowModalCreateTour(false);
        } else {
            setIsShowModalCreateTour(true);
        }
        e.preventDefault()
    }

    const {isShowModalFindTour, setIsShowModalFindTour} = useContext(FindTourModalShowContext);
    const showHideModalFindFunc = (e) => {
        if(isShowModalFindTour) {
            setIsShowModalFindTour(false);
        } else {
            setIsShowModalFindTour(true);
        }
        e.preventDefault()
    }



    return (
        props.purpose === "createToursModule"
        ?
        <a href="/" className={classes.hyperlink} onClick={showHideModalCreateFunc}>
            <div className="wrapper">
                <span>
                    <LinkTour link="/" purposeThisButton="createTour"/>
                    <p>Просто укажите города отправления и прибытия, а также время выезда.</p>
                </span>
                <span className={classes.buttonCreate}>
                    <MyButton>
                        СОЗДАТЬ
                    </MyButton>
                </span>
            </div>
        </a>
        :
        <a href="/" className={classes.hyperlink} onClick={showHideModalFindFunc}>
            <div className="wrapper">
                <span>
                    <LinkTour link="/" purposeThisButton="findTour"/>
                    <p>Просто укажите города отправления и прибытия, а также время выезда. Выберите поездку, которая подходит именно вам! Если потребуется что-то уточнить, напиш ...</p>
                </span>
                <span className={classes.buttonFind}>
                    <MyButton>
                        НАЙТИ
                    </MyButton>
                </span>
            </div>
        </a>
    );
};

export default CreateOrFindTours;