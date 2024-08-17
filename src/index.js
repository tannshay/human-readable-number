module.exports = function toReadable (number) {
    let resString = '';
    switch (Math.trunc(number / 100)) {
        case 0:
            break;
        case 1:
            resString += 'one hundred';
            break;
        case 2:
            resString += 'two hundred';
            break;
        case 3:
            resString += 'three hundred';
            break;
        case 4:
            resString += 'four hundred';
            break;
        case 5:
            resString += 'five hundred';
            break;
        case 6:
            resString += 'six hundred';
            break;
        case 7:
            resString += 'seven hundred';
            break;
        case 8:
            resString += 'eight hundred';
            break;
        case 9:
            resString += 'nine hundred';
            break;
    }
    let tens = Math.trunc((number % 100) / 10);
    let units = number % 10;
    if (tens === 1) {
        switch (number % 100) {
            case 10:
                resString += ' ten';
                break;
            case 11:
                resString += ' eleven';
                break;
            case 12:
                resString += ' twelve';
                break;
            case 13:
                resString += ' thirteen';
                break;
            case 14:
                resString += ' fourteen';
                break;
            case 15:
                resString += ' fifteen';
                break;
            case 16:
                resString += ' sixteen';
                break;
            case 17:
                resString += ' seventeen';
                break;
            case 18:
                resString += ' eighteen';
                break;
            case 19:
                resString += ' nineteen';
                break;
        }
    } else {
        switch (tens) {
            case 2:
                resString += ' twenty';
                break;
            case 3:
                resString += ' thirty';
                break;
            case 4:
                resString += ' forty';
                break;
            case 5:
                resString += ' fifty';
                break;
            case 6:
                resString += ' sixty';
                break;
            case 7:
                resString += ' seventy';
                break;
            case 8:
                resString += ' eighty';
                break;
            case 9:
                resString += ' ninety';
                break;
            }
            switch (units) {
                case 1:
                    resString += ' one';
                    break;
                case 2:
                    resString += ' two';
                    break;
                case 3:
                    resString += ' three';
                    break;
                case 4:
                    resString += ' four';
                    break;
                case 5:
                    resString += ' five';
                    break;
                case 6:
                    resString += ' six';
                    break;
                case 7:
                    resString += ' seven';
                    break;
                case 8:
                    resString += ' eight';
                    break;
                case 9:
                    resString += ' nine';
                    break;
            }
        }
    if (number === 0) {
        resString = 'zero';
    }
    return resString.trim();
}
