import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import LinkTour from "../LinkTour";
import NoticeCounter from "../Notice-counter";
import styles from './Navbar.module.scss';
import { useNavigate } from 'react-router-dom';
import MyModal from "../MyModal/MyModal";
import {CreateTourModalShowContext, FindTourModalShowContext} from "../../../context/context";

const Navbar = () => {
    const router = useNavigate();
    const [chatCounter, useChatCounter] = useState(0 );
    const [notificationCounter, useNotificationCounter] = useState(54);
    const [dropDownIsActive, setDropDownIsActive] = useState(true)

    const rotateDropDown = () => {
        const el = document.querySelector(`.${styles.dropdown}`);
        {
            if(dropDownIsActive) {
                el.className = `${styles.dropdown} ${styles.active}`;
                setDropDownIsActive(false);
            } else {
                el.className = `${styles.dropdown}`;
                setDropDownIsActive(true);
            }
        }
    };

    const {isShowModalCreateTour, setIsShowModalCreateTour} = useContext(CreateTourModalShowContext);
    const {isShowModalFindTour, setIsShowModalFindTour} = useContext(FindTourModalShowContext);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className="header_logo">
                    <a className="header_logo_svg" onClick={() => router(`/`)}>
                        <svg width="164" height="40" viewBox="0 0 164 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.8051 12.0985C55.6182 12.0985 53.7351 12.7445 52.1547 14.0364C50.5743 15.3287 49.4958 17.1071 48.9195 19.3731C48.7205 20.2279 48.611 20.725 48.5916 20.8637C48.4918 21.4004 48.4424 22.0068 48.4424 22.6823C48.4424 24.4516 48.9591 25.8129 49.993 26.7669C51.0263 27.7209 52.4975 28.198 54.4058 28.198C55.7775 28.198 57.0343 27.9642 58.1778 27.4972C59.3207 27.0305 60.245 26.4789 60.9509 25.8426C61.6562 25.2067 62.0787 24.65 62.2181 24.1731C62.2578 23.9941 62.2279 23.8452 62.1286 23.7257C62.029 23.6064 61.8901 23.5468 61.7112 23.5468H59.0873C58.8488 23.5468 58.6698 23.5719 58.5506 23.6213C58.4312 23.6712 58.2622 23.8052 58.0437 24.0238C57.1291 24.9383 56.1055 25.3951 54.9725 25.3951C54.157 25.3951 53.536 25.132 53.109 24.6051C52.6812 24.0786 52.4678 23.3975 52.4678 22.5629C52.4678 22.2452 52.4977 21.9069 52.5572 21.5492L52.6168 21.3107H62.4867C62.7051 21.3107 62.8989 21.2413 63.068 21.1021C63.2368 20.9633 63.341 20.7941 63.3811 20.5953L63.5302 19.9691C63.6891 19.1342 63.7689 18.389 63.7689 17.7331C63.7689 15.9843 63.2666 14.6077 62.263 13.6038C61.259 12.6004 59.7731 12.0983 57.8053 12.0983L57.8051 12.0985ZM59.6836 18.7171V18.7769H53.1534V18.7171C53.3921 17.5447 53.8788 16.6055 54.6146 15.8998C55.3498 15.1946 56.2247 14.8414 57.2385 14.8414C58.0733 14.8414 58.7092 15.0849 59.1468 15.5717C59.584 16.059 59.8028 16.7195 59.8028 17.5544C59.8028 17.9523 59.7627 18.3398 59.6836 18.7171ZM73.4053 5.53931C73.1865 5.53931 73.0028 5.60938 72.8536 5.74808C72.7046 5.88726 72.6301 6.06621 72.6301 6.28476V7.80517C72.6301 8.02405 72.6994 8.19786 72.8387 8.32694C72.9776 8.45634 73.1563 8.52064 73.3754 8.52064C75.3436 8.60017 76.7599 9.00281 77.6245 9.72806C78.4891 10.4538 78.9216 11.5618 78.9216 13.0524C78.9216 13.6091 78.8619 14.2351 78.7426 14.9305C77.6691 13.6984 76.2677 13.082 74.5384 13.082C72.3119 13.082 70.4982 13.6636 69.0967 14.8261C67.6953 15.9888 66.7359 17.5942 66.2192 19.641C66.0403 20.3171 65.9109 20.923 65.8316 21.4597C65.7521 21.8772 65.7124 22.3243 65.7124 22.8015C65.7124 24.471 66.2688 25.7881 67.3822 26.7518C68.4951 27.7161 70.0555 28.1978 72.0636 28.1978C74.4287 28.1978 76.3274 27.6067 77.7586 26.4239C79.1898 25.2415 80.1836 23.5868 80.7404 21.4598C81.1379 20.1285 81.4063 18.9854 81.5455 18.0315C81.8832 16.3021 82.0524 14.7918 82.0524 13.4996C82.0524 10.896 81.3562 8.9284 79.9651 7.59656C78.5735 6.26504 76.3869 5.57939 73.4051 5.53931H73.4053ZM77.0728 19.7903C77.0132 20.1285 76.8837 20.6355 76.6853 21.3109C76.3668 22.5831 75.8354 23.5469 75.0899 24.2029C74.3445 24.8587 73.4351 25.1866 72.3616 25.1866C71.4867 25.1866 70.8455 24.9734 70.4382 24.5457C70.0306 24.1184 69.8271 23.4677 69.8271 22.5929C69.8271 22.1558 69.8667 21.7283 69.9464 21.3109C70.0255 20.8933 70.1447 20.3866 70.3041 19.7903C70.6814 18.5582 71.2183 17.634 71.9142 17.0178C72.6099 16.4019 73.514 16.0935 74.6276 16.0935C75.4425 16.0935 76.0688 16.3319 76.5061 16.809C76.9432 17.2859 77.162 17.9418 77.162 18.7768C77.162 19.0949 77.1322 19.4326 77.0727 19.7903H77.0728ZM93.0549 12.0985C90.8681 12.0985 88.9849 12.7445 87.4045 14.0364C85.8241 15.3287 84.7458 17.1071 84.1692 19.3731C83.9703 20.2279 83.8608 20.725 83.8413 20.8637C83.7417 21.4004 83.6922 22.0068 83.6922 22.6823C83.6922 24.4516 84.2089 25.8129 85.2427 26.7669C86.2761 27.7209 87.7474 28.198 89.6559 28.198C91.0274 28.198 92.2843 27.9642 93.4279 27.4972C94.5707 27.0305 95.4951 26.4789 96.2008 25.8426C96.9062 25.2067 97.3288 24.65 97.4681 24.1731C97.5077 23.9941 97.4779 23.8452 97.3786 23.7257C97.2789 23.6064 97.1402 23.5468 96.9612 23.5468H94.3373C94.0987 23.5468 93.9199 23.5719 93.8005 23.6213C93.6813 23.6712 93.5121 23.8052 93.2936 24.0238C92.3791 24.9383 91.3555 25.3951 90.2225 25.3951C89.4071 25.3951 88.786 25.132 88.3589 24.6051C87.9311 24.0786 87.7178 23.3975 87.7178 22.5629C87.7178 22.2452 87.7478 21.9069 87.8073 21.5492L87.867 21.3107H97.7366C97.9551 21.3107 98.149 21.2413 98.3179 21.1021C98.4867 20.9633 98.591 20.7941 98.6311 20.5953L98.7803 19.9691C98.9391 19.1342 99.0188 18.389 99.0188 17.7331C99.0188 15.9843 98.5165 14.6077 97.513 13.6038C96.509 12.6004 95.0232 12.0983 93.0552 12.0983L93.0549 12.0985ZM94.9334 18.7171V18.7769H88.4034V18.7171C88.6419 17.5447 89.1288 16.6055 89.8644 15.8998C90.5996 15.1946 91.4745 14.8414 92.4883 14.8414C93.3231 14.8414 93.9592 15.0849 94.3966 15.5717C94.8337 16.059 95.0527 16.7195 95.0527 17.5544C95.0527 17.9523 95.0126 18.3398 94.9334 18.7171ZM119.944 12.5606C119.844 12.4517 119.715 12.3966 119.556 12.3966H116.873C116.515 12.3966 116.217 12.5657 115.978 12.9034L109.806 21.311L106.884 12.9034C106.765 12.5657 106.536 12.3966 106.198 12.3966H103.783C103.623 12.3966 103.47 12.4564 103.321 12.5755C103.172 12.6948 103.087 12.8244 103.067 12.9631L100.026 27.2739C99.9858 27.4528 100.016 27.6018 100.115 27.7211C100.215 27.8404 100.354 27.9 100.533 27.9H103.157C103.355 27.9 103.524 27.8404 103.664 27.7211C103.803 27.6019 103.892 27.4528 103.932 27.2739L105.781 18.5085L107.868 24.7992C107.947 25.0181 108.042 25.1919 108.151 25.321C108.26 25.4504 108.424 25.5147 108.643 25.5147H109.389C109.607 25.5147 109.791 25.4602 109.94 25.3507C110.089 25.2416 110.263 25.0576 110.462 24.7991L114.905 18.7468L113.086 27.2737C113.046 27.4527 113.076 27.6016 113.176 27.7209C113.275 27.8402 113.414 27.8999 113.593 27.8999H116.247C116.426 27.8999 116.589 27.8402 116.739 27.7209C116.888 27.6018 116.972 27.4527 116.992 27.2737L120.033 12.9629C120.073 12.8042 120.043 12.6699 119.944 12.5604V12.5606ZM137.554 12.0986C135.407 12.0986 133.598 12.864 132.127 14.3942L132.425 13.0824C132.465 12.864 132.43 12.6948 132.321 12.5755C132.212 12.4564 132.057 12.3966 131.859 12.3966H130.606C130.388 12.3966 130.204 12.4615 130.055 12.5903C129.906 12.7198 129.821 12.8838 129.801 13.0822L126.14 30.3035C126.1 30.5219 126.13 30.691 126.229 30.8103C126.328 30.9296 126.478 30.9893 126.677 30.9893H128.019C128.217 30.9893 128.396 30.9245 128.555 30.7956C128.714 30.666 128.813 30.502 128.853 30.3036L129.772 25.9321C130.527 27.4429 131.979 28.198 134.125 28.198C136.212 28.198 137.912 27.5373 139.224 26.2153C140.536 24.8937 141.45 23.2091 141.967 21.1618C142.126 20.5856 142.275 19.9096 142.415 19.1343C142.534 18.4785 142.594 17.8427 142.594 17.2264C142.594 15.676 142.186 14.4342 141.371 13.4996C140.556 12.5656 139.284 12.0985 137.555 12.0985L137.554 12.0986ZM139.641 19.2838C139.562 19.7807 139.442 20.357 139.283 21.013C138.906 22.4641 138.294 23.6367 137.45 24.5311C136.605 25.4255 135.467 25.8728 134.035 25.8728C132.882 25.8728 132.028 25.5448 131.471 24.8889C130.914 24.233 130.636 23.4182 130.636 22.4442C130.636 22.1065 130.666 21.7584 130.726 21.4007C130.785 21.0234 130.944 20.2483 131.203 19.0752C131.521 17.8035 132.132 16.71 133.037 15.7956C133.941 14.8816 135.089 14.4243 136.481 14.4243C138.667 14.4243 139.761 15.5674 139.761 17.8528C139.761 18.3498 139.72 18.8268 139.641 19.2839V19.2838ZM161.581 13.9322C160.507 12.9087 158.927 12.3967 156.84 12.3967H154.156C151.691 12.3967 149.693 13.0033 148.163 14.2154C146.632 15.4281 145.599 17.058 145.062 19.1048C144.843 20.099 144.694 20.7848 144.615 21.1621C144.555 21.5795 144.525 21.9773 144.525 22.3546C144.525 24.0046 145.057 25.3412 146.12 26.3647C147.184 27.3885 148.769 27.9 150.876 27.9L150.375 30.3038C150.335 30.5021 150.365 30.6662 150.465 30.7957C150.564 30.9248 150.713 30.9894 150.912 30.9894H152.224C152.422 30.9894 152.601 30.9247 152.761 30.7957C152.919 30.6662 153.019 30.5021 153.059 30.3038L153.56 27.9C156.064 27.9 158.072 27.2941 159.583 26.0814C161.093 24.8691 162.117 23.2294 162.654 21.1621C162.853 20.2877 163.002 19.6019 163.101 19.1048C163.161 18.7075 163.191 18.3199 163.191 17.9422C163.191 16.2927 162.654 14.956 161.581 13.9322ZM151.353 25.664C148.57 25.664 147.179 24.4914 147.179 22.1458C147.179 21.7881 147.209 21.4005 147.268 20.9831C147.447 20.1482 147.576 19.5921 147.656 19.3136C148.471 16.1933 150.489 14.6328 153.709 14.6328L151.353 25.6638V25.664ZM160.448 19.3136C160.288 20.1088 160.159 20.6655 160.06 20.9831C159.245 24.1038 157.227 25.664 154.007 25.664L156.363 14.6329C159.146 14.6329 160.537 15.8058 160.537 18.1509C160.537 18.5087 160.507 18.8962 160.448 19.3138V19.3136ZM122.685 23.4842C121.473 23.4842 120.298 24.4664 120.061 25.6778C119.824 26.8892 120.615 27.8713 121.827 27.8713C123.039 27.8713 124.213 26.8892 124.45 25.6778C124.688 24.4664 123.897 23.4842 122.685 23.4842Z" fill="#43B02A"></path>
                            <path d="M40.6655 14.7519C40.9456 15.5353 41.1739 16.4899 40.5859 17.0354C40.2225 17.3695 39.6071 17.4358 38.9563 17.4111C38.3531 17.3915 37.7169 17.289 37.235 17.2438C36.9169 17.2247 36.6354 17.2688 36.5007 17.2799C36.0881 17.3157 35.364 17.6429 35.0217 17.7964C34.6166 17.9862 34.2467 18.2027 33.9193 18.4711C33.3203 18.9464 32.8089 19.5344 32.318 20.0978C31.6043 20.9094 30.894 21.7013 30.107 22.4509C28.295 24.1751 25.713 24.9163 22.9647 24.8226C22.5008 24.8088 22.0383 24.767 21.5687 24.6996C20.4445 24.5629 18.3819 24.0704 17.0355 24.0249C16.7283 24.0122 16.4649 24.0231 16.2479 24.0672C15.5403 24.1966 14.8609 24.3918 14.1899 24.5842C14.054 24.6233 13.9097 24.6648 13.7788 24.7208C18.2962 29.7132 26.7704 32.3835 32.6551 28.0236C34.1804 26.8691 35.311 25.3316 35.9569 23.5471C36.0584 23.2607 36.1258 22.9839 36.2082 22.6937C36.3481 22.0287 36.8743 21.6203 37.5528 21.6463C37.7286 21.6508 37.9231 21.6869 38.1184 21.7595L40.0263 22.4157C40.9942 22.7445 41.5598 23.6574 41.3834 24.5168L41.3436 24.666C38.8079 37.2394 21.9049 37.7368 12.4858 31.2695C4.53168 25.8421 1.45316 16.0614 4.84673 8.77974C7.48844 3.11132 13.7563 -0.134429 19.8803 0.00427143C27.5882 0.273013 35.7419 5.2295 39.5226 12.2129C39.9764 13.057 40.3574 13.9033 40.6657 14.752L40.6655 14.7519ZM27.4555 19.1508C28.2127 16.9853 26.8654 14.3117 24.3998 13.1539C23.7089 12.8285 22.9973 12.656 22.3212 12.6387C20.6119 12.5777 19.1214 13.4377 18.5615 14.9765C17.7827 17.1301 19.1519 19.8155 21.5979 20.97C22.2891 21.2953 23.0004 21.4678 23.6767 21.4853C25.3966 21.5522 26.8959 20.6898 27.4555 19.1508ZM34.3758 10.9811C34.265 10.8086 34.149 10.6386 34.0284 10.4709C28.9394 3.40363 15.3032 0.779386 10.4625 8.60785C8.43472 11.8877 8.71545 16.0244 9.25797 18.1945C9.33833 18.5154 9.42768 18.8159 9.55794 19.1202C9.69558 19.4406 9.75814 19.5498 9.47324 19.7542C8.8688 20.1875 8.26372 20.64 7.7151 21.0962C7.29337 21.4468 6.91592 21.8591 6.85191 22.3711C6.75743 23.1258 7.39251 23.7321 8.37424 23.7818C11.3005 23.823 16.5162 23.0179 19.9133 22.6623C20.8019 22.5693 20.2767 22.53 19.7348 22.1902C17.1921 20.5954 15.6468 17.8034 15.8829 15.2026L15.8823 15.2031C16.1598 12.0513 18.9404 10.1818 22.081 10.2901C24.9572 10.3901 27.9899 12.2363 29.2536 14.9013C29.7386 15.9234 29.997 17.1499 29.7682 18.2726C29.679 18.7107 29.5876 18.714 30.0255 18.4435C30.0729 18.4142 30.1234 18.3832 30.1763 18.3505C31.7564 17.3776 35.9121 14.8676 37.368 13.7863C37.9482 13.3552 38.193 12.6558 37.9104 12.1685C37.5949 11.6238 37.0581 11.5526 36.492 11.5287C36.3767 11.5258 35.6981 11.5494 35.2097 11.5491C34.5266 11.5489 34.7472 11.5592 34.376 10.9811H34.3758Z" fill="#0762C8"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3952 21.2495C16.468 20.2515 15.774 19.1363 15.3972 17.8474C15.1041 16.8449 15.2499 16.5962 14.4445 17.1621C13.2154 18.0251 12.1429 18.7867 10.9265 19.668C10.0143 20.3286 9.08024 20.9751 8.21384 21.6951C8.00338 21.87 7.66218 22.1772 7.62577 22.4675C7.57764 22.8523 8.1123 22.9843 8.40121 23.0019C10.4191 23.0285 12.6341 22.7454 14.6404 22.5064C15.4481 22.4102 16.0344 22.3349 16.8433 22.2342C18.3684 22.0446 18.3047 22.2282 17.3952 21.2495Z" fill="#43B02A"></path>
                            <path d="M0.0177238 18.6227C0.0700188 17.3516 0.279361 16.0095 0.624412 14.7793C0.787393 14.1974 1.04197 14.2967 1.03234 14.7957C0.888614 22.0794 5.08554 29.1587 11.1065 33.2813C16.8487 37.2127 25.0011 38.8092 31.7817 37.1312C31.8006 37.1264 31.8199 37.1214 31.8388 37.1169C32.2734 37.0101 32.3345 37.3873 31.9963 37.597C31.8133 37.7105 31.6041 37.8343 31.3675 37.9669C28.5091 39.5675 24.3343 40.2113 20.2346 39.9395C8.94992 39.1909 -0.457263 30.1516 0.0177238 18.6227Z" fill="#43B02A"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3776 16.0296C30.4274 16.2431 30.4591 16.4024 30.4858 16.6167C30.5827 17.3924 30.625 17.2512 31.4088 16.7738C32.153 16.3207 32.6825 16.0025 33.4194 15.5433C34.5892 14.8145 35.8513 14.0519 36.9558 13.2314C37.1149 13.1132 37.4417 12.7375 37.3122 12.5143C37.146 12.2273 36.7572 12.2309 36.475 12.219C35.6489 12.1989 34.8025 12.2283 33.9765 12.2583C32.421 12.3149 30.8656 12.392 29.3117 12.4778C28.4219 12.5265 28.4732 12.5985 28.9546 13.1654C29.6099 13.9366 30.1497 15.0506 30.3776 16.0296Z" fill="#43B02A"></path>
                            <path d="M26.4987 18.4427C26.8148 16.7523 25.6587 14.8399 23.8492 14.1012C23.0256 13.7662 21.7059 13.6788 20.6208 14.242C20.1179 14.5028 20.4896 14.5506 20.9678 14.5158C23.6873 14.3183 26.0621 16.7698 25.3338 19.7444C25.2794 19.9662 25.1136 20.5434 25.533 20.1493C25.9841 19.7258 26.3991 18.9749 26.4987 18.4427Z" fill="#43B02A"></path>
                        </svg>
                    </a>
                    <div className={styles.logo_title}>
                        Совместные поездки
                        на автомобиле
                    </div>
                </div>
                <div className={styles.tour}>
                    <LinkTour link="/" purposeThisButton="findTour"/>
                    <LinkTour link="/" purposeThisButton="createTour" />
                </div>
                <div className={styles.auth_box}>
                    <div>
                        <a href="#" onClick={e => e.preventDefault()}>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 0.75C12.7969 0.75 14.4766 1.14062 16 1.84375C17.5234 2.58594 18.7344 3.5625 19.6328 4.8125C20.5312 6.0625 21 7.39062 21 8.875C21 10.3594 20.5312 11.7266 19.6328 12.9766C18.7344 14.2266 17.5234 15.2031 16 15.9062C14.4766 16.6484 12.7969 17 11 17C9.51562 17 8.14844 16.7656 6.82031 16.2578C6.11719 16.8047 5.41406 17.2344 4.67188 17.5469C3.57812 18.0156 2.44531 18.25 1.3125 18.25C1.15625 18.25 1.07812 18.2109 1.03906 18.0547C0.960938 17.9375 1 17.8203 1.07812 17.7031C1.3125 17.4688 1.58594 17.1172 1.97656 16.5703C2.60156 15.6719 2.99219 14.8125 3.22656 13.9922C2.52344 13.2891 1.97656 12.4688 1.58594 11.6094C1.19531 10.75 1 9.85156 1 8.875C1 7.39062 1.42969 6.0625 2.32812 4.8125C3.22656 3.5625 4.4375 2.58594 5.96094 1.84375C7.48438 1.14062 9.16406 0.75 11 0.75Z"></path>
                            </svg>
                            <NoticeCounter props={chatCounter}/>
                        </a>
                    </div>
                    <div>
                        <a href="#" onClick={e => e.preventDefault()}>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99999 20C9.09999 20 9.99999 19.1 9.99999 18H5.99999C5.99999 19.1 6.88999 20 7.99999 20ZM14 14V9C14 5.93 12.36 3.36 9.49999 2.68V2C9.49999 1.17 8.82999 0.5 7.99999 0.5C7.16999 0.5 6.49999 1.17 6.49999 2V2.68C3.62999 3.36 1.99999 5.92 1.99999 9V14L0.70999 15.29C0.0799904 15.92 0.51999 17 1.40999 17H14.58C15.47 17 15.92 15.92 15.29 15.29L14 14Z"></path>
                            </svg>
                            <NoticeCounter props={notificationCounter}/>
                        </a>
                    </div>
                    <div className={styles.auth_cell_user} onClick={rotateDropDown}>
                        <a href="" onClick={e => e.preventDefault()}>
                            <img src="/img/avatar32x32.jpg" alt="header auth user avatar"/>
                            <div className={styles.user_link_name}>
                                Оксана
                            </div>
                            <div className={styles.dropdown}>
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00699 0H10.993C11.2727 0 11.5105 0.0978044 11.7063 0.293413C11.9021 0.489022 12 0.726547 12 1.00599C12 1.28543 11.9021 1.52295 11.7063 1.71856L6.71329 6.70659C6.51748 6.9022 6.27972 7 6 7C5.72028 7 5.48252 6.9022 5.28671 6.70659L0.293706 1.71856C0.0979021 1.52295 0 1.28543 0 1.00599C0 0.726547 0.0979021 0.489022 0.293706 0.293413C0.48951 0.0978044 0.727273 0 1.00699 0Z"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <MyModal visible={isShowModalCreateTour} setVisible={setIsShowModalCreateTour}>
                <div>
                    <span>Создать</span>
                    <span onClick={() => setIsShowModalCreateTour(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                            <path d="M12.7247 0.709971C12.3666 0.319971 11.788 0.319971 11.4298 0.709971L6.93901 5.58997L2.44819 0.699971C2.09003 0.309971 1.51146 0.309971 1.1533 0.699971C0.795133 1.08997 0.795133 1.71997 1.1533 2.10997L5.64411 6.99997L1.1533 11.89C0.795133 12.28 0.795133 12.91 1.1533 13.3C1.51146 13.69 2.09003 13.69 2.44819 13.3L6.93901 8.40997L11.4298 13.3C11.788 13.69 12.3666 13.69 12.7247 13.3C13.0829 12.91 13.0829 12.28 12.7247 11.89L8.23391 6.99997L12.7247 2.10997C13.0737 1.72997 13.0737 1.08997 12.7247 0.709971Z" fill="#9DACBF"/>
                        </svg>
                    </span>
                </div>
                <input type="text" placeholder="Дата выезда"/>
                <input type="text" placeholder="Дата прибытия"/>
                <MyButton>
                    Создать
                </MyButton>
            </MyModal>
            <MyModal visible={isShowModalFindTour} setVisible={setIsShowModalFindTour}>
                <h1>Найти</h1>
            </MyModal>
        </header>
    );
};

export default Navbar;