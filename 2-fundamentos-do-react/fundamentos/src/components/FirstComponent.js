// Fundamentos 

import MyComponents from "./MyComponents";
import Events from "./Events";

const FirstComponent = () => { 
//essa função chama o componnete 'meu primeiro componente '
    return (
        <div>
            { /* Algum comentário */ }
            <h1>
                Meu primeiro componente
            </h1>
            <MyComponents/>
            <Events/>
        </div>
    );
};

export default FirstComponent;