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
      },
      {
        name : 'Swan\'s Pond',
        icon : 'swan'
      },
      {
        name : 'Boston Common',
        icon : 'landmark'
      },
      {
        name : 'Fallen Skybridge',
        icon : 'bridge'
      },
      {
        name : 'Goodneighbor',
        icon : 'mansion'
      },
      {
        name : 'Mass Fusion Building',
        icon : 'building'
      },
      {
        name : 'Old Corner Bookstore',
        icon : 'house'
      },
      {
        name : 'Boston Bugle Building',
        icon : 'building'
      },
      {
        name : 'Haymarket Mall',
        icon : 'city_2'
      },
      {
        name : 'Cabot House',
        icon : 'house'
      },
      {
        name : 'Greentop Nursery',
        icon : 'farm'
      },
      {
        name : 'Relay Tower 0MC-810',
        icon : 'radioTower'
      },
      {
        name : 'USS Constitution',
        icon : 'boat'
      },
      {
        name : 'Pickman Gallery',
        icon : 'house'
      },
      {
        name : 'Old North Church',
        icon : 'chapel'
      },
      {
        name : 'Garden Terrace',
        icon : 'building'
      },
      {
        name : 'Faneuil Hall',
        icon : 'faneuilHall'
      },
      {
        name : 'Postal Square',
        icon : 'city_2'
      },
      {
        name : 'The Shamrock Taphouse',
        icon : 'house'
      },
      {
        name : 'Harbormaster Hotel',
        icon : 'city_2'
      },
      {
        name : 'Hesters Consumer Robotics',
        icon : 'house'
      },
      {
        name : 'Mass Bay Medical Center',
        icon : 'healthCross'
      },
      {
        name : 'Medical Center Metro',
        icon : 'metro'
      },
      {
        name : 'Don Bosco Technical High School',
        icon : 'school'
      },
      {
        name : 'Wilson Atomatoys Corporate HQ',
        icon : 'restaurant'
      },
      {
        name : 'Layton Towers',
        icon : 'buildings'
      },
      {
        name : 'Dartmouth Professional Building',
        icon : 'building'
      },
      {
        name : 'Diamond City Market',
        icon : 'cabins'
      },
      {
        name : 'Diamond City',
        icon : 'diamondCity'
      },
      {
        name : 'Fens Street Sewer',
        icon : 'drop'
      },
      {
        name : 'Parkview Apartments',
        icon : 'buildings'
      },
      {
        name : 'Chestnut Hillock Reservoir',
        icon : 'marsh'
      },
      {
        name : 'Poseidon Reservoir',
        icon : 'factory'
      },
      {
        name : 'Mass Pike Interchange',
        icon : 'bridge'
      },
      {
        name : 'Mass Pike Tunnel West',
        icon : 'cabins'
      },
      {
        name : 'Hardware Town',
        icon : 'city_1'
      },
      {
        name : 'Boston Police Rationing Site',
        icon : 'rr'
      },
      {
        name : 'Mass Pike Tunnel East',
        icon : 'cabins'
      },
      {
        name : 'Four Leaf Fishpacking Plant',
        icon : 'clover'
      },
      {
        name : 'General Atomics Factory',
        icon : 'factory'
      },
      {
        name : 'Custom House Tower',
        icon : 'customHouse'
      },
      {
        name : 'East Boston Police Station',
        icon : 'police'
      },
      {
        name : 'County Crossing',
        icon : 'farm'
      },
      {
        name : 'National Guard Training Yard',
        icon : 'military'
      },
      {
        name : 'Listening Post Bravo',
        icon : 'bunker'
      },
      {
        name : 'Breakheart Banks',
        icon : 'farm'
      },
      {
        name : 'Lynn Woods',
        icon : 'cabins'
      },
      {
        name : 'East Boston Preparatory School',
        icon : 'school'
      },
      {
        name : 'Boston Airport',
        icon : 'plane'
      },
      {
        name : 'The Castle',
        icon : 'canon'
      },
      {
        name : 'Gwinnett Brewery',
        icon : 'factory'
      },
      {
        name : 'Gwinnett Restaurant',
        icon : 'house'
      },
      {
        name : 'South Boston Police Department',
        icon : 'police'
      },
      {
        name : 'Andrew Station',
        icon : 'metro'
      },
      {
        name : 'South Boston Military Checkpoint',
        icon : 'military'
      },
      {
        name : 'Big John\'s Salvage',
        icon : 'dump'
      },
      {
        name : 'Relay Tower 0SC-527',
        icon : 'radioTower'
      },
      {
        name : 'Westing Estate',
        icon : 'marsh'
      },
      {
        name : 'Lake Cochituate',
        icon : 'marsh'
      },
      {
        name : 'Natick Police Department',
        icon : 'police'
      },
      {
        name : 'Natick Banks',
        icon : 'city_1'
      },
      {
        name : 'Roadside Pines Motel',
        icon : 'restaurant'
      },
      {
        name : 'Mass Fusion Disposal Site',
        icon : 'radioactive'
      },
      {
        name : 'Electrical Hobbyist\'s Club',
        icon : 'factory'
      },
      {
        name : 'WRVR Broadcast Station',
        icon : 'radioTower'
      },
      {
        name : 'Coast Guard Pier',
        icon : 'military'
      },
      {
        name : 'Fairline Hill Estates',
        icon : 'city_1'
      },
      {
        name : 'South Boston High School',
        icon : 'school'
      },
      {
        name : 'Easy City Downs',
        icon : 'cabin'
      },
      {
        name : 'Revere Satellite Array',
        icon : 'satellite'
      },
      {
        name : 'Finch Farm',
        icon : 'farm'
      },
      {
        name : 'Saugus Ironworks',
        icon : 'factory'
      },
      {
        name : 'The Slog',
        icon : 'farm'
      },
      {
        name : 'Parsons State Insane Asylum',
        icon : 'healthCross'
      },
      {
        name : 'Parsons Creamery',
        icon : 'factory'
      },
      {
        name : 'Hub City Auto Wreckers',
        icon : 'dump'
      },
      {
        name : 'Reeb Marina',
        icon : 'pier'
      },
      {
        name : 'Revere Beach Station',
        icon : 'metro'
      },
      {
        name : 'Nordhagen Beach',
        icon : 'farm'
      },
      {
        name : 'University Point',
        icon : 'school'
      },
      {
        name : 'Jamaica Plain',
        icon : 'city_1'
      },
      {
        name : 'Shaw High School',
        icon : 'school'
      },
      {
        name : 'Milton General Hospital',
        icon : 'healthCross'
      },
      {
        name : 'West Roxbury Station',
        icon : 'metro'
      },
      {
        name : 'Fallon\'s Department Store',
        icon : 'house'
      },
      {
        name : 'Egret Tours Marina',
        icon : 'pier'
      },
      {
        name : 'Robotics Pioneer Park',
        icon : 'forested'
      },
      {
        name : 'Atom Cats Garage',
        icon : 'dump'
      },
      {
        name : 'Gibson Point Pier',
        icon : 'pier'
      },
      {
        name : 'Lynn Pier Parking',
        icon : 'restaurant'
      },
      {
        name : 'Dunwich Borers',
        icon : 'mine'
      },
      {
        name : 'Coastal Cottage',
        icon : 'city_1'
      },
      {
        name : 'Hugo\'s Hole',
        icon : 'radioactive'
      },
      {
        name : 'Longneck Lukowski\'s Cannery',
        icon : 'factory'
      },
      {
        name : 'Libertalia',
        icon : 'libertalia'
      },
      {
        name : 'Fort Strong',
        icon : 'military'
      },
      {
        name : 'Spectacle Island',
        icon : 'landmark'
      },
      {
        name : 'Warwick Homestead',
        icon : 'farm'
      },
      {
        name : 'Neponset Park',
        icon : 'marsh'
      },
      {
        name : 'Quincy Quarries',
        icon : 'mine'
      },
      {
        name : 'Hyde Park',
        icon : 'city_1'
      },
      {
        name : 'Gunners Plaza',
        icon : 'radioTower'
      },
      {
        name : 'Cutler Bend',
        icon : 'ship'
      },
      {
        name : 'Scrap Palace',
        icon : 'dump'
      },
      {
        name : 'Edge of the Glowing Sea',
        icon : 'landmark'
      },
      {
        name : 'Federal Supply Cache 84NE',
        icon : 'bunker'
      },
      {
        name : 'Federal Surveillance Center K-21B',
        icon : 'cabin'
      },
      {
        name : 'Vault 95',
        icon : 'gear'
      },
      {
        name : 'Suffolk County Charter School',
        icon : 'school'
      },
      {
        name : 'Quincy Ruins',
        icon : 'cabins'
      },
      {
        name : 'Quincy Police Station',
        icon : 'police'
      },
      {
        name : 'Wreck of the FMS Northern Star',
        icon : 'ship'
      },
      {
        name : 'Nahant Wharf',
        icon : 'pier'
      },
      {
        name : 'Nahant Sheriff\'s Department',
        icon : 'police'
      },
      {
        name : 'Museum of Witchcraft',
        icon : 'witch'
      },
      {
        name : 'Mahkra Fishpacking',
        icon : 'factory'
      }
    ])
  ;

})();
