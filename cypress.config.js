const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://creators-release.ae-qa.techtank.ca/',
    env: {
      accessToken: '{"access_token":"_95UqpFRqB4m8wU78aXFg5xyJN0LhBW5h_VLwnSiSGw","token_type":"Bearer","expires_in":7199,"refresh_token":"CI8pkZq2ur7mXHaKuxIUoZYmqlf6xWIxXZZkRaqxnjM","scope":"public profile openid name email","created_at":1732468504,"id_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkJsRU1xMkZZRG1GMWpJYWJCbTltX1NSOHFORG0zX1lfcW9aRFVsdFp2cHcifQ.eyJpc3MiOiJBY3Rpb25FcmEgU1NPIiwic3ViIjoiMjc2NmI3NGItMmE3MS00YTUwLTg2YjMtYWQ1ZmYzZGExNjlhIiwiYXVkIjoiaWd3QXlVbGRHWVR5X2ZNLWd4Z3ptLS00Qnhla0JqOGQycUlnRFFVRTh5YyIsImV4cCI6MTczMjU1NDkwNCwiaWF0IjoxNzMyNDY4NTA0LCJuYW1lIjoiU2hheW5lIiwiZW1haWwiOiJzaGF5bmVAdGVjaHRhbmsuY2EiLCJ0aW1lem9uZSI6IkFzaWEvTWFuaWxhIiwiaXNfc3VwZXIiOnRydWV9.S_bgFOm9P4WcJq5nYyEMoBYWsaWc2ah-zc5bxRoZSN0WaZksoYaCYQpSv0R1N0t5Wgu6gprgbUUwsqTZ9nCJRFiukPgsfSJ1TcraElZCkRFPpr28hOr-7gfUNKjfWEbq1qGBJoYCdYfm19f42Sby0RU4b98vemvSLXkNNDFohXSou-vtSKNPVdM53BEyKs5IvnP6pGTODXyVmP0Bqro5tUy_pwQr83GhVq-gMzjA381WeyxomatOjFG-3-0KDVfSFIkWO5MSJzlpfGAjq_5kZLDqJdkRx3biVKtjikq4_IhwQSXE1V1Fm55cKEA1zt9N2FP1N3JiuA1KjaTc2UbKmlOaEcW4YO6_dga7VD95LtO1AkBrOY0V9IaafNBi-1xUPkavdo-cMf5TXaC8bBjUeRJlA5f-Fza7Qtj-ZKDOwASlCl57hK1mWJMKq1FCxYfM4GXW0PY0YkqD6gzJArpoWWlcUQM-oEYVe3OCHb4rNgPY3AMDrEtBEOq7qNDsmexolx7KrrXosy5XuTDiOSzfEF51nh-G9senI0kLiLKZ5dhSKnblkZn1MYTWntzAV3SCpOXe8YrmekfKZmnwkhXNNKAzeCVqohIj4XYGAPXuR4rgQLjnUPF1IxWYplmsAYCBhXr5LJL8xtp5K6Zpz8N9QyV6O3RO8DNokYg6SeLU62g","expires_at":1732475708011}'
    }
  },
});
