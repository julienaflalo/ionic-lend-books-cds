export class HardDbService{
  booksList = [
    {
      name: 'Electrochoc',
      author: 'Laurent Garnier & David Brun Lambert',
      image: 'electrochoc.jpg',
      description: 'Chroniques de la musique électronique durant les années 2000. Le DJ évoque l\'évolution du public et des pratiques du clubbing, la nouvelle géographie de l\'électro avec l\'avènement de Berlin et de Londres, les festivals internationaux, l\'influence des Daft Punk, l\'impact du téléchargement sur la consommation musicale.',
      isAvailable: true
    },
    {
      name: 'La semaine de 4 heures',
      author: 'Tim Feriss',
      image: 'la-semaine-de-4-heures.png',
      description:'Vous rêvez d\'échapper à la routine du métro-boulot-dodo, de gagner de l\'argent sans vous épuiser à la tâche, ou tout simplement de vivre mieux en travaillant moins ?',
      isAvailable: false
    },
    {
      name: 'Comment tout peut s\'effondrer',
      author: 'Pablo Servigne & Raphaël Stevens',
      image: 'comment-tout-peut-s\'effondrer.jpg',
      description: 'Et si notre civilisation s\'effondrait ? Non pas dans plusieurs siècles, mais de notre vivant. Loin des prédictions Maya et autres eschatologies millénaristes, un nombre croissant d\'auteurs, de scientifiques et d\'institutions annoncent la fin de la civilisation industrielle telle qu\'elle s est constituée depuis plus de deux siècles.',
      isAvailable: true
    }
  ];

  cdsList = [
    {
      name: 'The Hypnoflip Invasion',
      artist: 'Stupeflip',
      image: 'the-hypnoflip-invasion.jpg',
      isAvailable: false
    },
    {
      name: 'A Night at the Opera',
      artist: 'Queen',
      image: 'a-night-at-the-opera.jpg',
      isAvailable: true

    },
    {
      name: 'Manifestation',
      artist: 'Oxidaksi',
      image: 'manifestation.jpg',
      isAvailable: false
    }
  ];

}