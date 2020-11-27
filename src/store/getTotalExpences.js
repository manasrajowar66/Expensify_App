const getTotalExpences = (expences)=>{
    let total = 0;
    expences.forEach(expence => {
       total += expence.amount; 
    });
    return total;
}
export default getTotalExpences;