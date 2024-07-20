const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	//write your code here...
    let prices = document.getElementsByClassName("price"); // use the correct function name
    let sum = 0;
    for(let i = 0; i < prices.length; i++) {
        sum += Number(prices[i].innerText); // convert the innerText to a number and add it to the sum
    }
    console.log(sum);
};

getSumBtn.addEventListener("click", getSum);

