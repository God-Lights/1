export interface Person {
    name:string,
    birth: Birth,
    job: string,
    id: PersonRam,
}

export interface Birth {
    Year: number,
    Month: CalanderMonth,
    Date: number,
}

export enum CalanderMonth {
    January = 1,
    Febuary = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12,
}

export enum PersonRam {
    EdwardShin = "Pb078e5e339f1f22e47e823b8394643aff76e0297c0a7afbcecc06ced51c8964a", //Edward Shin
    YounghongMin = "Pc2055a97c9c2bf2b342b25f0d2ed6576fbd327225556f4ab8779037b105b9025", //Younghong Min
    SeyongShin = "P6418402515ad570e98ef4ee0c397c744e670c1a06e7a3b3268965bfaec5ad6e2", //Seyong Shin
}

export function human(name:string, birth:string, job:string, id:PersonRam): Person {
    const births = birth.split("/");
    const year = Number(births[0]);
    const nummon = Number(births[1]);
    const date = Number(births[2]);
    let months: CalanderMonth = CalanderMonth.November;
    switch(nummon) {
        case 1:
            months = CalanderMonth.January;
            break;
        case 2:
            months = CalanderMonth.Febuary;
            break;
        case 3:
            months = CalanderMonth.March;
            break;
        case 4:
            months = CalanderMonth.April;
            break;
        case 5:
            months = CalanderMonth.May;
            break;
        case 6:
            months = CalanderMonth.June;
            break;
        case 7:
            months = CalanderMonth.July;
            break;
        case 8:
            months = CalanderMonth.August;
            break;
        case 9:
            months = CalanderMonth.September;
            break;
        case 10:
            months = CalanderMonth.October;
            break;
        case 11:
            months = CalanderMonth.November;
            break;
        case 12:
            months = CalanderMonth.December;
            break;
    }

    const birthdate = bb(year,months,date);
    const info = token(name, birthdate, job, id);
    return info;
}

function token(name:string, birth:Birth, job:string, id:PersonRam): Person {
	return { name, birth, job, id };
}

function bb(year:number, month:CalanderMonth, date:number): Birth {
	return { year, month, date };
}

const input = await Deno.readTextFile("./e.txt");

const a = input.split("\r\n");
console.log(a);
console.log(human(a[0], a[1], a[2], PersonRam.EdwardShin));



