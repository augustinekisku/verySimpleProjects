let firtName = "Naveen",
    lastName = "Sharma",
    age = 23,
    place = "Jaipur";

let detailInfo = `My name is ${firtName} ${lastName}, I am ${age} Years Old and I Live in ${place}`;

let getBasicInfo = document.getElementById("basicInfo");

let fullInfo = getBasicInfo;

fullInfo.innerHTML = `${detailInfo}, Rajasthan, India`;
