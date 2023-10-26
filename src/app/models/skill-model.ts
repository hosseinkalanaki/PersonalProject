export class SkillModel {

    constructor(
        order: number
        , name: string
        , progress: number
    ) {
        this.order = order;
        this.name = name;
        this.progress = progress;
    }

    public order: number;
    public name: string;
    public progress: number;
}
