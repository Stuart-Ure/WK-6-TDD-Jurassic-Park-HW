const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;


  beforeEach(function () {
    park = new Park ('Jurassic Park', 500)
    dinosaur1 = new Dinosaur ('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur ('citipati', 'omnivore', 25)
    dinosaur3 = new Dinosaur ('diplodocus', 'herbavore', 40)

  })

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 500 )
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.dinosaurs
    assert.deepStrictEqual (actual, [])
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual,0 );
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const mostVisitorsDinosaur = park.findDinosaurWithMostVisitors();
    assert.strictEqual(mostVisitorsDinosaur, dinosaur1);

  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
  
    const species = 't-rex';
    const expectedDinosaurs = [dinosaur1];
    const actualDinosaurs = park.findDinosaursBySpecies(species);
  
    assert.deepStrictEqual(actualDinosaurs, expectedDinosaurs);
  });
  

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.getTotalVisitorsForDay()
    assert.strictEqual(actual, 115)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.getTotalVisitorsForYear()
    assert.strictEqual(actual,41975 )
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.getTotalRevenueForYear()
    assert.strictEqual(actual,20987500)
  });
});
