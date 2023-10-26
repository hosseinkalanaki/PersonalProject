export class EducationModel {

    constructor(
        name: string
        , branche: string
        , institute: string
        , Location: string
        , duration: string
    ) {
        this.name = name;
        this.branche = branche;
        this.institute = institute;
        this.Location = Location;
        this.duration = duration;
    }

    public name: string;
    public branche: string;
    public institute: string;
    public Location: string;
    public duration: string;
}
