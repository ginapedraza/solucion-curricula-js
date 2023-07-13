
function whatToOrder (peruvianPlate, mexicanPlate, chileanPlate) {

   
       if (peruvianPlate) {
           alert('Ceviche');
       } else if (mexicanPlate) {
           alert('Tacos al pastor');
       } else if (chileanPlate) {
           alert('empanada chilena');
       } else {
           alert('hamburguesa');
       }
}


whatToOrder(true, false, true);

