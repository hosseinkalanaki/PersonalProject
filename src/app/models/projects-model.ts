export class ProjectsModel {

    constructor(
        name: string
        , type: string
        , customer: string
        , link: string
        , linkAddress: string
        , date: string
    ) {
        this.name = name;
        this.type = type;
        this.customer = customer;
        this.link = link;
        this.linkAddress = linkAddress;
        this.date = date;
    }

    public name: string;
    public type: string;
    public customer: string;
    public link: string;
    public linkAddress: string;
    public date: string;
}
