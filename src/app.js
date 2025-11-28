let pronouns = ["the", "your", "my"];
let adjectives = ["great", "dark", "wonderful"];
let nouns = ["wizard", "dragon", "pages", "internet", "studio"];
let domainExtensions = [".com", ".net", ".io", ".es"];

let domainNames = [];

for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
        for (const noun of nouns) {
            for (const ext of domainExtensions) {

                let domain = "";

                
                if (noun === "pages" && ext === ".es") {
                    let short = noun.slice(0, -2); 
                    domain = pronoun + adjective + short + ext;         
                }
                else if (noun === "studio" && ext === ".io") {
                    let short = noun.slice(0, -2); 
                    domain = pronoun + adjective + short + ext;         
                }
                else if (noun === "internet" && ext === ".net") {
                    let short = noun.slice(0, -3); 
                    domain = pronoun + adjective + short + ext;          
                }
                
                else {
                    domain = pronoun + adjective + noun + ext;
                }

                
                if (domain !== "") {
                    domainNames.push(domain);
                }

            }
        }
    }
}

console.log("Generated Domain Names:\n" + domainNames.join("\n"));

