import { Component, AfterViewInit } from "@angular/core";
import { I18nService } from "../i18n.service";
declare var $: any;

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.less"]
})
export class TeamComponent implements AfterViewInit {
  public teamMembers = [
    {
      name: "Thomas",
      status: "Etudiant ingénieur informatique",
      city: "Strasbourg",
      image:
        "https://i.ibb.co/qrwdZbk/46506268-10212284130607627-6798569304104108032-n.jpg",
      description: "salut à tous",
      reddit: "https://www.reddit.com/user/AppliNHOUSTON",
      linkedin: "https://www.linkedin.com/in/thomas-martin-348238161/",
      github: "https://github.com/AppliNH",
      whatsapp:
        "https://api.whatsapp.com/send?phone=33649655776&text=Feel%20free%20to%20ask%20me%20anything%20:')",
      skills: {
        techSkills: [
          "HTML/CSS",
          "JavaScript",
          "React Native",
          "MySQL",
          "DynamoDB",
          "Angular",
          "API REST",
          "Swift",
          "Cordova",
          "Amazon Web Service"
        ],
        management: ["Merise", "Management", "SCRUM", "UX Design"],
        hobbies: ["Musique et Production", "Ableton", "Nage sportive"]
      }
    },
    {
      name: "Adil",
      status: "Etudiant ingénieur informatique",
      city: "Belfort",
      image:
        "https://i.ibb.co/X72TPpk/Whats-App-Image-2019-09-03-at-12-50-12.jpg",
      description: "salut à tous",
      facebook: "https://www.facebook.com/adil.mohammad.397",
      linkedin: "https://www.linkedin.com/in/adil-mohammad-aa8ab8192/",
      github: "https://github.com/admo-1",
      whatsapp:
        "https://api.whatsapp.com/send?phone=33651196451&text=Feel%20free%20to%20ask%20me%20anything%20:')",
      skills: {
        techSkills: [
          "C#",
          ".NET",
          "Ranorex",
          "SQL",
          "DynamoDB",
          "Amazon Web Services"
        ],
        management: [
          "UML",
          "Management, d'entreprise",
          "Tests Q&A",
          "Veille techno"
        ],
        hobbies: ["Ecrire", "Cinéma", "Basket ball"]
      }
    },
    {
      name: "Vincent",
      status: "Etudiant ingénieur informatique",
      city: "Strasbourg",
      image:
        "https://i.ibb.co/2kLcWR0/50938138-997490687110859-6259448490665967616-o.jpg",
      facebook: "https://www.facebook.com/vincent.galinier.35",
      description: "salut à tous",
      linkedin: "https://www.linkedin.com/in/vincentgln/",
      github: "https://github.com/vgalin",
      whatsapp:
        "https://api.whatsapp.com/send?phone=33785542023&text=Feel%20free%20to%20ask%20me%20anything%20:')",
      skills: {
        techSkills: [
          "Angular",
          "HTML/CSS",
          "JavaScript",
          "MySQL/SQL",
          "Python",
          "PHP",
          "JAVA",
          "Adobe Illustrator",
          "Amazon Web Services",
          "Ansible"
        ],
        management: ["TeamCity", "UI Design", "Software Design", "SCRUM"],
        hobbies: ["App's contests", "Jeux vidéo"]
      }
    },
    {
      name: "Séraphin",
      status: "Etudiant ingénieur informatique",
      city: "Besançon",
      // tslint:disable-next-line: max-line-length
      image: "https://i.ibb.co/k9C1VbK/87451332-798052107341463-4548458597977161728-o.jpg",
      description: "salut à tous",
      reddit: "https://www.reddit.com/user/CapiipaC",
      linkedin: "https://www.linkedin.com/in/s%C3%A9raphin-henry-22825b191/",
      github: "https://github.com/S-HENR",
      whatsapp:
        "https://api.whatsapp.com/send?phone=33689215200&text=Feel%20free%20to%20ask%20me%20anything%20:')",
      skills: {
        techSkills: [
          "C++",
          "HTML/CSS",
          "JavaScript",
          "MySQL/SQL",
          "DynamoDB",
          "PHP",
          "CodeIgniter",
          "Zend Framework",
          "Amazon Web Services"
        ],
        management: ["MVC", "Sécuritée API", "SCRUM"],
        hobbies: ["Films et séries", "Basket ball"]
      }
    }
  ];

  constructor(public i18nService: I18nService) {}

  ngAfterViewInit() {
    for (let index = 0; index < this.teamMembers.length; index++) {
      const cardId = "#card-member-" + index;
      const techSkillId = "#tech-skills-" + index;
      const techSkillDropdownId = "#dropdown-tech-skills-" + index;
      const hobbyId = "#hobbies-" + index;
      const hobbyDropdownId = "#dropdown-hobbies-" + index;
      const managementId = "#management-" + index;
      const managementDropdownId = "#dropdown-management-" + index;
      $(techSkillId).popup({
        popup: $(techSkillDropdownId),
        on: 'click',
        position: "bottom left"
      });
      $(hobbyId).popup({
        popup: $(hobbyDropdownId),
        on: 'click',
        position: "bottom left"
      });
      $(managementId).popup({
        popup: $(managementDropdownId),
        on: 'click',
        position: "bottom left"
      });
      if (index % 2 === 0) {
        $(cardId).transition("fade up in", "900ms");
      } else {
        $(cardId).transition("fade down in", "900ms");
      }
    }
  }
}
