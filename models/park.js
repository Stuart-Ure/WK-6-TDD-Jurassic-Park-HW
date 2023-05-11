const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.addDinosaur = function (Dinosaur) {
    this.dinosaurs.push(Dinosaur);
};

Park.prototype.removeDinosaur = function (Dinosaur) {
    this.dinosaurs.pop(Dinosaur);
};

Park.prototype.findDinosaurWithMostVisitors = function () {
    if (this.dinosaurs.length === 0) {
        return null;
    }

    let maxVisitors = 0;
    let dinosaurWithMostVisitors = null;

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > maxVisitors) {
            maxVisitors = dinosaur.guestsAttractedPerDay;
            dinosaurWithMostVisitors = dinosaur;
        }
    }

    return dinosaurWithMostVisitors;
};

Park.prototype.getTotalVisitorsForDay = function () {
    let totalVisitors = 0;

    for (const dinosaur of this.dinosaurs) {
        totalVisitors += dinosaur.guestsAttractedPerDay;
    }

    return totalVisitors;
};

Park.prototype.getTotalVisitorsForYear = function () {
    const visitorsPerDay = this.getTotalVisitorsForDay();
    const daysPerYear = 365;
    return visitorsPerDay * daysPerYear;
};

Park.prototype.getTotalRevenueForYear = function () {
    const visitorsPerYear = this.getTotalVisitorsForYear();
    const ticketPrice = this.ticketPrice;
    return visitorsPerYear * ticketPrice;
};

Park.prototype.findDinosaursBySpecies = function (species) {
    return this.dinosaurs.filter(dinosaur => dinosaur.species === species);
};


module.exports = Park;