const amtCalculator = (hours) => {
    if(hours>0)
    {
        amount = 0;
        if(hours<=3)
        {amount=2;}
        else{
            amount=2+(hours-3)*0.5;
        }
        if (amount>10)
        amount=10;
        totAmt+=amount
        return amount;
    }
    
};

let num = 1;
let totAmt = 0
const newCar = () => {
    let hours = prompt(`Enter Hours ${num}`);

    const amt = amtCalculator(hours);

    const Eltbody = document.querySelector("tbody");

    Eltbody.innerHTML += `
            <tr>
                <th scope="row">${num}</th>
                <td>${hours}</td>
                <td>${amt}</td>
                <td>${totAmt}</td>
            </tr>
        `;
    
    num+=1;

};