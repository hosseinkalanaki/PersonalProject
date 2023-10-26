export class SocialMediaModel {

    constructor(
        name: string
        , icon: string
        , address: string
    ) {
        this.name = name;
        this.icon = icon;
        this.address = address;
    }

    public name: string;
    public icon: string;
    public address: string;
}
