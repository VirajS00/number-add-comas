const add_commas = (n, system = "INT") => {
    let str = n.toString();
    let regex;

    switch(system.toUpperCase()) {
        case "IND": regex = /\B(?=(\d{2})+.(?!(\d{1})))+(?=(\d{2})+(?!(\d{3})))/g;
        break;
        case "INT": regex = /\B(?=(\d{3})+(?!\d))/g;
    }

    let spl = n % 1 != 0 ? str.split('.') : str;

    let number = n % 1 != 0 ? spl[0].replace(regex, ',') + '.' + spl[1] : str.replace(regex, ',');

    return number;
}

module.exports = add_commas;