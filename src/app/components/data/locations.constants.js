(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.data')
    .constant('Locations', [
      {
        name : 'Sanctuary',
        icon : 'sanctuary'
      },
      {
        name : 'Vault 111',
        icon : 'gear'
      },
      {
        name : 'Red Rocket Truck Stop',
        icon : 'rocket'
      },
      {
        name : 'Ranger cabin',
        icon : 'cabin'
      },
      {
        name : 'Abernathy Farm',
        icon : 'farm'
      },
      {
        name : 'Wicked Shipping Fleet Lockup',
        icon : 'factory'
      },
      {
        name : 'Robotics Disposal Ground',
        icon : 'dump'
      },
      {
        name : 'Concord',
        icon : 'city_1'
      },
      {
        name : 'Museum of Freedom',
        icon : 'parthenon'
      }, 
      {
        name : 'Gorski cabin',
        icon : 'cabin'
      }, 
      {
        name : 'Drumlin Diner',
        icon : 'restaurant'
      },
      {
        name : 'Thicket Excavations',
        icon : 'mine'
      },
      {
        name : 'Walden Pond',
        icon : 'marsh'
      },
      {
        name : 'USAF Satellite Station Olivia',
        icon : 'satellite'
      },
      {
        name : 'Starlight Drive In',
        icon : 'concession'
      },
      {
        name : 'Super-Duper Mart',
        icon : 'city_2'
      },
      {
        name : 'Lexington',
        icon : 'buildings'
      },
      {
        name : 'Sunshine Tidings co-op',
        icon : 'cabins'
      },
      {
        name : 'Bedford Station',
        icon : 'rr'
      },
      {
        name : 'Mystic Pines',
        icon : 'city_1'
      },
      {
        name : 'Lexington Apartments',
        icon : 'buildings'
      },
      {
        name : 'Corvega assembly plant',
        icon : 'factory'
      },
      {
        name : 'Jalbert Brothers Disposal',
        icon : 'dump'
      },
      {
        name : 'Rocky Narrows Park',
        icon : 'caravan'
      },
      {
        name : 'Lonely Chapel',
        icon : 'chapel'
      },
      {
        name : 'Federal Ration Stockpile',
        icon : 'bunker'
      },
      {
        name : 'ArcJet Systems',
        icon : 'factory'
      },
      {
        name : 'Graygarden',
        icon : 'farm'
      },
      {
        name : 'Mass Gravel & Sand',
        icon : 'mine'
      },
      {
        name : 'Rotten Landfill',
        icon : 'dump'
      },
      {
        name : 'Tenpines Bluff',
        icon : 'farm'
      },
      {
        name : 'Outpost Zimonja',
        icon : 'radioTower'
      },
      {
        name : 'Wildwood Cemetery',
        icon : 'cemetery'
      },
      {
        name : 'Covenant',
        icon : 'cabins'
      },
      {
        name : 'Kendall Hospital',
        icon : 'healthCross'
      },
      {
        name : 'Collegiate Administration Building',
        icon : 'building'
      },
      {
        name : 'Cambridge Campus Diner',
        icon : 'house'
      },
      {
        name : 'College Square',
        icon : 'city_2'
      },
      {
        name : 'Cambridge Police Station',
        icon : 'police'
      },
      {
        name : 'Relay Tower 0BB-915',
        icon : 'radioTower'
      },
      {
        name : 'Fort Hagen Filling Station',
        icon : 'rocket'
      },
      {
        name : 'Fiddler\'s Green Trailer Estates',
        icon : 'caravan'
      },
      {
        name : 'Beantown Brewery',
        icon : 'dome'
      },
      {
        name : 'Fraternal Post 115',
        icon : 'parthenon'
      },
      {
        name : 'Campus Law Offices',
        icon : 'city_2'
      },
      {
        name : 'Greenetech Genetics',
        icon : 'building'
      },
      {
        name : 'Cambridge Crater',
        icon : 'city_2'
      },
      {
        name : 'Wattz Consumer Electronics',
        icon : 'house'
      },
      {
        name : 'Skylanes Flight 1981',
        icon : 'plane'
      },
      {
        name : 'Lake Quannapowitt',
        icon : 'marsh'
      },
      {
        name : 'General Atomics Galleria',
        icon : 'house'
      },
      {
        name : 'Taffington Boathouse',
        icon : 'house'
      },
      {
        name : 'Tucker Memorial Bridge',
        icon : 'car'
      },
      {
        name : 'Monsignor Plaza',
        icon : 'buildings'
      },
      {
        name : 'C.I.T. Ruins',
        icon : 'house'
      },
      {
        name : 'Cambridge Polymer Labs',
        icon : 'factory'
      },
      {
        name : 'Oberland Station',
        icon : 'farm'
      },
      {
        name : 'Weston Water Treatment Plant',
        icon : 'dome'
      },
      {
        name : 'Fort Hagen',
        icon : 'military'
      },
      {
        name : 'Fort Hagen Satellite Array',
        icon : 'satellite'
      },
      {
        name : 'Boston Mayoral Shelter',
        icon : 'bunker'
      },
      {
        name : 'Greater Mass Blood Clinic',
        icon : 'healthCross'
      },
      {
        name : 'Relay Tower 1DL-109',
        icon : 'radioTower'
      },
      {
        name : 'Wreck of the USS Riptide',
        icon : 'ship'
      },
      {
        name : 'Back Street Apparel',
        icon : 'brownstone'
      },
      {
        name : 'HalluciGen, Inc.',
        icon : 'house'
      },
      {
        name : 'Charles View Amphitheater',
        icon : 'cabin'
      },
      {
        name : 'Vault-Tec Regional HQ',
        icon : 'building'
      },
      {
        name : 'Massachusetts State House',
        icon : 'parthenon'
      },
      {
        name : 'Old Granary Burying Ground',
        icon : 'cemetery'
      },
      {
        name : 'BADTFL Regional Office',
        icon : 'restaurant'
      },
      {
        name : 'Poseiden Energy Turbine 18-F',
        icon : 'factory'
      },
      {
        name : 'West Everett Estates',
        icon : 'city_1'
      },
      {
        name : 'Medford Memorial Hospital',
        icon : 'healthCross'
      },
      {
        name : 'Malden Center',
        icon : 'metro'
      },
      {
        name : 'Dark Hollow Pond',
        icon : 'marsh'
      },
      {
        name : 'Radio Tower 3SM-U81',
        icon : 'radioTower'
      },
      {
        name : 'Recon Bunker Theta',
        icon : 'bunker'
      },
      {
        name : 'Mass Fusion Containment Shed',
        icon : 'factory'
      },
      {
        name : 'Old Gullet Sinkhole',
        icon : 'marsh'
      },
      {
        name : 'Malden Middle School',
        icon : 'school'
      },
      {
        name : 'Slocum\'s Joe Corporate HQ',
        icon : 'city_2'
      },
      {
        name : 'Med-Tek Research',
        icon : 'healthCross'
      },
      {
        name : 'Irish Pride Industries Shipyard',
        icon : 'clover'
      },
      {
        name : 'Bunker Hill',
        icon : 'bunkerHill'
      },
      {
        name : 'Park Street Station',
        icon : 'metro'
      },
      {
        name : 'Combat Zone',
        icon : 'cabins'
      },
      {
        name : 'Boylston Club',
        icon : 'house'
      },
      {
        name : 'Hubris Comics',
        icon : 'house'
      },
      {
        name : 'Trinity Tower',
        icon : 'building'
      },
      {
        name : 'Trinity Plaza',
        icon : 'chapel'
      },
      {
        name : 'Boston Public Library',
        icon : 'parthenon'
      },
      {
        name : 'Police Precinct 8',
        icon : 'police'
      },
      {
        name : 'Hangman\'s Alley',
        icon : 'city_2'
      },
      {
        name : 'Vault 81',
        icon : 'gear'
      },
      {
        name : 'Forest Grove Marsh',
        icon : 'city_1'
      }
    ])
  ;

})();
