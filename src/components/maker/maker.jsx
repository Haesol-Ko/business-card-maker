import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import {useHistory} from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Ellie',
            company: 'ea',
            theme: 'dark',
            title: 'developer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: 'ellie.png'
,        },
        {
            id: '2',
            name: 'Ellie',
            company: 'ea',
            theme: 'light',
            title: 'developer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
            },
        {
            id: '3',
            name: 'Ellie',
            company: 'ea',
            theme: 'colorful',
            title: 'developer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        }
    ]);
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        })
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/> {/* maker에서만 onLogout 전하는중 */}
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
}
export default Maker;