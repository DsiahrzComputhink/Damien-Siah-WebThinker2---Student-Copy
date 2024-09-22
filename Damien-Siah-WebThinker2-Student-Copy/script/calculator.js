const caculateBMI = (weight,height) => {
    const BMI = weight / (height**2);
    return BMI;
};

const onCalcBMIPress = () => {
    let height = document.getElementById('height-m').value;
    let weight = document.getElementById('weight-m').value;
    let BMI = caculateBMI(weight, height);
    console.log(BMI);
    document.getElementById('results').innerHTML = "Your BMI is: " + BMI;
}
