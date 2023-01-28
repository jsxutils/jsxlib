class jSum {
    constructor() {
        Array.prototype.jSum = function () {
            let obj: any = 0;
            this.forEach((key) => {
                obj += key;
            });
            return obj;
        };
    }
}
export const sum = new jSum();
