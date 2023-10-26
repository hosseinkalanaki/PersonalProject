export class LanguageModel {

    constructor(
        name: string
        , reading: number
        , writing: number
        , speaking: number
        , listening: number
    ) {
        this.name = name;
        this.reading = reading;
        this.writing = writing;
        this.speaking = speaking;
        this.listening = listening;
    }

    public name: string;
    public reading: number;
    public writing: number;
    public speaking: number;
    public listening: number;
}
