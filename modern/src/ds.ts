// Item Interface
export interface IItem {
    "age": string;
    "name": string;
    "office": string;
    "position": string;
    "salary": string;
    "start-date": string;
}

/**
 * DataSource
 */
export class DataSource {
    // Context Information
    private static _context: any = null;
    static get Context() { return this._context; }
    static set Context(value: any) { this._context = value; }

    // Loads the data
    static load(): PromiseLike<Array<IItem>> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Code to access SP List Data

            // Return sample data for this solution
            resolve(SampleData);
        });
    }
}

// Sample Data
const SampleData = [
    { "name": "Airi Satou", "position": "Accountant", "office": "Tokyo", "age": "33", "start-date": "2008/11/28", "salary": "162700" },
    { "name": "Angelica Ramos", "position": "Chief Executive Officer (CEO)", "office": "London", "age": "47", "start-date": "2009/10/09", "salary": "1200000" },
    { "name": "Ashton Cox", "position": "Junior Technical Author", "office": "San Francisco", "age": "66", "start-date": "2009/01/12", "salary": "86000" },
    { "name": "Bradley Greer", "position": "Software Engineer", "office": "London", "age": "41", "start-date": "2012/10/13", "salary": "132000" },
    { "name": "Brenden Wagner", "position": "Software Engineer", "office": "San Francisco", "age": "28", "start-date": "2011/06/07", "salary": "206850" },
    { "name": "Brielle Williamson", "position": "Integration Specialist", "office": "New York", "age": "61", "start-date": "2012/12/02", "salary": "372000" },
    { "name": "Bruno Nash", "position": "Software Engineer", "office": "London", "age": "38", "start-date": "2011/05/03", "salary": "163500" },
    { "name": "Caesar Vance", "position": "Pre-Sales Support", "office": "New York", "age": "21", "start-date": "2011/12/12", "salary": "106450" },
    { "name": "Cara Stevens", "position": "Sales Assistant", "office": "New York", "age": "46", "start-date": "2011/12/06", "salary": "145600" },
    { "name": "Cedric Kelly", "position": "Senior Javascript Developer", "office": "Edinburgh", "age": "22", "start-date": "2012/03/29", "salary": "433060" },
    { "name": "Charde Marshall", "position": "Regional Director", "office": "San Francisco", "age": "36", "start-date": "2008/10/16", "salary": "470600" },
    { "name": "Colleen Hurst", "position": "Javascript Developer", "office": "San Francisco", "age": "39", "start-date": "2009/09/15", "salary": "205500" },
    { "name": "Dai Rios", "position": "Personnel Lead", "office": "Edinburgh", "age": "35", "start-date": "2012/09/26", "salary": "217500" },
    { "name": "Donna Snider", "position": "Customer Support", "office": "New York", "age": "27", "start-date": "2011/01/25", "salary": "112000" },
    { "name": "Doris Wilder", "position": "Sales Assistant", "office": "Sydney", "age": "23", "start-date": "2010/09/20", "salary": "85600" },
    { "name": "Finn Camacho", "position": "Support Engineer", "office": "San Francisco", "age": "47", "start-date": "2009/07/07", "salary": "87500" },
    { "name": "Fiona Green", "position": "Chief Operating Officer (COO)", "office": "San Francisco", "age": "48", "start-date": "2010/03/11", "salary": "850000" },
    { "name": "Garrett Winters", "position": "Accountant", "office": "Tokyo", "age": "63", "start-date": "2011/07/25", "salary": "170750" },
    { "name": "Gavin Cortez", "position": "Team Leader", "office": "San Francisco", "age": "22", "start-date": "2008/10/26", "salary": "235500" },
    { "name": "Gavin Joyce", "position": "Developer", "office": "Edinburgh", "age": "42", "start-date": "2010/12/22", "salary": "92575" },
    { "name": "Gloria Little", "position": "Systems Administrator", "office": "New York", "age": "59", "start-date": "2009/04/10", "salary": "237500" },
    { "name": "Haley Kennedy", "position": "Senior Marketing Designer", "office": "London", "age": "43", "start-date": "2012/12/18", "salary": "313500" },
    { "name": "Hermione Butler", "position": "Regional Director", "office": "London", "age": "47", "start-date": "2011/03/21", "salary": "356250" },
    { "name": "Herrod Chandler", "position": "Sales Assistant", "office": "San Francisco", "age": "59", "start-date": "2012/08/06", "salary": "137500" },
    { "name": "Hope Fuentes", "position": "Secretary", "office": "San Francisco", "age": "41", "start-date": "2010/02/12", "salary": "109850" },
    { "name": "Howard Hatfield", "position": "Office Manager", "office": "San Francisco", "age": "51", "start-date": "2008/12/16", "salary": "164500" },
    { "name": "Jackson Bradshaw", "position": "Director", "office": "New York", "age": "65", "start-date": "2008/09/26", "salary": "645750" },
    { "name": "Jena Gaines", "position": "Office Manager", "office": "London", "age": "30", "start-date": "2008/12/19", "salary": "90560" },
    { "name": "Jenette Caldwell", "position": "Development Lead", "office": "New York", "age": "30", "start-date": "2011/09/03", "salary": "345000" },
    { "name": "Jennifer Acosta", "position": "Junior Javascript Developer", "office": "Edinburgh", "age": "43", "start-date": "2013/02/01", "salary": "75650" },
    { "name": "Jennifer Chang", "position": "Regional Director", "office": "Singapore", "age": "28", "start-date": "2010/11/14", "salary": "357650" },
    { "name": "Jonas Alexander", "position": "Developer", "office": "San Francisco", "age": "30", "start-date": "2010/07/14", "salary": "86500" },
    { "name": "Lael Greer", "position": "Systems Administrator", "office": "London", "age": "21", "start-date": "2009/02/27", "salary": "103500" },
    { "name": "Martena Mccray", "position": "Post-Sales support", "office": "Edinburgh", "age": "46", "start-date": "2011/03/09", "salary": "324050" },
    { "name": "Michael Bruce", "position": "Javascript Developer", "office": "Singapore", "age": "29", "start-date": "2011/06/27", "salary": "183000" },
    { "name": "Michael Silva", "position": "Marketing Designer", "office": "London", "age": "66", "start-date": "2012/11/27", "salary": "198500" },
    { "name": "Michelle House", "position": "Integration Specialist", "office": "Sydney", "age": "37", "start-date": "2011/06/02", "salary": "95400" },
    { "name": "Olivia Liang", "position": "Support Engineer", "office": "Singapore", "age": "64", "start-date": "2011/02/03", "salary": "234500" },
    { "name": "Paul Byrd", "position": "Chief Financial Officer (CFO)", "office": "New York", "age": "64", "start-date": "2010/06/09", "salary": "725000" },
    { "name": "Prescott Bartlett", "position": "Technical Author", "office": "London", "age": "27", "start-date": "2011/05/07", "salary": "145000" },
    { "name": "Quinn Flynn", "position": "Support Lead", "office": "Edinburgh", "age": "22", "start-date": "2013/03/03", "salary": "342000" },
    { "name": "Rhona Davidson", "position": "Integration Specialist", "office": "Tokyo", "age": "55", "start-date": "2010/10/14", "salary": "327900" },
    { "name": "Sakura Yamamoto", "position": "Support Engineer", "office": "Tokyo", "age": "37", "start-date": "2009/08/19", "salary": "139575" },
    { "name": "Serge Baldwin", "position": "Data Coordinator", "office": "Singapore", "age": "64", "start-date": "2012/04/09", "salary": "138575" },
    { "name": "Shad Decker", "position": "Regional Director", "office": "Edinburgh", "age": "51", "start-date": "2008/11/13", "salary": "183000" },
    { "name": "Shou Itou", "position": "Regional Marketing", "office": "Tokyo", "age": "20", "start-date": "2011/08/14", "salary": "163000" },
    { "name": "Sonya Frost", "position": "Software Engineer", "office": "Edinburgh", "age": "23", "start-date": "2008/12/13", "salary": "103600" },
    { "name": "Suki Burks", "position": "Developer", "office": "London", "age": "53", "start-date": "2009/10/22", "salary": "114500" },
    { "name": "Tatyana Fitzpatrick", "position": "Regional Director", "office": "London", "age": "19", "start-date": "2010/03/17", "salary": "385750" },
    { "name": "Thor Walton", "position": "Developer", "office": "New York", "age": "61", "start-date": "2013/08/11", "salary": "98540" },
    { "name": "Tiger Nixon", "position": "System Architect", "office": "Edinburgh", "age": "61", "start-date": "2011/04/25", "salary": "320800" },
    { "name": "Timothy Mooney", "position": "Office Manager", "office": "London", "age": "37", "start-date": "2008/12/11", "salary": "136200" },
    { "name": "Unity Butler", "position": "Marketing Designer", "office": "San Francisco", "age": "47", "start-date": "2009/12/09", "salary": "85675" },
    { "name": "Vivian Harrell", "position": "Financial Controller", "office": "San Francisco", "age": "62", "start-date": "2009/02/14", "salary": "452500" },
    { "name": "Yuri Berry", "position": "Chief Marketing Officer (CMO)", "office": "New York", "age": "40", "start-date": "2009/06/25", "salary": "675000" },
    { "name": "Zenaida Frank", "position": "Software Engineer", "office": "New York", "age": "63", "start-date": "2010/01/04", "salary": "125250" },
    { "name": "Zorita Serrano", "position": "Software Engineer", "office": "San Francisco", "age": "56", "start-date": "2012/06/01", "salary": "115000" }
];