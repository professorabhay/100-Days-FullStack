abstract class takePhoto {
    constructor(
        public mode: string,
        public filter: string
    ){}

    abstract getSepia(): void 
}

// const akg = new takePhoto('test', 'test') // can't create object from abstracxt class

class telegram extends takePhoto{
    getSepia(): void {
        console.log("Sepia")
    }
}

const akg = new telegram('test', 'test') // but can do from the class which extends / inherit the abstract class 