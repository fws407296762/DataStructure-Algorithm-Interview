class Node{
    public element;
    public next:Node = null;
    public prev:Node = null;
    constructor(element){
        this.element = element;
    }
}
export default Node;