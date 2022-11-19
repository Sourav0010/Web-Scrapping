let link = [...document.querySelectorAll('a')];
let links = [];
link.map(l => links.push(l.href));
console.log(link.toString().split(',').join("         "));


// Just Open The Site You Want To And open Dev Tools And Just Paste It It Will Scrape That Website And Grab All The Attached Links