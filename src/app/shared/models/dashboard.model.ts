export class Dashboard {

    constructor(
        public _id:string,
        public title: string,
        public description: string = ""
    ) {
        this._id = _id;
        this.title = title;
        this.description = description;
    }

}