import React from 'react';
import LinkTour from "../LinkTour";
import MyButton from "../button/MyButton";
import classes from "./CreateOrFindTours.module.scss";

const CreateOrFindTours = (props) => {
    return (
        props.purpose === "createToursModule"
        ?
        <a href="/" className={classes.hyperlink} onClick={e => e.preventDefault()}>
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
        <a href="/" className={classes.hyperlink} onClick={e => e.preventDefault()}>
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