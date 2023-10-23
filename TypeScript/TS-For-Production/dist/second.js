"use strict";
// Interface is quite like a template or defined compulsory things 
class Instagram {
    // Only interface defined properties for now 
    constructor(cameraMode, filter, blur) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.blur = blur;
    }
}
class Youtube {
    // But We can addon some properties also 
    constructor(cameraMode, filter, blur, short // not defined in interface
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.blur = blur;
        this.short = short;
    }
}
