export class ExperienceModel {

    constructor(
        name: string
        , companyName: string
        , Location: string
        , duration: string
        , description: string[]
    ) {
        this.name = name;
        this.companyName = companyName;
        this.Location = Location;
        this.duration = duration;
        this.description = description;
    }

    public name: string;
    public companyName: string;
    public Location: string;
    public duration: string;
    public description: string[];
}
