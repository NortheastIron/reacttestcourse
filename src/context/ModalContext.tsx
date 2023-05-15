import {createContext, useState} from 'react';

interface IModalContext {
    modal: boolean;
    disabled: boolean;
    open: () => void;
    close: () => void;
    onDisabled: () => void;
    onUnDisabled: () => void;
}
//использовать для сверления каких либо реквизитов ... но стараться избегать!!!
export const ModalContext = createContext<IModalContext>({
    modal: false,
    disabled: false,
    open: () => {},
    close: () => {},
    onDisabled: () => {},
    onUnDisabled: () => {}
});

export const ModalState = ({children}: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const open = () => setModal(true);
    const close = () => setModal(false);
    const onDisabled = () => setDisabled(true);
    const onUnDisabled = () => setDisabled(false);

    return (
        <ModalContext.Provider value={{modal, open, close, disabled, onDisabled, onUnDisabled}}>
            { children }
        </ModalContext.Provider>
    )
};
