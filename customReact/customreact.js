function customReact(reactElement,container){
    /*
    const docElement = document.createElement(reactElement.type);
    docElement.innerHTML = reactElement.children;
    docElement.setAttribute('herf',reactElement.props.href)
    docElement.setAttribute('target',reactElement.props.target)

    container.append(docElement)
    */

    const docElement = document.querySelector('#root');
    docElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        docElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.append(docElement);
}

const reactElement =  {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : "click here for viste"
}

const mainContainer = document.querySelector("#root")

customReact(reactElement,mainContainer);