// Fundamentos 

import MyComponents from "./MyComponents";

const FirstComponent = () => { 
//essa função chama o componnete 'meu primeiro componente '
    return (
        <div>
            { /* Algum comentário */ }
            <h1>
                Meu primeiro componente
            </h1>
            <MyComponents/>
        </div>
    );
};

export default FirstComponent;