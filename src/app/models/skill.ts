
export class Skill {

    constructor(
        progress: number
        , name: string
        , order: number
    ) {
        this.progress = progress;
        this.name = name;
        this.order = order;
    }

    public order: number;
    public name: string;
    public progress: number;
}
