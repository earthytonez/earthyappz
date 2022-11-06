let constants = {
  "Cuban Tresillo": {
    pattern: [3, 8],
    description: "",
    origin: "",
  },
  "Cuban Cinquillo": {
    pattern: [5, 8],
    description:
      "// is the Cuban cinquillo pattern discussed in the preceding [15]. When it is started on the second onset it is also the Spanish Tango [13] and a thirteenth century Persian rhythm, the Al-saghilal-sani [34].",
    origin: "",
  },
  "Khafif-e-ramal": {
    pattern: [2, 5],
    description:
      "// // E(2,5)=[x . x . .] is a thirteenth century Persian rhythm called Khafif-e-ramal [34]. It is also the metric pattern of the second movement of Tchaikovsky’s Symphony No. 6 [17]. When it is started on the second onset ([x . . x .]) it is the metric pattern of Dave Brubeck’s Take Five as well as Mars from The Planets by Gustav Holst [17].",
    origin: "",
  },
  Ruchenitza: {
    origin: "bulgaria",
    description:
      "// // E(3,7)=[x . x . x . .] is a Ruchenitza rhythm used in a Bulgarian folk-dance [24]. It is also the metric pattern of Pink Floyd’s Money [17].",
    pattern: [3, 7],
  },
  "Bendir - Tuareg": {
    origin: "Libya",
    description:
      "//E(7,8) = [x . x x x x x x] is a typical rhythm played on the Bendir (frame drum), and used in the accompaniment of songs of the Tuareg people of Libya [30].",
    pattern: [7, 8],
  },
  "West African bell pattern": {
    pattern: [7, 12],
    description:
      " // // E(7,12) = [x . x x . x . x x . x .] is a common West African bell pattern. For example, it is used in the Mpre // rhythm of the Ashanti people of Ghana [32].",
    origin: "",
  },
  Fandango: {
    pattern: [4, 12],
    description:
      "// // E(4,12) = [x . . x . . x . . x . .],// which is periodic with four repetitions of E(1,3) = [x . .]. Incidentally, E(4,12) = [x . . x . . x . . x . .] is// the (12/8)-time Fandango clapping pattern in the Flamenco music of southern Spain, where ‘x’ denotes a// loud clap and ‘.’ a soft clap [10].",
    origin: "",
  },
  "Afro-Cuban Drum": {
    pattern: [2, 3],
    description:
      "// // E(2,3) = [x . x] is a common Afro-Cuban drum pattern. For example, it is the conga rhythm of the (6/8)- // time Swing Tumbao [18]. It is also common in Latin American music, as for example in the Cueca [33].",
    origin: "",
  },
  "Columbian Cumbia": {
    pattern: [3, 4],
    description:
      "    Calypso: [3, 4], // E(3,4)=[x . x x] is the archetypal pattern of the Cumbia from Colombia [20], as well as a Calypso rhythm from Trinidad [13]. It is also a thirteenth century Persian rhythm called Khalif-e-saghil [34], as well as the trochoid choreic rhythmic pattern of ancient Greece [21].",
    origin: "",
  },
  "Rumanian folk-dance": {
    pattern: [3, 5],
    description:
      "// E(3,5)=[x . x . x], when started on the second onset, is another thirteenth century Persian rhythm by the name of Khafif-e-ramal [34], as well as a Rumanian folk-dance rhythm [25].",
    origin: "",
  },
  "Ruchenitza Bulgarian folk-dance rhythm": {
    pattern: [4, 7],
    description: "",
    origin: "",
  },
  "Turkish Aksak": {
    pattern: [4, 9],
    description:
      "// is the Aksak rhythm of Turkey [6]. It is also the metric pattern used by Dave Brubeck in his piece Rondo a la Turk [17].",
    origin: "",
  },
  "Frank Zapp Outside Now": {
    pattern: [4, 11],
    description:
      " // E(4,11) = [x . . x . . x . . x .] is the metric pattern used by Frank Zappa in his piece titled Outside Now [17].",
    origin: "",
  },
  "York-Samai": {
    pattern: [5, 6],
    description:
      "// E(5,6)=[x . x x x x] yields the York-Samai pattern, a popular Arab rhythm, when started on the second onset [30].",
    origin: "",
  },
  Nawakhat: {
    origin: "Arabic",
    description:
      "E(5,7)=[x . x x . x x] is the Nawakhat pattern, another popular Arab rhythm [30]",
    pattern: [5, 7],
  },
  "Agsag-Samai": {
    origin: "Arabic",
    pattern: [5, 9],
    description:
      "E(5,9)=[x . x . x . x . x] is a popular Arab rhythm called Agsag-Samai [30]. When started on the second onset, it is a drum pattern used by the Venda in South Africa [26], as well as a Rumanian folk-dance rhythm [25].",
  },
  "Pictures at an Exhibition": {
    pattern: [5, 11],
    description:
      " // E(5,11)=[x . x . x . x . x . .] is the metric pattern used by Moussorgsky in Pictures at an Exhibition [17].",
    origin: "",
  },
  "Venda Clapping": {
    origin: "South African",
    description:
      "E(5,12) = [x . . x . x . . x . x .] is the Venda clapping pattern of a South African children’s song [24].",
    pattern: [5, 12],
  },
  "Bossa-Nova": {
    origin: "Brazil",
    description:
      "E(5,16) = [x . . x . . x . . x . . x . . . .] is the Bossa-Nova rhythm necklace of Brazil. The actual BossaNova rhythm usually starts on the third onset as follows: [x . . x . . x . . . x . . x . .] [31]. However, there are other starting places as well, as for example [x . . x . . x . . x . . . x . .] [3].",
    pattern: [5, 16],
  },
  Samba: {
    origin: "Brazil",
    description:
      "E(7,16) = [x . . x . x . x . . x . x . x .] is a Samba rhythm necklace from Brazil. The actual Samba rhythm is [x . x . . x . x . x . . x . x .] obtained by starting E(7,16) on the last onset. When E(7,16) is started on the fifth onset it is a clapping pattern from Ghana [24].",
    pattern: [7, 16],
  },
  "Central African Republic Bell Pattern": {
    origin: "Central Africa",
    description:
      "E(9,16) = [x . x x . x . x . x x . x . x .] is a rhythm necklace used in the Central African Republic [2].When it is started on the fourth onset it is a rhythm played in West and Central Africa [15], as well as a cow-bell pattern in the Brazilian samba [29]. When it is started on the penultimate onset it is the bell pattern of the Ngbaka-Maibo rhythms of the Central African Republic [2].",
    pattern: [9, 16],
  },
  "Central African Pygmie Rhythm": {
    origin: "Central Africa",
    description:
      "E(11,24) = [x . . x . x . x . x . x . . x . x . x . x . x .] is a rhythm necklace of the Aka Pygmies of Central Africa [2]. It is usually started on the seventh onset.",
    pattern: [11, 24],
  },
  "Pygmies of the Upper Sangha Rhythm": {
    origin: "Central Africa",
    description:
      "E(13,24) = [x . x x . x . x . x . x . x x . x . x . x . x .] is another rhythm necklace of the Aka Pygmies of the upper Sangha [2]. It is usually started on the fourth onset.",
    pattern: [13, 24],
  },
};

export default constants;
