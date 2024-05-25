/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nft_list = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, age, height, city, haircolor, ) {
    const nft = {
        "name": name,
        "age": age,
        "height": height,
        "city": city,
        "haircolor": haircolor
    };
    nft_list.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < nft_list.length; i++){
        console.log("Name:   " + nft_list[i].name);
        console.log("Age:    " + nft_list[i].age);
        console.log("Height: " + nft_list[i].height);
        console.log("City:   " + nft_list[i].city);
        console.log("Haircolor: " + nft_list[i].haircolor+"\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs: " + nft_list.length);
}

// call your functions below this line
mintNFT("shubham",20,5.6,"patna","black");
mintNFT("Nayan",35,5.4,"Bhagalpur","White");
mintNFT("Supratik",25,5,"Bhojpur","Red");
mintNFT("Harsh",22,6,"Delhi","black");
listNFTs();
getTotalSupply();
