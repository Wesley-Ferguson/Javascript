let teamMikeAvg = (116 + 94 + 123)/3;
let teamJohnAvg = (89 + 94 + 123)/3;
let teamMaryAvg = (116 + 150 + 110)/3;

console.log(teamMikeAvg, teamJohnAvg, teamMaryAvg);


// let bestTeamAvg = teamMikeAvg > teamJohnAvg ? 'Mikes team has the highest avg wins at' + ' ' + teamMikeAvg : 'Johns team has the highest avg wins at' +' ' + teamJohnAvg || teamMikeAvg === teamJohnAvg ? 'Both teams are evenly matched with a score of' + ' ' + teamJohnAvg : err;


// console.log(bestTeamAvg);



if (teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg) {
   console.log('Mike\'s team has the highest avg wins at' + ' ' + teamMikeAvg); 
} else if (teamMikeAvg < teamJohnAvg && teamMaryAvg < teamJohnAvg) {
    console.log('John\'s team has the highest avg wins at' +' ' + teamJohnAvg);
} else if (teamMikeAvg === teamJohnAvg && teamMikeAvg === teamMaryAvg) {
    console.log('Both teams are evenly matched with a score of' + ' ' + teamMikeAvg);
} else if (teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMikeAvg) {
    console.log('Mary\'s team has the highest avg wins at' +' ' + teamMaryAvg);
};

switch(true) {
    case teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg:
            console.log('Mikes team has the highest avg wins at' + ' ' + teamMikeAvg);
        break;
    case teamMikeAvg < teamJohnAvg && teamMaryAvg < teamJohnAvg:
            console.log('Johns team has the highest avg wins at' +' ' + teamJohnAvg);
        break;
    case teamMikeAvg === teamJohnAvg && teamMikeAvg === teamMaryAvg:
            console.log('Both teams are evenly matched with a score of' + ' ' + teamJohnAvg);
        break;
    case teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMikeAvg:
            console.log('Mary\'s team has the highest avg wins at' +' ' + teamMaryAvg);
};
