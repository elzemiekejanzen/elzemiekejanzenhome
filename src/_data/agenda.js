const fs = require("fs");
const path = require("path");

const WHATSAPP = "https://wa.me/31634432181";

const dagen = ["zo", "ma", "di", "wo", "do", "vr", "za"];
const maanden = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

module.exports = function () {
  const items = JSON.parse(fs.readFileSync(path.join(__dirname, "agendaItems.json"), "utf8"));
  const vandaag = new Date().toISOString().slice(0, 10);
  return items
    .map((item) => {
      const sleutel = item.datum || item.sorteer;
      const d = item.datum ? new Date(item.datum + "T12:00:00") : null;
      const wanneer = d ? `${dagen[d.getDay()]} ${d.getDate()} ${maanden[d.getMonth()]}` : "";
      const bericht = `Hoi Elzemieke, ik wil me graag aanmelden voor ${item.titel}${wanneer ? " op " + wanneer : ""}.`;
      return {
        ...item,
        link: item.aanmelden ? `${WHATSAPP}?text=${encodeURIComponent(bericht)}` : item.link,
        linkTekst: item.aanmelden ? "Aanmelden via WhatsApp" : item.linkTekst,
        sleutel,
        dag: d ? d.getDate() : null,
        maand: d ? maanden[d.getMonth()] : null,
        weekdag: d ? dagen[d.getDay()] : null,
        extern: /^https?:/.test(item.link),
      };
    })
    .filter((item) => !item.datum || item.datum >= vandaag)
    .sort((a, b) => a.sleutel.localeCompare(b.sleutel));
};
