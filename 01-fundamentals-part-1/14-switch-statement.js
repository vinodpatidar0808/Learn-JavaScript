const day = 'friday';
switch (day) {
    case 'monday':
        console.log('go to swimming');
        console.log("it's monday");
        break;
    case 'tuesday':
        console.log('play basketball');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('read a book');
        break;
    case 'friday':
        console.log('play computer games');
        break;
    default:
        console.log('Not a valid day');
}

// if you skip a break after statement you will have a fallthrough condition and everything will be executed after valid case
// here cases will be matched in a strict manner

// the if else equivalent of the above switch statements
if (day === 'monday') {
    console.log("it's moday");
} else if (day === 'tuesday') {
    console.log('tuesday');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('read a book');
} else if (day === 'friday') {
    console.log('friday');
} else {
    console.log('Not a valid day');
}
