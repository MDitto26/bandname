function createBandName(){
  var prefixes = ['Flaming', 'Black', 'Talking', 'Broken', 'Ashen', 'Rainbow', 'Wandering', 'Lost', 'Breathing', 'Rough', 'Rolling', 'Thundering', 'Hipster', 'Punk', 'Goth', 'White', 'Pale', 'Lunar', 'Mystic', 'Screaming', 'Sexy','Diabolical', 'Evil', 'Thumping', 'Ascending', 'Falling', 'Spinning', 'Drooling', 'Secret', 'Mad', 'Hot', 'Veiled', 'Hidden', 'Psychic', 'Nightly', 'Eerie', 'Transparent', 'Wild', 'Smashing', 'Chunking', 'Guns and', 'Roamin\' ', 'Stylish', 'Creepy', 'Nerdy', 'Anti','Panoramic', 'McShizzle', 'Pensive', 'Crushing', 'Dead Man\'s', 'Lords of', 'Burnt', 'Wheeled', 'Living', 'Azure', 'Undead', 'Exploding', 'Spiralling', 'Boom-boom', 'Serious', 'Stoic', 'Deep', 'Somber', 'Squirming', 'Vanilla', 'Screeching', 'Thrashing', 'Selective', 'Swift', 'Soaring', 'Mighty'];
  var suffixes = ['Flames', 'Banisters', 'Skulls', 'Unicorns', 'Souls', 'Corpses', 'Flannel', 'Zombies', 'Lampshades', 'Scientists', 'Ghosts', 'Dude and His Merry Gang of Band Nerds', 'Hunters', 'Sirens', 'Lozenges', 'Stones', 'Heads', 'Hands', 'Cerulean', 'Lightning', 'Blades', 'Gang', 'Homeboys', 'Critics', 'Emos', 'Rebels','Pirates', 'Pumpkins', 'Roses', 'Demons', 'Tractors', 'Men', 'Gals', 'Riders', 'Ray-Bans', 'Trenchcoats', 'Creepers', 'Gravity', 'Diamonds', 'Mirrors', 'Jefes', 'Esperantos', 'Crimson', 'Wrappers', ' José y los gauchos' , 'Heat', 'Fever', 'Wave', 'Spell', 'Spectacle', 'Voices', 'Group', 'Fliers', 'Homies', 'Rum', 'Wheels', 'Brits', 'Machines', 'Assassination', 'Flint', 'Noises', 'Perspiration', 'Perpetrator', 'Betrayed', 'Wasslers', 'Whirlpool', 'Pistols', 'Boulders', 'Trinkets', 'Rag Dolls', 'Bazookas', 'Popsicle', 'Ice Cubes', 'Banshees', 'Frost', 'Darkness', 'Beat', 'Freeze', 'Kittens', 'Superheroes', 'Bagel', 'Flaxseeds', 'Children', 'Love', 'Equinox', 'Life'];
  
  var random_pre = prefixes[Math.floor(Math.random()*prefixes.length)];
  
    var random_suf = suffixes[Math.floor(Math.random()*suffixes.length)];
  
 
    $('#generate').click(function(){
  
        $('.del').remove();
      $('#name').append('<span class = "del"> (The) '+ random_pre + ' ' + random_suf +'</span>');
       random_pre = prefixes[Math.floor(Math.random()*prefixes.length)];
  
    random_suf = suffixes[Math.floor(Math.random()*suffixes.length)];
  

      
  });

  
}
createBandName();