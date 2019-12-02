// const paymentMethode = 'card';

// switch(paymentMethode){
//     case 'cash':
//         console.log(`Your payment method is : ${paymentMethode}`);
//         break;
//     case 'check':
//         console.log(`Your payment method is : ${paymentMethode} we will verify the funds`);
//         break;
//     case 'card':
//         console.log(`Your payment method is : ${paymentMethode} Processing...`);
//         break;
//     default:
//         console.log(`Your payment methode is : ${paymentMethode} not valid payment`);
//         break;

// }


//Assign a varaible fro the swtich case


const cars = ['Camaro','Mustang','Challenger','Ferrarie'];
const selected = 2;
let car;

switch(selected){
    case 0:
        car = cars[0];
        break;
    case 1:
        car = cars[1];
        break;
    case 2:
        car =cars[2];
        break;
    default:
        console.log('This is invalid initilization ');
        break;


}
console.log(`Your selected car is ${car}`);



