const add_comas = (n, system = "INT") => {
    let str = n.toString();
    let regex;

    switch(system.toUpperCase()) {
        case "IND": regex = /\B(?=(\d{2})+.(?!(\d{1})))+(?=(\d{2})+(?!(\d{3})))/g;
        break;
        case "INT": regex = /\B(?=(\d{3})+(?!\d))/g;
    }

    return str.replace(regex, ',');
}

module.exports = add_comas;