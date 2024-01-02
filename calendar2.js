
function toggleVisibility(day, number) {
    if (number == 2) {
        document.getElementById(day + '_1').classList.remove('hidden');
        document.getElementById(day + '_1').classList.add('visible');
        document.getElementById(day + '_2').classList.remove('visible');
        document.getElementById(day + '_2').classList.add('hidden');
    } else {
        document.getElementById(day + '_1').classList.remove('visible');
        document.getElementById(day + '_1').classList.add('hidden');
        document.getElementById(day + '_2').classList.remove('hidden');
        document.getElementById(day + '_2').classList.add('visible');
    }
}
