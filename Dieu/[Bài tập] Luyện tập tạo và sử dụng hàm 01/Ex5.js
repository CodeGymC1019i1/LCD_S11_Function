let stars = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe Regulus'];
let constellation = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
function findConstellation(str) {
    for (let i = 0; i < stars.length; i++) {
        if(str == stars[i])
            return constellation[i];
        else
            return "khong tim thay";
    }



}