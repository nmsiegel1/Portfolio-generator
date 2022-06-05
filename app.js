const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


const printProfileData = profileDataArrr => {
    // this 
    for (let i = 0; i < profileDataArrr.length; i += 1){
        console.log(profileDataArrr[i]);
    }
    console.log("===========");
    // is the same as this....
    profileDataArrr.forEach((profileItem) => {
        console.log(profileItem);
    });
};

printProfileData(profileDataArgs);