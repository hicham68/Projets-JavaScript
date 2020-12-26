var i;
var life = 5000
for (i = 0; i <= 10; i++) {
    life += 150
    // console.log( " la vie du ptéra est egal à " +life);
    // personalbar.degat -=100
}

for (i = 0; i < 10; i++) {
    if (i == 5) {
        continue; // different de break il saute juste une boucle
    }
    console.log(i);
}
