import { EducationModel } from "./Education-model";
import { CertificateModel } from "./certificate-model";
import { ExperienceModel } from "./experience-model";
import { LanguageModel } from "./language-model";
import { PersonalInformationModel } from "./personal-information-model";
import { ProjectsModel } from "./projects-model";
import { SkillModel } from "./skill-model";
import { SocialMediaModel } from "./social-media-model";

export class JsonData {

    constructor(
        certificats: CertificateModel[]
        , educations: EducationModel[]
        , experiences: ExperienceModel[]
        , language: LanguageModel[]
        , profileSummary: string
        , projects: ProjectsModel[]
        , skills: SkillModel[]
        , socialMedia: SocialMediaModel[]
        , personalInformation: PersonalInformationModel
    ) {
        this.certificats = certificats;
        this.educations = educations;
        this.experiences = experiences;
        this.language = language;
        this.profileSummary = profileSummary;
        this.projects = projects;
        this.skills = skills;
        this.socialMedia = socialMedia;
        this.personalInformation = personalInformation;
    }

    public certificats: CertificateModel[];
    public educations: EducationModel[];
    public experiences: ExperienceModel[];
    public language: LanguageModel[];
    public profileSummary: string;
    public projects: ProjectsModel[];
    public skills: SkillModel[];
    public socialMedia: SocialMediaModel[];
    public personalInformation: PersonalInformationModel;
}
