
export class CertificateModel {

    constructor(
        name: string
        , institute: string
        , point: string
        , date: string
    ) {
        this.name = name;
        this.institute = institute;
        this.point = point;
        this.date = date;
    }

    public name: string;
    public institute: string;
    public point: string;
    public date: string;
}
