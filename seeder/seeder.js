const Item = require('../models/item');
const mongoose = require('mongoose');


//must connect to database
mongoose.connect('mongodb://localhost:27017/netless', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (error) =>{
    if (!error) {
        console.log('success');
    } else {
        console.log('error connecting to database.');
    }   
});


// seed some data in db
var items = [
    //done
    new Item({
        imagePath: "https://lh3.googleusercontent.com/zp2HDvrXxVEwg9OecMVsP1xn7wgg1-KyFlsEOZ8VsGT1R2gl7wd3fc_anONyXGnW37F6i5vMg6KK_H_oaeGMBLpS5euoGvS6u_nghl9CY6O-XltkJXLx5s97Xo_0Tbz7zlaqLQJS0Q",
        itemName: "Toilet Paper",
        itemPrice: '10',
        itemCat: "cleaning",
        description: "This is in limited supply, buy now!"
    }),
    //done
    new Item({
        imagePath: "https://lh3.googleusercontent.com/KyXUiSxZg-e5k1CkwoYMU_so1K2QVg560TjdYf0RSNPgcHwtEFSNm4YVEchpTWmf1XOetVJjbOMQj83LWwUqm-MBPIeu74lymhwVeIQxU5klMs3dPKmj1c0ur2Ax7YkiWbfke_fPWg=w2400",
        itemName: "Hand Sanitizer",
        itemPrice: '5',
        itemCat: "cleaning",
        description: "Clean your hands often with this product!"
    }),

    //done
    new Item({
        imagePath: "https://lh3.googleusercontent.com/-qxVOiVYjEG5Nizi0A9CZsqnOBvtfUV-WGyKIualApMCTaobXHWX5L59vjSvURqUwhpibYRYU2i-ZVTG-XipS2UQR6v3P_w5Mz0whDH-PnDocAHJwPwlZn0Gb-z-HDCypyx0P6GtSA=w2400",
        itemName: "Disinfectant Spray",
        itemPrice: '6',
        itemCat: "cleaning",
        description: "Smells great, too!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/NWdHD0nM9-a8EauThaleCnJCRBsvOrz5sB1rLvtCVfopKGvcEZOgTL55a_0lfNO5LO95l3va5EQ7LKqQlvgSxiBwgySLEMoNWArsm3GSMz8i7dTNnR5wVpjV5Ns8RCVbbmKxq-BqEQ",
        itemName: "Laptop",
        itemPrice: '150',
        itemCat: "elec",
        description: "A great item for when you need to work remotely."
    }),

    
    new Item({
        imagePath: "https://lh3.googleusercontent.com/1mKcdVtmZsRA0ogQXfFRBAl8mShL5Fv8W0zfUnagY3qtxPvP8otu4bpPRsHBxhHkJ35Djc236-C-F0SdB4BNKEy9kAWE42196-suZSyy1VqSW-2PQoSoXW_zEBHErpvTeJPQAGDIag",
        itemName: "Nintendo Switch",
        itemPrice: '300',
        itemCat: "elec",
        description: "A great product for staying indoors! Buy today before they're all gone!"
    }),

    
    new Item({
        imagePath: "https://lh3.googleusercontent.com/alJUIjisnyr_WJ4B4aQhkIzJERvPUM-sdrWPsmG4xYvsSUL7vU1f7dHAPO5w3Ic2O9c1n6SbuH9n9YbuAogv63EhCGdQn_JekNA75xXZNXb3sLce1-mgI24ISpwUmeLsFat7CtW44Q",
        itemName: "Stapler",
        itemPrice: '10',
        itemCat: "school",
        description: "Don't steal your co-worker's stapler, order your own today!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/gd5g4uggaD5nPWvh8ojfAASAlhntxreqWC5uu-gSwLYDC9z8_EIk_rg8gjhFsLW3IyMNF_ceB5D2cLToe_fOBDqpy1DHFb8KYDX4SByN6B0MTJCuv1nNeDdNNOq3VpiPnd7InghiAQ",
        itemName: "Broom",
        itemPrice: '5',
        itemCat: "cleaning",
        description: "Keep those floors clean with this product, order now!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/R5OhWtEhP3DcBADVaPzcVQFv7zxAoJJWTIEvGSCk0nEkibXmtaP1UEAOyKb2xMNPR22unN6Ml8P5XCQupHE-XE-7U1dog3QrJhcG7082bh4T2O-HmvdgkGrbBRh4xJd0PtbqS5cDGg",
        itemName: "Soap",
        itemPrice: '2',
        itemCat: "cleaning",
        description: "For washing your hands or body, order now!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/sHzRYBRrfYl2tJ4r4vBJd0hIHCasaYOMltFpygjE2yu30jQoSernU1eiQ1pXlJpefAlawgqBc6XC2KA5ui3uoupg4q4_x3sZ720BjtgIv6jBvclRuWBpfH72QmfroHcIVrwqqLD-Pw",
        itemName: "Keyboard",
        itemPrice: '20',
        itemCat: "elec",
        description: "It has colorful lights, buy it today!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/QXVSnhe7mqn7w_e_XMPZlwvQAWMEqT2jMwSs2540VAqQBmmXgEJ4Ve7rNfEBXlTX7iAStDlnkBO0CiQ-agL3w9plkXKk5DKWNgTJ9pSQoCAFTCmcrNG6kYfxKF3tM6Pt6KrbV1jAXQ",
        itemName: "Camera",
        itemPrice: '350',
        itemCat: "elec",
        description: "A camera to capture all of your best moments, order now!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/nOoAybhXuhrah-y9B6CbPZLKBa3e5-gGUteENKiLdFnfZF3QdTUO-M__qRAY940GSK-6vwnsrDmJl1I5UBo9-glTgxONH6ujQivFQ03TSpgbUC-XlRiuLd4E2uX4M-XShvsi4X5TBw",
        itemName: "Vacuum",
        itemPrice: '50',
        itemCat: "cleaning",
        description: "Great on all surfaces, order now!"
    }),
    
    new Item({
        imagePath: "https://lh3.googleusercontent.com/J8rDtHi-pdDJygvoHNLitux-oquq619mRRPJdGoRoT7iut647cZSny57bDN_rfvB8ThMJdqtFsH2DMwWaFkjk7TotH1Tc-v3M0YDhg7GMNPwJrm_sfa1IiRV45Ukwuu80MorBt1HwQ",
        itemName: "Pencils",
        itemPrice: '3',
        itemCat: "school",
        description: "For taking notes in your classes, better than typing! Order now!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/xfqvjjFwPmR1MfhFMxcP-SO_pmqgqLykhdRWK-_jvUudM4xRBr31sJkvtCkud966vpHCg6KAaHC4a8MtPi7z30J5OxRvkMDfo7J0-_cZbq3y34rR8KziLfdHD6WP1-my0OCVq2IMHA",
        itemName: "Sharpener",
        itemPrice: '4',
        itemCat: "school",
        description: "Great for sharpening stuff, order now!"
    }),


    // start here
    new Item({
        imagePath: "https://lh3.googleusercontent.com/HkNKGqHUZqJWXHJVgdqCUhybwnT6uWuQDFHYGqhyu6CRpd7PiqeKfxELkuKdWovWcUdl-fFf4_n1HT7aNsfTm7LzPqGdyIarnhJjV5V0SwIZb5QLAjqIGZad4l4vaWgY63KiOnzHCw",
        itemName: "tablet",
        itemPrice: '80',
        itemCat: "elec",
        description: "A good option for taking notes if you don't like traditional paper. Try it today!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/vW39t5W33KP1IS8e1-T-OIFQeTMbAU0elTqiRgCWRU5LkWvoNvoddYahDy0keZ5GTWuLm-LwEyOnrO_RfdSIrblba7pt8VEg-XIDgudIhr2oF-pIGYL4uUgUKWiULFX1aaD9V-to9g",
        itemName: "Pens",
        itemPrice: '6',
        itemCat: "school",
        description: "A standard, long lasting option for taking notes"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/ME-Qg05rEkNeEhB0dGZBEsWLHNAG7YhoV7SselnG82xGMFFhXsMclDglkJTVV_Mu9dI_y2FefhqJGZeFaaraHWHoY62KxJdpuubJbdT8SKJrIMXfA3wF1BO_hHJMU0t1-laGn02mpg",
        itemName: "Mouse",
        itemPrice: '12',
        itemCat: "elec",
        description: "Standard mouse, no rgb lighting for gamers."
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/i7lrB_J0CzlRrUJKGqAWkbJ9Ebl8GGRyCOz4NlczDKFW6SZgOFJ9SAX2FPflQ8eJr4aqun0PD8yYUax4On-vyfTFyNQlT9_0xLyOuU34995Y7421BttWoMp0O5AXL8OniJoLL7ZHWA",
        itemName: "Drawing Tablet",
        itemPrice: '40',
        itemCat: "elec",
        description: "For all artists beginner to pro, order now!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/xPQ3sKWaGj8KfI6qThQIVR1O3iyjP2JDCUOrJsioN4adFbKnqvIDNOnjaX3nVb6QMbw-_CvzWs8XmxxIAdiqXYmk9iZOhNAERGNmri2wmtFRQWLfTXfydugDwWtz0I1YTsSj-ueZVA",
        itemName: "Eraser",
        itemPrice: '2',
        itemCat: "school",
        description: "For all those mistakes you've made!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/xfqvjjFwPmR1MfhFMxcP-SO_pmqgqLykhdRWK-_jvUudM4xRBr31sJkvtCkud966vpHCg6KAaHC4a8MtPi7z30J5OxRvkMDfo7J0-_cZbq3y34rR8KziLfdHD6WP1-my0OCVq2IMHA",
        itemName: "Calculator",
        itemPrice: '8',
        itemCat: "school",
        description: "Great for sharpening stuff, order now!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/Fpl8sq4b2UJj0QQl0eAUxYujkSqvQD0RJH_t9cq1xWlwSXPIkjHX6WryMlEyMbHJQnAJn9VbOZjpkuxd2impbUrVMIkSh0VI9O2jySa58zgE47WBxf7TJjU-8D-9m-cHFteKLjue-g",
        itemName: "Notebook",
        itemPrice: '5',
        itemCat: "school",
        description: "A great quality notebook for taking notes, drawing, or anything you want!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/TXB97keg4_p6rM4cDJq-wMQJIY37QMLsH9JPsttuC02W68YV9cQMKk4FEQs2vXtwE2mCVt6S-HDni91d4fXLj697S3zziOFp1X30dVqkdD3zYcuvjbLGeEd233xdvW2Q8dCtQDQLoQ",
        itemName: "Shredder",
        itemPrice: '30',
        itemCat: "elec",
        description: "For when you REALLY need to erase those mistakes you made"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/ZGYjITvI2bEq94iFRV6Dwiozk2Rx_dzOCpGYn1jwjX3AN0rqSLYFQErcS_S0OqGQbRCzNDvsDxiJp0ObcBgpakY9663u5o901Z3Qb7RAr4dTKvP39Meahp_CBcnBTDpElY6rvHY8Xw",
        itemName: "Sharpie",
        itemPrice: '5',
        itemCat: "school",
        description: "These do NOT come off , order now!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/x-lKlm_Uq4s4fF2A2OFYsCANLx-FsFgvJAtkzYDsYfDcv1zHVMFq-veVXDUQkPHZ2B3phkbKEc6cVao3n4ZRG9oHTBgVBrHOMnZv7pbHoSDDsL3FhBhngB78hVSw1CXibmtD3z0IqA",
        itemName: "Printer",
        itemPrice: '100',
        itemCat: "elec",
        description: "A great product, make sure to read the manual! "
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/UxxRyvkneuJmxGPB2WelRRiSeEIf4OiCtbOJAC4ANXU2NxL8V8yjBvmCMc6mM0eTuSpbYRgFxwNBP7h-OYKmJRgUqB8qDfzwCFp3aeorx7h9KFbHpHcF6bg2OTDkFMt7FiWW6Q5huw",
        itemName: "Ink Cartridges",
        itemPrice: '20',
        itemCat: "elec",
        description: "Stock up on plenty of these, you'll need them!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/GlUcFLmHDyPLD9x4lWS7UWn_m6a1AQSZlGyeEM8YOU2XRvj9WFOxijyMfdV7MtK1Ombn1eDzk7bf0GyG8uHg7rhyJWJY_aqcFUOTL0r5tvM789H7nMaSHEJJko9-OZ4yOMDd_XDiJw",
        itemName: "iPhone",
        itemPrice: '3000',
        itemCat: "elec",
        description: "Totally worth the money!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/gpnU9tUrJ_SJdIr9_ZoLwFwhHZ8heZDUz5DD8DsGEaI2CUv4kj6SBDFvlsJE_9KP2e2w6HDZBWFhUTTUhKJulVWY816IaPBC8qe2OVdqD1RL_JzdR3-AiW9UmoMHchsVG5K7Pghz1g",
        itemName: "Galaxy",
        itemPrice: '1000',
        itemCat: "elec",
        description: "Totally worth the money!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/p-5frue0nKBWRxyj1G6vo9u186bn5-ZIT8c6-6NimQmlvRr1rwpV9khlyV8k1mJlyA3SW03WoNYFNfZVBRTUsDP5UCn2nI_BVuHtugG_VmTufOiNs4yINEZV3E3eG9pnPdu2DSWWdw",
        itemName: "Feather Duster",
        itemPrice: '10',
        itemCat: "cleaning",
        description: "For those hard to reach places!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/XUtPA61yh9JmXOVwOY1U1sgyfXV9T1_5LD6-NbO8MtsV1cXcPD3CGFblR238trZGI7e7p6Dq0xYR35rIeC3TTqvCJ792GM9yK8-7RiMGZNIXhon84qw6l5AhohGWPlD5xeEkxvyLRw",
        itemName: "Sponges",
        itemPrice: '6',
        itemCat: "cleaning",
        description: "Grab these before they are all gone!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/0UUozvIx7GMv9hZk_0NNNMjbDRYmZ5JnX1j0Yv2VVzZm8rZxf1TCytDy_axeUf1K0Yw6e1ACdwBr3gtUyGX3-_DppNY03NTb0p5cngOKmG5xwsM7ZgSi8M0cyr6C-Aaw8X1TuCQYsg",
        itemName: "Backpack",
        itemPrice: '30',
        itemCat: "school",
        description: "Can carry everything you need for school, order now!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/5w4HapPR5_6wBx18Iv5j5VdexiktCwDwoxkSv1PweI71d964GGsRXrKo5gtQlTqSUGuF62e5T_UnVsQ3U6T5Mht1YI4w6J2SMpRRZNIWhQI1YZ09iiEeEVK5NB8-nihoQ36w3kiyxA",
        itemName: "Nintendo Switch Lite",
        itemPrice: '200',
        itemCat: "elec",
        description: "Great console, only smaller!"
    }),

];

var done = 0;
for (var i = 0; i < items.length; i++) {
    items[i].save(function (err, result) {
        done++;
        if(done === items.length) {
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}