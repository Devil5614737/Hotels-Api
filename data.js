var slugify = require('slugify')
var uniqid = require('uniqid');



const hotels=[
    {
        id:uniqid(),
        name:'Zion Kolob Canyon-Farm Stay-cows, goats, alpaca',
        address:"Cedar City, Utah, Us",
        slug:slugify("Zion Kolob Canyon-Farm Stay-cows goats alpaca",{
            lower:true
        }),
        rating:5.0,
        pricePerNight:120,
        thumbnail:"https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/8ef7a4b0-79b0-439c-9da0-4a170ad4090d.jpeg?im_w=720",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/8ef7a4b0-79b0-439c-9da0-4a170ad4090d.jpeg?im_w=960"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/4e36f28d-27cf-4bea-b473-c83ddec5fb9b.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/ba5fb19b-3986-442f-8fda-9c64c812ffd2.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/3e298f84-f658-4423-8edf-fad0254cacf9.jpg?im_w=1200"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/20f1b109-4612-4b70-ac6d-025727c305a4.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/273e9f6a-1608-4f7a-8bed-477a5259b38f.jpeg?im_w=720"
            },
        ],
        aboutThePlace:"Escape the busy life and relax in the countryside in Beautiful Kanarraville, UT. Our Friendly cows will meet you off your private back patio! This serene, private guest home on our family ranch is just 9 miles south of Cedar City. Enjoy our friendly farm animals, orchard, and seasonal garden. Minutes from Kanarraville Falls, Spring Creek, and other trails. 10 min from Zion's North Entrance. Central location to other Parks: Capitol Reef, Bryce Canyon, Grand Canyon, Arches, Canyonlands.",
        features:[
            {
                id:uniqid(),
                text:"Desert View"
            },
            {
                id:uniqid(),
                text:"Fast wifi-94Mbps"
            },
            {
                id:uniqid(),
                text:"Free parking on premises"
            },
            {
                id:uniqid(),
                text:"65 HDTV with Roku, Hulu, Disney+, Netflix, Apple TV, Amazon Prime Video, Fire TV, HBO Max, Chromecast"
            },
            {
                id:uniqid(),
                text:"Garden view"
            },
            {
                id:uniqid(),
                text:"AC – split-type ductless system"
            },
            {
                id:uniqid(),
                text:"Private back garden – Fully fenced"
            },
        ],
        rooms:[
            {
                id:uniqid(),
                content:"6 guests"
            },
            {
                id:uniqid(),
                content:"1 bedroom"
            },
            {
                id:uniqid(),
                content:"3 beds"
            },
            {
                id:uniqid(),
                content:"1 bathroom"
            },
        ]
    },
    {
        id:uniqid(),
        name:'Scenic A-frame retreat, Hot Tub, Treehouse & more!',
        address:"Grass Valley, California, Us",
        slug:slugify("Scenic A-frame retreat Hot Tub Treehouse",{
            lower:true
        }),
        rating:5.0,
        pricePerNight:280,
        thumbnail:"https://a0.muscache.com/im/pictures/miso/Hosting-729597790487190657/original/07c2691a-7a40-4740-bf9b-6e821b52547b.jpeg?im_w=960",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-729597790487190657/original/d96f67a7-39f3-46ab-a341-e3b57b2b1c2f.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/6b276b37-4ca4-44b1-a8cf-62eba91c8831.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-729597790487190657/original/bc63427b-48a3-479e-b64f-7875c6ddca8f.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-729597790487190657/original/b206fe45-1282-43f3-970d-8799e6c5a6c9.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-729597790487190657/original/14d2ed23-c387-49af-84f4-4b00bcc27014.jpeg?im_w=1200"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-729597790487190657/original/ed5bd82d-a039-4543-9905-b0af87680e08.jpeg?im_w=720"
            },
        ],
        aboutThePlace:"Welcome to the Triangle Ranch! Tucked in the foothills of the quaint historic mining town of Grass Valley, CA this funky and spacious chalet invites you to experience the great outdoors with family, friends and pets. Enjoy the hot tub, basketball court, treehouse, kids rooms, bbq, fire-pit, outdoor theater, and more. One hour from Tahoe and 10 minutes to town, you’re never short of things to explore.",
        features:[
            {
                id:uniqid(),
                text:"Garden View"
            },
            {
                id:uniqid(),
                text:"Fast wifi-94Mbps"
            },
            {
                id:uniqid(),
                text:"Free parking on premises"
            },
            {
                id:uniqid(),
                text:`"50" HDTV with Disney+, Netflix"`
            },
            {
                id:uniqid(),
                text:"Pets Allowed"
            },
            {
                id:uniqid(),
                text:"Security cameras on property"
            },
            {
                id:uniqid(),
                text:"Free washer – In unit"
            },
        ],
        rooms:[
            {
                id:uniqid(),
                content:"12 guests"
            },
            {
                id:uniqid(),
                content:"5 bedroom"
            },
            {
                id:uniqid(),
                content:"8 beds"
            },
            {
                id:uniqid(),
                content:"2.5 bathroom"
            },
        ]
    },
    {
        id:uniqid(),
        name:'Dunlap Hollow A-Frame',
        address:"Rockbridge, Ohio, Us",
        slug:slugify("Dunlap Hollow A-Frame",{
            lower:true
        }),
        rating:4.9,
        pricePerNight:380,
        thumbnail:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=960",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/24a05e1f-1b03-43bc-a2d5-c757e8dbdea1.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/b1726498-95c5-47dd-829a-f23e8aacd93a.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/cc4f1bc9-d24f-4e2e-93fb-5441988ba3a0.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/06e6d8a0-6256-475b-a4e7-b3b4c7934fbb.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/4e911a89-23ca-4c53-afbf-6783b998bdbb.jpeg?im_w=1200"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/feb81b07-606a-4485-b9e1-5a584b1c86e2.jpeg?im_w=720"
            },
        ],
        aboutThePlace:"The Dunlap Hollow A-Frame is a custom luxury A-Frame completed in 2021. The A-Frame sleeps up to 10 guests with 3 bedrooms and a picturesque loft filled with windows that sleeps 4. ",
        features:[
            {
                id:uniqid(),
                text:"Kitchen"
            },
            {
                id:uniqid(),
                text:"Hot tub"
            },
            {
                id:uniqid(),
                text:"Washing Machine"
            },
            {
                id:uniqid(),
                text:"Air Conditioning"
            },
            {
                id:uniqid(),
                text:"Wifi"
            },
            {
                id:uniqid(),
                text:"Tv"
            },
            {
                id:uniqid(),
                text:"Patio or balcony"
            },
        ],
        rooms:[
            {
                id:uniqid(),
                content:"10 guests"
            },
            {
                id:uniqid(),
                content:"3 bedroom"
            },
            {
                id:uniqid(),
                content:"6 beds"
            },
            {
                id:uniqid(),
                content:"2 bathroom"
            },
        ]
    },
    {
        id:uniqid(),
            name:'Dome - Bamboo Villa in Eco Six Bali',
            address:"Tampaksiring, Indonesia",
        slug:slugify("Dome Bamboo Villa in Eco Six Bali",{
            lower:true
        }),
        rating:4.8,
        pricePerNight:200,
        thumbnail:"https://a0.muscache.com/im/pictures/4a5c629b-9c92-450e-8d8f-995875798838.jpg?im_w=960",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/08a9afde-e2f2-48aa-b8b0-a7e747318943.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/b51f509a-9c94-4d1c-a31c-1a465e1670ac.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/0295e1cd-09fe-448a-b837-7bf5ade3809c.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/6d3f81b5-affa-4c13-8681-4081d2568be6.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/60e3834a-a1be-4ce9-bbce-8f70e761e410.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/eef3b064-8ca2-4131-b37b-55b7db9cc845.jpg?im_w=1200"
            },
        ],
        aboutThePlace:"Located just a 20-minute scooter ride from the vibrant centre of Ubud, the Dome is a newly built one bedroom bamboo cabin situated within the Eco Six Resort. Enjoy the spacious two floored villa and its Santorini style infinity pool! Breakfast included!",
        features:[
            {
                id:uniqid(),
                text:"Wifi"
            },
            {
                id:uniqid(),
                text:"Free parking on premises"
            },
            {
                id:uniqid(),
                text:"Private hot tub"
            },
            {
                id:uniqid(),
                text:`"Air Conditioning`
            },
            {
                id:uniqid(),
                text:"Private pool"
            },
            {
                id:uniqid(),
                text:"Tv"
            },
            {
                id:uniqid(),
                text:"Dedicated workspace"
            },
        ],
        rooms:[
            {
                id:uniqid(),
                content:"2 guests"
            },
            {
                id:uniqid(),
                content:"1 bedroom"
            },
            {
                id:uniqid(),
                content:"1 bed"
            },
            {
                id:uniqid(),
                content:"1 bathroom"
            },
        ]
    },
    {
        id:uniqid(),
            name:'Unique Architecture Cave House by Cycladica',
            address:"Oia, Greece",
        slug:slugify("Unique Architecture Cave House by Cycladica",{
            lower:true
        }),
        rating:4.9,
        pricePerNight:230,
        thumbnail:"https://a0.muscache.com/im/pictures/51f4d564-3273-4f25-843d-54e17f6a8783.jpg?im_w=960",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/89bfd8d4-b0e5-4110-b935-70c1e551991b.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/e3225e45-909c-4150-8532-ae3086e75961.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/35c471f8-4c26-4398-994f-e192ac0dded8.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/79adfb68-c9fb-44f3-afc4-86df32cea59c.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/6b75dfcf-32ee-4296-906b-2edcfeea9414.jpg?im_w=1200"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/9a4184eb-0f39-4277-a110-480f87a650ae.jpg?im_w=720"
            },
        ],
        aboutThePlace:"This spacious, unparalleled cave house, hanging on the cliffs of the caldera in the center of Oia, is part of a traditional complex of cave houses, owned & renovated by a family of architects.",
        features:[
            {
                id:uniqid(),
                text:"Sea view"
            },
            {
                id:uniqid(),
                text:"Kitchen"
            },
            {
                id:uniqid(),
                text:"Private hot tub"
            },
            {
                id:uniqid(),
                text:"Air Conditioning"
            },
            {
                id:uniqid(),
                text:"Pets allowed"
            },
            {
                id:uniqid(),
                text:"Tv"
            },
            {
                id:uniqid(),
                text:"Dedicated workspace"
            },
            {
                id:uniqid(),
                text:"Bay view"
            },
        ],
        rooms:[
            {
                id:uniqid(),
                content:"4 guests"
            },
            {
                id:uniqid(),
                content:"2 bedroom"
            },
            {
                id:uniqid(),
                content:"2 beds"
            },
            {
                id:uniqid(),
                content:"1 bathroom"
            },
        ]
    },
    {
        id:uniqid(),
            name:'Unique Architecture Cave House by Cycladica',
            address:"Kolari, Finland",
        slug:slugify("Unique Architecture Cave House by Cycladica",{
            lower:true
        }),
        rating:4.8,
        pricePerNight:110,
        thumbnail:"https://a0.muscache.com/im/pictures/5c15b6c0-e411-4495-aa4c-8ca8813eeea2.jpg?im_w=960",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/43d2ea15-3f46-4ef6-a306-72391a13ebaf.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/9bd3f295-1b62-4383-9eed-692cdd33516a.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/de8a6e02-88c0-410d-aaba-557db193ae2d.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/510f8385-60ad-441f-af9d-616559f7d7b7.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/4cd863fd-cd46-4d9e-acb5-4963d7b058e1.jpg?im_w=1200"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/90a17fae-c9af-4997-8fb7-683d9188c57d.jpg?im_w=1200"
            },
        ],
        aboutThePlace:"A charming log cabin for rent in Ylläs, one of Lapland's premiere holiday destinations. The cottage is fully equipped with kitchen, fireplace, TV & DVD, sauna, shower, dishwasher, washing machine, drying cabinet. Bedroom, loft and sofa bed - sleeping space for up to six people. Everything you need for your perfect wonderful holiday in Lapland!",
        features:[
            {
                id:uniqid(),
                text:"Mountain view"
            },
            {
                id:uniqid(),
                text:"Kitchen"
            },
            {
                id:uniqid(),
                text:"Private sauna"
            },
            {
                id:uniqid(),
                text:"Air Conditioning"
            },
            {
                id:uniqid(),
                text:"Pets allowed"
            },
            {
                id:uniqid(),
                text:`32" HDTV with chromecast, Netflix`
            },
            {
                id:uniqid(),
                text:"Free dryer"
            },
            {
                id:uniqid(),
                text:"Wifi 25 Mbps"
            },
        ],
        rooms:[
            {
                id:uniqid(),
                content:"6 guests"
            },
            {
                id:uniqid(),
                content:"2 bedrooms"
            },
            {
                id:uniqid(),
                content:"5 beds"
            },
            {
                id:uniqid(),
                content:"1 bathroom"
            },
        ]
    },
    {
        id:uniqid(),
            name:'Tortola, British Virgin Islands',
            address:"BVI Village",
        slug:slugify("Tortola British Virgin Islands",{
            lower:true
        }),
        rating:4.8,
        pricePerNight:530,
        thumbnail:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-31706320/original/9d14cc92-c9ba-43cf-89b1-b55438982de2.jpeg?im_w=960",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-31706320/original/32ec3335-07d8-4cd2-ab9e-d8585d5b9b11.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-31706320/original/b04f5471-52e3-452e-8d2b-4abff1f32756.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-31706320/original/9092611f-9364-40dc-a70c-f3f9325fd7c6.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-31706320/original/b45449f9-2537-40ad-aa6d-776fe6aa9599.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-31706320/original/28c31592-1b5f-406e-a479-60de024b99ec.jpeg?im_w=1200"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-31706320/original/5a9fefb6-f244-49a5-a837-c8223a6fb613.jpeg?im_w=1200"
            },
        ],
        aboutThePlace:"Book with confidence, we're the well-established Villas of Tortola team! BVI Village is a bohemian retreat where you'll fall in love with outdoor living . . a reminder that simple is often better. The fresh white walls & simple decor are just a backdrop for easy, breezy living on top of the hill!",
        features:[
            {
                id:uniqid(),
                text:"Beach view"
            },
            {
                id:uniqid(),
                text:"Kitchen"
            },
            {
                id:uniqid(),
                text:"Free parking on premises"
            },
            {
                id:uniqid(),
                text:"Air Conditioning"
            },
            {
                id:uniqid(),
                text:"Private pool"
            },
            {
                id:uniqid(),
                text:"Dedicated workspace"
            },
            {
                id:uniqid(),
                text:"Free Washer"
            },
        ],
        rooms:[
            {
                id:uniqid(),
                content:"6 guests"
            },
            {
                id:uniqid(),
                content:"3 bedrooms"
            },
            {
                id:uniqid(),
                content:"3 beds"
            },
            {
                id:uniqid(),
                content:"3 bathroom"
            },
        ]
    },
    {
        id:uniqid(),
            name:'Ferienhaus Chammweid',
            address:'Gams, Switzerland',
        slug:slugify("Ferienhaus Chammweid",{
            lower:true
        }),
        rating:5,
        pricePerNight:130,
        thumbnail:"https://a0.muscache.com/im/pictures/miso/Hosting-20520172/original/03fa459e-4187-47e4-9cb4-09125f7f46f6.jpeg?im_w=960",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/d48a932f-956d-4fe8-96fc-bedb6ec6c8ac.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/9a18864b-f433-48d1-8752-7f52642c3e7d.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/9f89ef18-1fae-4008-9421-eba866e1a0ef.jpg?im_w=1200"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/2067f1c4-6e1b-4cdc-892a-27211c971128.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-20520172/original/230ffb2b-860a-48ab-823b-bc417b9deb66.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-20520172/original/1aabf222-3b52-44f3-82d0-bbc44c88d1ce.jpeg?im_w=1200"
            },
        ],
        aboutThePlace:"Das Ferienhaus Chammweid steht mitten im Grünen am Gamserberg auf ca. 950 M.ü.M. Die Lage ist ruhig und bietet eine prächtige Aussicht über das St. Galler Rheintal und eine herrliche Bergkulisse rundherum. Der grosse Sitzplatz lädt ein, die Natur zu geniessen und die Seele einfach baumeln zu lassen.",
        features:[
            {
                id:uniqid(),
                text:"Valley view"
            },
            {
                id:uniqid(),
                text:"Kitchen"
            },
            {
                id:uniqid(),
                text:"Free parking on premises"
            },
            {
                id:uniqid(),
                text:"Mountain view"
            },
            {
                id:uniqid(),
                text:"Private balcony"
            },
            {
                id:uniqid(),
                text:"Dedicated workspace"
            },
            
        ],
        rooms:[
            {
                id:uniqid(),
                content:"6 guests"
            },
            {
                id:uniqid(),
                content:"2 bedrooms"
            },
            {
                id:uniqid(),
                content:"4 beds"
            },
            {
                id:uniqid(),
                content:"1 bathroom"
            },
        ]
    },
    {
        id:uniqid(),
            name:'Lauchernalp Ski-in/Ski-out - modern apartment',
            address:'Wiler, Switzerland',
        slug:slugify("Lauchernalp modern apartment",{
            lower:true
        }),
        rating:5,
        pricePerNight:110,
        thumbnail:"https://a0.muscache.com/im/pictures/6c9c56ce-0f1f-4d2a-b1f4-136be4d00a4c.jpg?im_w=720",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/6b952110-90eb-4262-825f-60157f10af7f.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/9158ed5c-9254-432e-a263-c0f8ce3bfb24.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/0139bf53-b715-47b3-a752-77e01d3f13f0.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/c10bc428-e81f-447f-815c-2253572cafe6.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/bd851198-7031-4976-8314-796568edeb8d.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/cae242f5-402d-4cbe-b7b4-cbc3f38ece56.jpg?im_w=1200"
            },
        ],
        aboutThePlace:"Die sonnige und gemütliche Wohnung wurde im Herbst 2019 renoviert. Die Wohnung liegt im Erdgeschoss mit Blick auf das berühmte Bietschhorn. Der sonnige Balkon lädt zum Verweilen ein. Die Wohnung ist voll ausgestattet. Im Winter kann man mit den Ski bis zur Wohnungstür fahren. Im Winter werden die Ski/Snowboard 2x täglich bis zur Luftseilbahn transportiert. Den sonnigen Skitag kann man mit einem Besuch im Hallenbad und der Sauna des Alpine Village ausklingen lassen.",
        features:[
            {
                id:uniqid(),
                text:"Mountain View"
            },
            {
                id:uniqid(),
                text:"Kitchen"
            },
            {
                id:uniqid(),
                text:"Free parking on premises"
            },
            {
                id:uniqid(),
                text:"Ski-in/Ski-out"
            },
            {
                id:uniqid(),
                text:"Shared pool"
            },
            {
                id:uniqid(),
                text:"TV with standard cable/satellite"
            },
            
        ],
        rooms:[
            {
                id:uniqid(),
                content:"4 guests"
            },
            {
                id:uniqid(),
                content:"1 bedrooms"
            },
            {
                id:uniqid(),
                content:"2 beds"
            },
            {
                id:uniqid(),
                content:"1 bathroom"
            },
        ]
    },
    {
        id:uniqid(),
            name:'Taos Skybox "Horizons" High Desert Retreat',
            address:'El Prado , New Mexico ,US',
        slug:slugify("El prado",{
            lower:true
        }),
        rating:5,
        pricePerNight:140,
        thumbnail:"https://a0.muscache.com/im/pictures/miso/Hosting-759596000718190410/original/b6cf63f1-b0b7-45ca-a9c4-a3f323ff8a11.jpeg?im_w=960",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-759596000718190410/original/3b124845-1768-4ae3-9555-b279cf3b7ee0.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-759596000718190410/original/55c8976c-ea51-426b-bf64-ab1d73578783.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-759596000718190410/original/e65e18c0-371e-4a4b-bf9a-deda6cfb9756.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/b4d95770-f103-4224-84a8-a7c70b05ca43.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-759596000718190410/original/9b852a2f-246d-4239-9394-1dd204e060c8.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-759596000718190410/original/22bc5e1c-a8db-4a76-9b66-a20de940bcf8.jpeg?im_w=720"
            },
        ],
        aboutThePlace:`Set on 30 acres of private land on the western edge of town, Taos Skybox "Horizons" studio is a unique vacation home experience, purpose-built to take advantage of the dark skies and endless vistas of the high desert landscape. Sitting at 7,000 ft. above sea level, views abound, as your retreat borders Taos Pueblo Native lands, yet is only 15 minutes from the Taos Plaza. Truly a memorable destination, Horizons is modern and well-equipped with a full kitchen, laundry, and fiber optic internet!`,
        features:[
            {
                id:uniqid(),
                text:"Desert View"
            },
            {
                id:uniqid(),
                text:"Kitchen"
            },
            {
                id:uniqid(),
                text:"Dedicated workspace"
            },
            {
                id:uniqid(),
                text:"Mountain view"
            },
            {
                id:uniqid(),
                text:"Tv"
            },
            {
                id:uniqid(),
                text:"Free parking"
            },
            
        ],
        rooms:[
            {
                id:uniqid(),
                content:"2 guests"
            },
            {
                id:uniqid(),
                content:"Studio"
            },
            {
                id:uniqid(),
                content:"1 bed"
            },
            {
                id:uniqid(),
                content:"1 bathroom"
            },
        ]
    },
    {
        id:uniqid(),
            name:'Naam Sawan',
            address:'Cape Yamu , Thailand',
        slug:slugify("Naam Sawan",{
            lower:true
        }),
        rating:4.8,
        pricePerNight:110,
        thumbnail:"https://a0.muscache.com/im/pictures/14152ff7-28fa-48cc-9c90-ac787fb5bb6b.jpg?im_w=960",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-3251026/original/825da780-127b-4155-982b-2a958b436eb2.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/be6454cf-0b33-46c3-836a-2a6db9dc4d54.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/a246b08e-5a1d-46f9-a75a-c4392fd670a7.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/7c6b0039-39d1-4d45-b405-898481cd12c2.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=1200"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-3251026/original/760443f6-8e95-41cc-a11b-8b55b185ba6b.jpeg?im_w=720"
            },
        ],
        aboutThePlace:"Quarantining, social distancing and remote working is what this house is perfect for. Please ask us about special covid rates. It is an architectural villa on the south side of Koh Samui, private and in a natural environment, it has sweeping ocean views and has a great salt water lap pool. Half way up a hill, it gets natural breezes, whithout mozzies even at dusk. It is minimally designed, but takes maximum advantage of the nature. It is called the naked house because the walls are left naked.",
        features:[
            {
                id:uniqid(),
                text:"Free parking on premises"
            },
            {
                id:uniqid(),
                text:"Kitchen"
            },
            {
                id:uniqid(),
                text:"Dedicated workspace"
            },
            {
                id:uniqid(),
                text:"Mountain view"
            },
            {
                id:uniqid(),
                text:"Tv"
            },
            {
                id:uniqid(),
                text:"Pool"
            },
            
        ],
        rooms:[
            {
                id:uniqid(),
                content:"11 guests"
            },
            {
                id:uniqid(),
                content:"6 bedrooms"
            },
            {
                id:uniqid(),
                content:"7 beds"
            },
            {
                id:uniqid(),
                content:"5 bathroom"
            },
        ]
    },
    {
        id:uniqid(),
            name:'Ollero Eco Lodge (inc. a glass igloo)',
            address:'Rovaniemi ,Finland',
        slug:slugify("Ollero Eco Lodge",{
            lower:true
        }),
        rating:4.9,
        pricePerNight:510,
        thumbnail:"https://a0.muscache.com/im/pictures/fb860347-88b9-4a1a-acfe-d518f3f77072.jpg?im_w=960",
        images:[
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/3be6e419-06b0-4f4a-bfcf-9a8f05049085.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/bd4fff0b-5505-4c38-bf7e-503f78c37c27.jpg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-36986800/original/957dfda9-e4ab-45fd-918e-f51af0451757.jpeg?im_w=720"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/3ddb32a6-b8c1-49d5-86ff-58d45a2bee47.jpg?im_w=1200"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/miso/Hosting-36986800/original/2ed80f5b-a07a-42e7-969b-5657bf27679a.jpeg?im_w=1200"
            },
            {
                id:uniqid(),
                img:"https://a0.muscache.com/im/pictures/72304936-dd91-45db-9560-eade28bee5df.jpg?im_w=1200"
            },
        ],
        aboutThePlace:"Welcome to Ollero Eco Lodge – we’re a family-owned environmentally friendly cottage retreat by the Ounasjoki river on the Arctic Circle. You’ve found the perfect base for your holiday in Rovaniemi: Ollero Eco Lodge sleeps 6 people (8 with extra beds) in a quiet location just outside the city. We’re a 10-minute drive from the city center with all its services and attractions, yet free of the fuss and light pollution – a prime spot for observing the Aurora Borealis and arctic nature.",
        features:[
            {
                id:uniqid(),
                text:"Beach access-Beachfront"
            },
            {
                id:uniqid(),
                text:"Kitchen"
            },
            {
                id:uniqid(),
                text:"Dedicated workspace"
            },
            {
                id:uniqid(),
                text:"Mountain view"
            },
            {
                id:uniqid(),
                text:"Tv"
            },
            {
                id:uniqid(),
                text:"Free parking"
            },
            
        ],
        rooms:[
            {
                id:uniqid(),
                content:"6 guests"
            },
            {
                id:uniqid(),
                content:"3 bedrooms"
            },
            {
                id:uniqid(),
                content:"4 beds"
            },
            {
                id:uniqid(),
                content:"2 bathroom"
            },
        ]
    },
]

module.exports=hotels