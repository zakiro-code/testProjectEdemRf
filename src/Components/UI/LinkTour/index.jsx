import React, {useContext} from 'react';
import styles from './LinkTour.module.scss';
import {CreateTourModalShowContext, FindTourModalShowContext} from "../../../context/context";

const LinkTour = ({link, purposeThisButton}) => {

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
        purposeThisButton === "findTour"
        ?
     <div className={styles.wrapper + ' ' + "LinkTour"}>
        <a href={link} className={styles.find} onClick={showHideModalFindFunc} >
            <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5001 10.9999H11.7101L11.4301 10.7299C12.6301 9.32989 13.2501 7.41989 12.9101 5.38989C12.4401 2.60989 10.1201 0.389893 7.32014 0.0498932C3.09014 -0.470107 -0.469863 3.08989 0.0501373 7.31989C0.390137 10.1199 2.61014 12.4399 5.39014 12.9099C7.42014 13.2499 9.33014 12.6299 10.7301 11.4299L11.0001 11.7099V12.4999L15.2501 16.7499C15.6601 17.1599 16.3301 17.1599 16.7401 16.7499C17.1501 16.3399 17.1501 15.6699 16.7401 15.2599L12.5001 10.9999ZM6.50014 10.9999C4.01014 10.9999 2.00014 8.98989 2.00014 6.49989C2.00014 4.00989 4.01014 1.99989 6.50014 1.99989C8.99014 1.99989 11.0001 4.00989 11.0001 6.49989C11.0001 8.98989 8.99014 10.9999 6.50014 10.9999Z"></path></svg>
            </div>
            <div className={styles.name}>Найти поездку</div>
        </a>
     </div>
        :
     <div className={styles.wrapper + ' ' + "LinkTour"}>
        <a href='' className={styles.create} onClick={showHideModalCreateFunc}>
            <div className={styles.icon}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"></path></svg>
            </div>
            <div className={styles.name}>Создать поездку</div>
        </a>
     </div>
    );
};

export default LinkTour;