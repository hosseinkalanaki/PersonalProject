export class SocialMediaModel {

    constructor(
        name: string
        , icon: string
        , address: string
        ,link: string
    ) {
        this.name = name;
        this.icon = icon;
        this.address = address;
        this.link = link;
    }

    public name: string;
    public icon: string;
    public address: string;
    public link: string;
}
