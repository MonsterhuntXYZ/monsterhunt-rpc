const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });

client.on("ready", () => {
  client.setActivity({
    state: "An RPG game on Discord",
    largeImageKey: "monsterhunt",
    largeImageText: "Monsterhunt",
    buttons: [
      {
        label: "Wiki",
        url: "https://wiki.monsterhunt.xyz",
      },
      {
        label: "Invite Bot",
        url: "https://www.monsterhunt.xyz/invite",
      },
    ],
  });

  console.log("Presence is ready");
});

// initial login, may fail when discord first starts 
client.login({
  clientId: "836934112744701982",
});

// backup login if it does fail 
setInterval(() => {
  client.login({
    clientId: "836934112744701982",
  });
}, 600000);
