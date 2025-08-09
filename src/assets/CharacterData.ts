import { CharacterDetails, RulerDetails } from '../components/Collection/Collection.types';

export const Rulers: RulerDetails[] = [
  {
    ruler: {
      name: 'Marcus Aurelius',
      reign: '161-180 AD',
    },
    title: 'Roman Emperor',
    imagePath: '/Images/Characters/MarcusAurelius.webp',
    descriptionParagraphs: [
      'Marcus Aurelius Antoninus was the last of the “5 Good Emperors”, who ruled Rome from 96 to 180. This time period is often considered the golden age of Rome, from the peak of the Empire’s borders under Trajan to the peace and prosperity brought by Antoninus Pius. Marcus is often referred to as the “Philosopher Emperor”, for his staunch belief in Stoic philosophy, surviving in his work “Meditations” to this day.',
      'Marcus was born into an upper class family with ties to the ruling Nerva-Antonine dynasty. He excelled in his education and caught the eye of then-emperor Hadrian. Hadrian introduced Marcus to the public offices in 138, when he convinced the Senate to grant Marcus the role of Quaestor (a public office with an age requirement of 24) at just 17 years old.',
      'However, Marcus was too young to inherit the Empire during Hadrian’s reign. Instead, Hadrian adopted Antoninus Pius (r. 138-161) under the promise that Marcus would be Antoninus’ heir.',
      'Upon Hadrian’s death, Antoninus appointed Marcus as Caesar (Heir to the Throne), and insisted Marcus live at the Imperial Palace. Even at this time, Marcus was a strong believer in Stoic philosophy and simple living. He wrote to himself: “See that you do not turn into a Caesar; do not be dipped into the purple dye, for that can happen”.',
      'When Antoninus died in 161, Marcus ascended to the throne with his adoptive brother Lucius Verus. Marcus handled the administration in Rome, and Lucius managed the military until his death in 169, leaving Marcus as the sole Emperor.',
      'Marcus’ reign was marked with constant struggle and strife within the Empire, consoled only by his incredible leadership. He saw Rome through war against Parthia (161-166), and the Germanic Tribes (166-180). He was regarded as “an emperor most skilled in the law”, involved the Senate in financial decisions despite no obligation to do so, and once even increased the silver purity in the Denarius. Increasing silver purity in coins was extremely uncommon, as decreasing purity generated money for the Emperor by passing off lower-quality silver at a pre-determined worth.',
      'Most notably, Marcus saw the empire through the Antonine Plague (likely Measles or Smallpox), which ravaged Rome for 15 years from 165-180, and claimed the lives of 5-10 million Romans, especially the army. At the time, this was 6-13% of the entire population. The impact on the army was so devastating, Marcus was forced to recruit “gladiators, slaves and bandits” to continue the war against the Germanic Tribes.',
      'Despite the persistent troubles of his reign, Marcus’ unbreakable leadership, skill and conviction to improve the empire saw Rome through some of its darkest hours, earning him the reputation he has today.',
    ],
  },
  {
    ruler: {
      name: 'Antoninus Pius',
      reign: '138-161 AD',
    },
    title: 'Roman Emperor',
    imagePath: '/Images/Characters/AntoninusPius.webp',
    descriptionParagraphs: [
      'One of the “5 Good Emperors”, Antoninus Pius was arguably the most effective and competent Emperor Rome ever saw. His 23 year rule was the first complete reign of a Roman Emperor without a single war.',
      'Born into a senatorial family, Antoninus held various public offices during the reign of Emperor Hadrian. After notable success in his roles, he became Consul in 120, before being promoted by Hadrian to Proconsul of Italia (Governor of the Italian Peninsula). He later served as Proconsul of Asia (Governor of West Turkey) from 134-135, with notable success.',
      'In 138, Hadrian’s adopted son and heir Lucius Aelius Caesar died suddenly of a haemorrhage. In his place, he adopted Antoninus Pius as his son and heir.',
      'During his reign, Antoninus built numerous temples and theaters, and heavily promoted science and the arts. He was a skilled administrator and especially effective at directing construction. Remarkably, he was able to massively expand the availability of free drinking water in Rome and the provinces, as well as build numerous bridges and roads, while still leaving behind an enormous treasury.',
    ],
  },
  {
    ruler: {
      name: 'Philip I "The Arab"',
      reign: '244-249 AD',
    },
    title: 'Roman Emperor',
    imagePath: '/Images/Characters/PhilipTheArab.webp',
    descriptionParagraphs: [
      'Marcus Julius Philippus, commonly known as Philip I or Philip the Arab, was Roman Emperor from 244 to 249 AD.',
      'Philip’s brother Priscus was an important official under the previous emperor, Gordian III. In 243, Gordian III’s Praetorian Prefect died under unclear circumstances, and Philip was given the position. Gordian was later killed in battle against the Sasanian Empire in February 244, allowing Philip to rise to the throne.',
      'Philip’s reign marked an unusually calm period in the middle of the Crisis of the Third Century. He quickly negotiated peace with the Sasanians, kept good relations with the Senate, and generally managed the Empire effectively.',
      'Philip also completed numerous public works. He ordered significant development of his home town, renaming it Philippopolis. According to Roman legend, his reign also marks one thousand years of Roman rule, if you follow the tradition that Romulus founded Rome in 753 BC. To commemorate the event, Philip hosted a spectacular festival. In the Colosseum, over 1,000 gladiators were killed in the festivities, along with hundreds of exotic animals - most notably hippos, leopards, lions, giraffes and at least one rhinoceros.',
      'In late 248, during the unrest of the Crisis of the Third Century, several usurpers claimed the throne and attempted to overthrow Philip. Although he wished to resign, the Senate insisted Philip could quell the rebellion. Impressed with the support of one particular senator, Decius, Philip dispatched him to the provinces with a portion of the Army.',
      'Decius was able to settle the unrest, but shortly afterward, his army proclaimed him Emperor. He met Philip near modern-day Verona, Italy, and killed Philip in battle, ending his reign and ascending to the throne.',
    ],
  },
];

export const Characters: CharacterDetails[] = [
  {
    name: 'Felicitas',
    descriptionParagraphs: [
      'Felicitas is the personification of good fortune and happiness in Roman mythology. She has four epithets, depending on the message the coin is trying to convey:',
    ],
    variants: [
      {
        name: 'Felicitas Augusta',
        description:
          '"Emperor\'s Happiness/Fortune", a personification of the happiness or good fortune of the emperor.',
      },
      {
        name: 'Felicitas Fausta',
        description: '"Favoured" or "Fortunate"',
      },
      {
        name: 'Felicitas Publica',
        description:
          '"Public Happiness", a personification of prosperity and happiness among the Roman people.',
      },
      {
        name: 'Felicitas Temporum',
        description:
          '"Happiness of the Times", a personification of the happiness experienced during prosperous periods.',
      },
    ],
  },
];
