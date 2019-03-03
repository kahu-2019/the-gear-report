
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      return knex('locations').insert([
                // Tongariro National Park
                {id: 65, depth: '4', name: 'Mt Ruapehu', island_name: 'North', region_name: 'Tongariro National Park', area_name: 'Mt Ruapehu', crag_name: '', tc_id: '', parent_id: '9', type: 'area', lat_long: ''},
                {id: 66, depth: '4', name: 'Mangatepopo Valley', island_name: 'North', region_name: 'Tongariro National Park', area_name: '', crag_name: 'Mangatepopo Valley', tc_id: '11874313', parent_id: '9', type: 'crag', lat_long: ''},
                {id: 67, depth: '4', name: 'Whakapapa Gorge', island_name: 'North', region_name: 'Tongariro National Park', area_name: '', crag_name: 'Whakapapa Gorge', tc_id: '585779421', parent_id: '9', type: 'crag', lat_long: ''},
                {id: 68, depth: '4', name: 'Tukino', island_name: 'North', region_name: 'Tongariro National Park', area_name: 'Tukino', crag_name: '', tc_id: '', parent_id: '9', type: 'area', lat_long: ''},
        
                // Taranaki
                {id: 69, depth: '4', name: 'Mount Taranaki (Egmont)', island_name: 'North', region_name: 'Taranaki', area_name: '', crag_name: 'Mount Taranaki (Egmont)', tc_id: '', parent_id: '10', type: 'crag', lat_long: ''},
        
                // Wellington
                {id: 70, depth: '4', name: 'Baring Head', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: 'Baring Head', tc_id: '11875657', parent_id: '11', type: 'crag', lat_long: ''},
                {id: 71, depth: '4', name: 'Titahi Bay', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: 'Titahi Bay', tc_id: '11875681', parent_id: '11', type: 'crag', lat_long: ''},
                {id: 72, depth: '4', name: 'Pukerua Bay', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: 'Pukerua Bay', tc_id: '11875705', parent_id: '11', type: 'crag', lat_long: ''},
                {id: 73, depth: '4', name: 'Turakirae Head', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: 'Turakirae Head', tc_id: '11875729', parent_id: '11', type: 'crag', lat_long: ''},
                {id: 74, depth: '4', name: 'Fly Rock', island_name: 'North', region_name: 'Wellington', area_name: '', crag_name: 'Fly Rock', tc_id: '11875777', parent_id: '11', type: 'crag', lat_long: ''},
        
                // Buck Rock
                {id: 75, depth: '5',  name: 'Main Cliff', tc_id: '', parent_id: '30', type: 'cliff', description: 'The main cliff area with the most routes. The path leads up to Première and the routes are both to the right and left. Some good link up options exist by mixing up belay points and different climbs. There is quite a bit of loose rock around so helmets and caution advised, the crag is steep so take care on accessing routes and belaying.', },
                {id: 76, depth: '5',  name: 'Summit Crag', tc_id: '', parent_id: '30', type: 'cliff'},
        
                // Summit Crag
                {id: 77, depth: '6', name: 'Instant Gratification', parent_id: '76', type: 'route', grade: '21', height: '15m', style: 'sport', quality: '2', pitches: '1', quickdraws: '6'},
                {id: 78, depth: '6', name: 'Fight or Flight', parent_id: '76', type: 'route', grade: '24', height: '15m', style: 'sport', quality: '2', pitches: '1', quickdraws: '6'},
                {id: 79, depth: '6', name: 'The Earl of Buckingham', parent_id: '76', type: 'route', grade: '20', height: '15m', style: 'sport', quality: '2', pitches: '1', quickdraws: '6'},
                {id: 80, depth: '6', name: 'Left Crack Route', parent_id: '76', type: 'route', grade: '16', height: '15m', style: 'trad', quality: '', pitches: '1', quickdraws: '7'},
                {id: 81, depth: '6', name: 'Right Direcrional Crack Route', parent_id: '76', type: 'route', grade: '16', height: '10m', style: 'trad', quality: '1', pitches: '', quickdraws: ''},
                {id: 82, depth: '6', name: 'Renee', parent_id: '76', type: 'route', grade: '20', height: '12m', style: 'sport', quality: '1', pitches: '1', quickdraws: '5'},
        
                // Main Cliff
                {id: 83, depth: '6', name: 'Arete Route', parent_id: '75', type: 'route', grade: '15', height: '50m', style: 'sport', quality: '', pitches: '', quickdraws: ''},
                {id: 84, depth: '6', name: 'Midnight Lightning', parent_id: '75', type: 'route', grade: '17', height: '80m', style: 'sport', quality: '1', pitches: '2', quickdraws: '13'},
                {id: 85, depth: '6', name: 'Midnight Summer Dream', parent_id: '75', type: 'route', grade: '17', height: '60m', style: 'sport', quality: '1', pitches: '3', quickdraws: '13'},
                {id: 86, depth: '6', name: 'Original Route', parent_id: '75', type: 'route', grade: '16', height: '50m', style: 'sport', quality: '', pitches: '4', quickdraws: ''},
                {id: 87, depth: '6', name: 'Bolt Clinic', parent_id: '75', type: 'route', grade: '24', height: '50m', style: 'sport', quality: '1', pitches: '2', quickdraws: '17'},
                {id: 88, depth: '6', name: 'JAFA Cake', parent_id: '75', type: 'route', grade: '18', height: '55m', style: 'sport', quality: '2', pitches: '2', quickdraws: '19'},
                {id: 89, depth: '6', name: 'Bung Light', parent_id: '75', type: 'route', grade: '23', height: '55m', style: 'sport', quality: '2', pitches: '2', quickdraws: '13'},
        
                // Ti Point
                {id: 90, depth: '5',  name: 'The Preamble', tc_id: '', parent_id: '12', type: 'cliff', description: 'There is an access track around the back of the crag which may have to be used at high tide and also provide access to the top of most routes.', },
                {id: 91, depth: '5',  name: 'The Arch', tc_id: '', parent_id: '12', type: 'cliff', description: 'There is an access track around the back of the crag which may have to be used at high tide and also provide access to the top of most routes.', },
                {id: 92, depth: '5',  name: 'The Ampitheatre', tc_id: '', parent_id: '12', type: 'cliff', description: 'Walk to "The Arch" and keep walking', },
        
                // The Preamble
                {id: 93, depth: '6', name: 'To the Max', parent_id: '90', type: 'route', grade: '19', height: '15m', style: 'sport', quality: '1', pitches: '', quickdraws: '4'},
                {id: 94, depth: '6', name: 'Shenzy', parent_id: '90', type: 'route', grade: '14', height: '20m', style: 'trad', quality: '', pitches: '', quickdraws: ''},
                {id: 95, depth: '6', name: 'Ngombo', parent_id: '90', type: 'route', grade: '15', height: '20m', style: 'trad', quality: '', pitches: '', quickdraws: ''},
                {id: 96, depth: '6', name: 'Tashi Deli', parent_id: '90', type: 'route', grade: '21', height: '15m', style: 'sport', quality: '2', pitches: '', quickdraws: '5'},
                // The Arch
                {id: 97, depth: '6', name: 'Chockstone Chimney', parent_id: '91', type: 'route', grade: '14', height: '30m', style: 'trad', quality: '1', pitches: '', quickdraws: ''},
                {id: 98, depth: '6', name: 'Hotch Potch', parent_id: '91', type: 'route', grade: '13', height: '30m', style: 'trad', quality: '', pitches: '', quickdraws: ''},
                {id: 99, depth: '6', name: 'Kyrie Ellison', parent_id: '91', type: 'route', grade: '14', height: '35m', style: 'trad', quality: '', pitches: '', quickdraws: ''},
                // The Ampitheatre
                {id: 100, depth: '6', name: 'Gom Jabbar', parent_id: '92', type: 'route', grade: '18', height: '25m', style: 'trad', quality: '', pitches: '', quickdraws: ''},
                {id: 101, depth: '6', name: 'The Angry Sea and the Sky', parent_id: '92', type: 'route', grade: '18', height: '20m', style: 'sport', quality: '2', pitches: '', quickdraws: '5'},
                {id: 102, depth: '6', name: 'The Angel of Calcutta', parent_id: '92', type: 'route', grade: '17', height: '20m', style: 'sport', quality: '2', pitches: '', quickdraws: '6'},
                {id: 103, depth: '6', name: '52nd Symphony', parent_id: '92', type: 'route', grade: '22', height: '20m', style: 'sport', quality: '2', pitches: '', quickdraws: '6'},
        
      ]);
};
