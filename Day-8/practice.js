players = [
    {playerCode:1031, playerName:"Smith", innings:120, totalRuns:1400, grade:'India-A'},
    {playerCode:1010, playerName:"Peter", innings:110, totalRuns:1600, grade:'UK-A'},
    {playerCode:1836, playerName:"Nitin", innings:119, totalRuns:1250, grade:'India-B'},
    {playerCode:1841, playerName:"Kang", innings:170, totalRuns:1100, grade:'Austrellia-A'},
    {playerCode:9931, playerName:"John", innings:111, totalRuns:1730, grade:'Austrellia-B'},
    {playerCode:8481, playerName:"Smith", innings:109, totalRuns:1450, grade:'India-C'}
];


//Q1. define arrow function to print gradewise count of players
//    sample output: { A: 3, B: 2, C: 1 }
const grades = {
    A: players.filter(player => player.grade.split("-")[1]==="A").length,
    B: players.filter(player => player.grade.split("-")[1]==="B").length,
    C: players.filter(player => player.grade.split("-")[1]==="C").length
}
// console.log(grades)

//Q2. define function to print name of players in ascending orders
//	sample output : [ 'John', 'Kang', 'Nitin', 'Peter', 'Smith', 'Smith' ]
const acendingPlayers = players.map(player => player.playerName).sort()
// console.log(acendingPlayers)

//Q3. define function to print player-name who scored max runs and player-name who scored min runs
const minRuns=players.reduce((m,p) => {
    if(p.totalRuns<m){
        m=p.totalRuns
    }
    return m
},9000)
const maxRuns=players.reduce((m,p) => {
    if(p.totalRuns>m){
        m=p.totalRuns
    }
    return m
},0)
// console.log(players.filter(player => player.totalRuns === minRuns))
// console.log(players.filter(player => player.totalRuns === maxRuns))

//Q4. define function to filter players whose innings are between 111 and 130
const inningPlayers = players.filter(player => player.innings >111 && player.innings <130)
// console.log(inningPlayers)

//Q5. define arrow function to create array which collects players whose grades are from 'india'
const IndianPlayers = players.filter(player => player.grade.includes("India"))
// console.log(IndianPlayers)


//Q6. define function to find duplicates by name of player.
const NamesPlayers = players.map(player => player.playerName)
const duplicates = NamesPlayers.filter((player,index) => NamesPlayers.indexOf(player) !== index)
console.log(duplicates)


