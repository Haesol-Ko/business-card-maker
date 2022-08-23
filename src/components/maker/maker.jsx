import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import {useHistory} from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({FileInput, authService}) => {
    const [cards, setCards] = useState({
        '1': {
            id: '1',
            name: 'Ellie',
            company: 'ea',
            theme: 'dark',
            title: 'developer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: 'ellie.png',
            saved: true,
        },
        '2': {
            id: '2',
            name: 'Ellie',
            company: 'ea',
            theme: 'light',
            title: 'developer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
            saved: true,
        },
        '3': {
            id: '3',
            name: 'Ellie',
            company: 'ea',
            theme: 'colorful',
            title: 'developer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
            saved: true,
        },
});

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


    const createOrUpdateCard = card => {
        // setCards({...cards, [card.id]: card});

        // 동기적으로 작동 안 할수도 있다?
        // const updated = {...cards};
        // updated[card.id] = card;
        // setCards(updated);

        // 동기적으로 작동하나?
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    }

    const deleteCard = card => {
        setCards(cards => {
            // 근데.. 이렇게 하면 객체의 내부 값들은 참조값이 안바뀌지 않나.. 바뀔거만 바뀌면 되나
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/> {/* maker에서만 onLogout 전하는중 */}
            <div className={styles.container}>
                <Editor
                    FileInput={FileInput}
                    cards={cards}
                    addCard={createOrUpdateCard}
                    updateCard={createOrUpdateCard}
                    deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
}
export default Maker;