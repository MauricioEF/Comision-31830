class FileContainer {
    constructor(path){
        this.path =path;
    }

    getAll = () =>{
        return [...this.elements];
    }
    save = (newElement) =>{
        this.elements.push(newElement);
        return newElement;
    }
}

export default FileContainer;