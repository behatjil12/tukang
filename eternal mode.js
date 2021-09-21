const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const start = async () => {
    //Click on connect button
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
    //Wait for the VM to connect
    await sleep(10000);
    
    //Run script
    document.querySelector("colab-run-button").click();
    //Wait for the script to finish (you may change this)
    await sleep(5000);
    
    try {
      document.querySelector("#ok").click();
      console.log("continue github with ok button")
    }
    catch(err) {
      console.log("waiting to clear output")
    }
    await sleep(20000);
    try {
      document.querySelector("iron-icon[command = 'clear-focused-or-selected-outputs']").click()
      await sleep(5000);
      console.log('clear output success!')
    }
    catch(err) {
      console.log('filed to clear output')
    }
    stay();
}
const stay = async () => {
    for (let index = 1; index < 101; index++) {
        document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
        await sleep(45000);
        console.log('wating on ' + index+ ' form 100')
    }
    try {
        document.querySelector("#ok").click();
        console.log("found popup")
    }
        catch(err) {
        console.log("no pupup found")
    }
    await sleep(3000);
    console.log('on stop process')
    stop()
}
const stop = async () => {

    //Click on menu button
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
    await sleep(10000);
    
    //Click on manage sessions
    try {
    document.querySelector("body > div.notebook-vertical > div.notebook-horizontal > div.layout.vertical.grow > colab-tab-layout-container > colab-tab-pane > colab-resizer > div.layout.vertical.grow > iron-pages > colab-tab > colab-shaded-scroller > colab-usage-display").shadowRoot.querySelector("div:nth-child(4) > paper-button:nth-child(1)").click();
    console('show session')
    }
    catch(err) {
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
    console('try to show session')
    await sleep(5000);
    try {
        document.querySelector("body > div.notebook-vertical > div.notebook-horizontal > div.layout.vertical.grow > colab-tab-layout-container > colab-tab-pane > colab-resizer > div.layout.vertical.grow > iron-pages > colab-tab > colab-shaded-scroller > colab-usage-display").shadowRoot.querySelector("div:nth-child(4) > paper-button:nth-child(1)").click();
        console('show session')
    }
    catch(err) {
        document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
        console('try to show session')
        await sleep(5000);
        document.querySelector("body > div.notebook-vertical > div.notebook-horizontal > div.layout.vertical.grow > colab-tab-layout-container > colab-tab-pane > colab-resizer > div.layout.vertical.grow > iron-pages > colab-tab > colab-shaded-scroller > colab-usage-display").shadowRoot.querySelector("div:nth-child(4) > paper-button:nth-child(1)").click();
    }
    }
    await sleep(10000);
    //Click on terminate session
    document.querySelector("body > colab-dialog > paper-dialog > colab-sessions-dialog").shadowRoot.querySelector("div.dialog-main-content > div.sessions-content.layout.vertical > div.dialog-table > colab-session > div.button-action-column > paper-button").click();
    console.log('remove sess')
    await sleep(10000);
    
     //Click on okay buttom if prompted
    try {
      document.querySelector("#ok").click();
      console.log('confrim remove sess ok!')
    }
    catch(err) {
        console.log('try to close sess dialog')
    }
    await sleep(5000);
    
    //exit from session
    document.querySelector("body > colab-dialog > paper-dialog > colab-sessions-dialog").shadowRoot.querySelector("div.dialog-footer > div > paper-button").click();
    console.log('waiting to start')
    await sleep(3000);
    start()
}
start()