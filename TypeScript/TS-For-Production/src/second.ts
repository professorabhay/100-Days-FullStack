// Interface is quite like a template or defined compulsory things 

interface TakePhoto {
    cameraMode: string
    filter: string
    blur: number
}

class Instagram implements TakePhoto {
    // Only interface defined properties for now 
    constructor(
        public cameraMode: string,
        public filter: string,
        public blur: number
    ){}
}



class Youtube implements TakePhoto {
    // But We can addon some properties also 
    constructor(
        public cameraMode: string,
        public filter: string,
        public blur: number,
        public short: string // not defined in interface
    ){}
}