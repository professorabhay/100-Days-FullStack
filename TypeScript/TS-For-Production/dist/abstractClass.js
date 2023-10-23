"use strict";
class takePhoto {
    constructor(mode, filter) {
        this.mode = mode;
        this.filter = filter;
    }
}
// const akg = new takePhoto('test', 'test') // can't create object from abstracxt class
class telegram extends takePhoto {
    getSepia() {
        console.log("Sepia");
    }
}
const akg = new telegram('test', 'test'); // but can do from the class which extends / inherit the abstract class 
