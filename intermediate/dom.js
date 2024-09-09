// overall structure of webpage esa hota hai ki (window->Document->HTML)
// ham dom ki bhut sari property/function ka use kar sate hai jese selecting an element by id
// agar hame class get karni hai kisi element by getting it by id then document.getElementById('rajat').className // ha className not class

// innerText and textContent ke beech ka difference ye hai ki dono applied element ka text dete hai lekin innerText sirf visible vala content deta hai aur wahi textContent wal hidden ho ya visible same de deta hai
// innerHTML ka use karne par is agar koi aur element hai us element ke ander to woh bhi de dega output me

// documnet.querySelectorAll() se hame saari ek type ke element mil jaate hai aur woh present rhete hai NodeList ke form me ye array jesa hota hai but 
// array nhi hai so isme sirf forEach loop use kar sakte hai aur getting element is same as the way we select the element in array 

// document.getElementsByClassName() karne se hame us particular name wali saari class mil jati hai aur woh HTMLcollections me store hoti hai jisse ham convert kar dete hai array by using Array.from(CollectionKaname jisme store kiye ho) 