
class Entity {
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
    //This code will throw and error because only one
    //constructor is allowed.
    // constructor(){
    //     this.name='Prabhu';
    //     this.height= 1.0;
    // }

    greet(){
        console.log(`Hi!, I'm ${this.name} form middle earth`);
    }

}
 
class Hobbit extends Entity {
    constructor(name, height) {
        super(name, height);
    }
}

export {Hobbit, Entity};
export default Entity;
