const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
var ts = new Date();
ts = ts.getTime();
var titen = [];
console.tilik = console.log.bind(console);
const netep = async () => {
    var re = 0;
    await sleep(3000);
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
    await sleep(10000);
    document.querySelector("colab-run-button").click();
    await sleep(5000);
    try {
	document.querySelector("#ok").click();
	console.log("bayangan wis di pencet")
    }
	catch(err) {
	console.log("ora nana bayangan")
    }
    console.log('--------------- Molaih macul -----------------------')
    for (let index = 1; index < 901; index++) {
    	    if(index % 27 == 0){
	    	document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
	    }
	    console.log('di baleni ping ' + re);
	    const mentahan = [45535, 47567, 58936, 46932, 63936, 52032, 55623, 37045, 65345];
	    const ngasal = Math.floor(Math.random() * mentahan.length);
	    await sleep(mentahan[ngasal]);
            console.log = function() {
                titen.push(Array.from(arguments));
                console.tilik.apply(console, arguments);
            }
            for (let niliki = 0; niliki < titen.length; niliki++) {
                if (titen[niliki][0] == 'Runtime disconnected') {
                	await sleep(mentahan[ngasal] * 1.6);
			document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
    			await sleep(10000);
    			document.querySelector("colab-run-button").click();
    			console.log('%cpacule di jaluk', 'color: #db0000');
    			re = re + 1;
                }
            }
            titen = [];
	    console.clear();
	    try {
		document.querySelector("#ok").click();
		console.log("%cbayangan wis di pencet", 'color: #19bd5d')
	    }
	    catch(err) {
	    }
	    if(index % 60 == 0){
	    	re = re + 1;
	    	document.querySelector("colab-run-button").click();
	    	console.log('%cmolaih mbaleni', 'color: #ccb51f');
	    }
	    var siki = new Date();
	    siki = siki.getTime();
	    n = siki - ts;
	    h = Math.floor(n / (1000*60*60));
	    m = Math.floor((n - h * (1000*60*60)) / (1000*60));
	    console.log('%cuis mlaku '+ h + ' jm, '+ m + ' mt', 'color: #19bd5d');
    }
    console.log('--------------- Macule Rampung Setengari! ---------------------');
    console.log('--------------- Lg siap siap macul maning ---------------------');
    await sleep(350000);
    netep();
}
netep();
