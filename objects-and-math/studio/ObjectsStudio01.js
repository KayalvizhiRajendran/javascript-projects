// Code your selectRandomEntry function here:
function selectRandomEntry (idArray){
  let selectedItems = [];
  while(selectedItems.length < 3){
    const selectedItem =idArray[Math.floor(Math.random()*idArray.length)];
    if(!selectedItems.includes(selectedItem)){
      selectedItems.push(selectedItem);
    }
   }

  return selectedItems;
}

// Code your buildCrewArray function here:
function selectTheCrew(selectedItems, animals){
  let crew = [];
    for (let index = 0; index < selectedItems.length; index++) {
      const Id = selectedItems[index];
      for (let index1 = 0; index1 < animals.length; index1++) {
        const animal = animals[index1];
        if(animal.astronautID == Id){
          crew.push(animal);
        }
      } 
    }
    return crew; 
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
//console.log(selectRandomEntry(idNumbers));
let finalCrew = selectTheCrew(selectRandomEntry(idNumbers),animals)
console.log(`${finalCrew[0].name},${finalCrew[1].name}, and ${finalCrew[2].name} are going to space`);