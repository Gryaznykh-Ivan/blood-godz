import { createElement } from 'react'
import ReactDOM from 'react-dom'

export interface PopupResponse {
    isDenied: boolean,
    isConfirmed: boolean,
    isClosed: boolean
}

const CreatePopup = (component: ({}: any) => JSX.Element, props: any): Promise<PopupResponse> => {
    const element = document.createElement('div');
    element.setAttribute('id', 'popup');
    document.body.appendChild(element);

    return new Promise((resolve, reject) => {
        const customResolve = (result: PopupResponse) => {
            document.querySelector('#popup')?.remove();
            return resolve(result);
        }

        return ReactDOM.render(createElement(component, { ...props, resolve: customResolve }), element);
    });
}

const ShowPopup = async (component: ({}: any) => JSX.Element, props: any): Promise<PopupResponse> => {
    return await CreatePopup(component, props);
}  

export {
    ShowPopup
};