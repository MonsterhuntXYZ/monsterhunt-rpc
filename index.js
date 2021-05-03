const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });
const config = require("./config.json"); 

client.on("ready", () => {
  client.setActivity({
    state: config.state,
    largeImageKey: config.largeImageKey,
    largeImageText: config.largeImageText,
    buttons: config.buttons,
  });

  console.log("Presence is ready");
});

// initial login, may fail when discord first starts 
client.login({
  clientId: config.clientId,
});

// backup login if it does fail 
setInterval(() => {
  client.login({
    clientId: config.clientId,
  });
}, 600000);
