# Wikipedia Article Of The Day
Nodejs library for Wikipedia Article of the day

Requirements:

* Nodejs
* request and scraperjs nodejs library dependencies

This code uses scrapping, use at your own risk ....

HOW TO:

`var wiki = require("./wikiArticle.js");`
Just call `wiki(ts in ms,callback)`


EXAMPLE:

    var wiki = require("./wikiArticle.js");
    wiki(1458815071000, function (value) {
        console.log(value);
    });
    
  or using System time
  
    var wiki = require("./wikiArticle.js");
    wiki(null, function (value) {
        console.log(value);
    });
    
    


RESPONSE:

    {
    
        "title" : Oppenheimer security hearing,
        "extract" : The Oppenheimer security hearing was a 1954 proceeding by the United States Atomic Energy Commission (AEC) that explored the background, actions and associations of J. Robert Oppenheimer, the American scientist who had headed the Los Alamos Laboratory during World War II, where he played a key part in the Manhattan Project that developed the atomic bomb. The hearing resulted in Oppenheimer's Q clearance being revoked. This marked the end of his formal relationship with the government of the United States, and generated considerable controversy regarding whether the treatment of Oppenheimer was fair, or whether it was an expression of anti-Communist McCarthyism.\nDoubts about Oppenheimer's loyalty, dated back to the 1930s, when Oppenheimer was a member of numerous Communist front organizations, and was associated with Communist Party USA members, including his wife and his brother. These associations were known to Army Counter-intelligence at the time he was made director of the Los Alamos Laboratory in 1942, and chairman of the influential General Advisory Committee of the AEC in 1947.,
        "thumbnail" : -{
            "source" : https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Oppenheimer_Los_Alamos_portrait.jpg/215px-Oppenheimer_Los_Alamos_portrait.jpg,
            "width" : 215,
            "height" : 320
        },
        "lang" : en,
        "dir" : ltr
    
    }


#Looking for JAVA library:
Check this out: https://github.com/sreejithbnaick/Wikipedia-Featured-Article
