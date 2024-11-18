const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://creators-release.ae-qa.techtank.ca/',
    env: {
      accessToken: '{"access_token":"SF5ybf1_tWNc6I0v7eToFLER9woGk368B4u4ROEbXPg","token_type":"Bearer","expires_in":7200,"refresh_token":"OJmUQPI7iAPiS-GV4y6rFilwfzvCkxePJ4kLufOTFtA","scope":"public profile openid name email","created_at":1731855577,"id_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkJsRU1xMkZZRG1GMWpJYWJCbTltX1NSOHFORG0zX1lfcW9aRFVsdFp2cHcifQ.eyJpc3MiOiJBY3Rpb25FcmEgU1NPIiwic3ViIjoiMjc2NmI3NGItMmE3MS00YTUwLTg2YjMtYWQ1ZmYzZGExNjlhIiwiYXVkIjoiaWd3QXlVbGRHWVR5X2ZNLWd4Z3ptLS00Qnhla0JqOGQycUlnRFFVRTh5YyIsImV4cCI6MTczMTk0MTk3NywiaWF0IjoxNzMxODU1NTc3LCJuYW1lIjoiU2hheW5lIiwiZW1haWwiOiJzaGF5bmVAdGVjaHRhbmsuY2EiLCJ0aW1lem9uZSI6IkFzaWEvTWFuaWxhIiwiaXNfc3VwZXIiOnRydWV9.u0Ne8iWuMO--_C4mzVENDv3RuxiaEvTewY4agO0mMaAvDuMUPE1M8jO6q1ug9MRRYv1VtaMAuS_xV7E8lxguC5NQj4BV3FbZ-mBF7d07GnAmU4LdeuftPGMpS-hzJfu-iLb3j6ZWW9TM232-TlSfHgMi9hHqNsy6CK-ESffUrLog4QWedZfIWdKA55Aa4H-IdgIxJRGjCUpRSm3X7XETJA4ReNLA3J_9Pc-lKZLaF_5V1CVtwisiwFZOcQK0-opwbIYTtPhNvAy521B1j6q3ZIUL09NNo6XMZ9RbJdqGeMFpYIJl5B3Y24aX-Y4_nrKAE3qe-BqKuJex5xUzFBpzxMn-8CLmnVr8sQB4Oi8wx0rLCBjUtXUT5nOxQUl7lp6Yv4bPM-JWsoNKIcMHZBG-B8KryFMAz4GQDF8BKPuerWa9v3a1Npe-3JDIvUic5F3c6jHp3WNlGy2xtGFEnGUovMf-kA085LzirkC2vfw0QmIBPTKb-Go5OoBgCxHKlX8P8xMCD-QB614Znekr1lbU-QqmdH6Zv4iesbSw0IqtS7Y7WWGGHmbuoOSKguUKmYkkbgEqbk8a867MSBi_pGtUU5YKw6kKxLLAoIgo2I8xw2QYVjLrji5twLt1-G7kI7dzmxRxajBAFQ0vV79QBegTgQN8zIK_zkzqx-jZRg1P4fE","expires_at":1731862780898}'
    }
  },
});
