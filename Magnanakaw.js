// Item weight
const weight1 = 1;
const weight2 = 2;
const weight3 = 3;

// Item value
const value1 = 10;
const value2 = 15;
const value3 = 40;

const weightneed = 5;

const maximumvalue = 55;

const selects1 = document.getElementById("itemselect1");
const selects2 = document.getElementById("itemselect2");
const button = document.getElementById("Submit");

const Submit = () => {
    const selected1 = selects1.value;
    const selected2 = selects2.value;

    let totalWeight = 0;
    let totalValue = 0;

    switch (selected1) {
        case "item1":
            totalWeight += weight1;
            totalValue += value1;
            break;
        case "item2":
            totalWeight += weight2;
            totalValue += value2;
            break;
        case "item3":
            totalWeight += weight3;
            totalValue += value3;
            break;
        default:
            alert("Please select an item for Item 1");
            return;
    }

    switch (selected2) {
        case "item1":
            totalWeight += weight1;
            totalValue += value1;
            break;
        case "item2":
            totalWeight += weight2;
            totalValue += value2;
            break;
        case "item3":
            totalWeight += weight3;
            totalValue += value3;
            break;
        default:
            alert("Please select an item for Item 2");
            return;
    }
     
    if (checkrepeating(selected1, selected2)){
        alert("You can't take the same item twice. Please select different items.");
        return;
    }

    if (totalWeight <= weightneed) 
    {
        if(totalValue === maximumvalue)
        {
        alert(`You can take the items.You get the maximum value of an item. Your total value of items you stolen: ${totalValue}`);
        } 
        else  
        {
            alert(`You can take the items. Your total value of items you stolen: ${totalValue}`);
        }  
    }
    else
    {
        alert(`Repeat again. Sorry you can't take the items because the total weight is greater than the weight you can carry, which is ${totalWeight}.`);
    }  

};

function checkrepeating (selected1, selected2)
    { 
    return selected1===selected2;
    };

button.onclick = Submit;