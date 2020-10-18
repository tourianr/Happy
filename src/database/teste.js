const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  await saveOrphanage(db, {
    lat: "-27.212633",
    lng: "-49.6555874",
    name: "Lar das crianças",
    about:
      "Presta assistência a crianças de 6 a 15 anos que se encontre em situalção de risco e/ou vulnerabilidade social.",
    whatsapp: "89 98984578956",
    images: [
      "https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir à vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas: Das 8h às 18h.",
    open_on_weekends: "1",
  });
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);
});
