const app = require("./src/app");
const Settings = require("./src/config/settings");

const port = Settings.appPort || Settings.port || 3000;

app.listen(port, () => {
  console.log(`✅ ${Settings.env} server running on port ${port}`);
  console.log(`🌐 http://localhost:${port}`);
});