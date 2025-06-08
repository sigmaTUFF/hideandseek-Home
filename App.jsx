import React, { useState } from 'react';

const bonusCards = [
  "+5 Minuten Bonuszeit",
  "+10 Minuten Bonuszeit",
  "+15 Minuten Bonuszeit",
  "+20 Minuten Bonuszeit",
  "+30 Minuten Bonuszeit",
];

const curseCards = [
  "Dorfgrenzen-Fluch: Du darfst deinen aktuellen Ortsteil 10 Minuten lang nicht verlassen.",
  "Picknick-Fluch: Du musst dich zu einer Liegewiese oder Sitzbank begeben und 5 Minuten dort bleiben.",
  "Ortsschild-Fluch: Deine nächste Bewegung muss zu einem Ortsschild führen.",
  "Kirchturmuhr-Fluch: Du darfst dich erst weiterbewegen, wenn eine volle Viertelstunde beginnt.",
  "Bäcker-Fluch: Du musst ein Foto von einer lokalen Bäckerei machen, bevor du weitermachen darfst.",
];

const powerUpCards = [
  "Versteck-Wechsel-Karte: Alles wird 30 Minuten eingefroren. Du darfst dein Versteck wechseln. Nur 1× im Spiel!",
  "Zufallsfrage: Du darfst eine Frage nach Wahl stellen, ohne die normale Kostenregel.",
  "Veto: Du darfst eine Frage einmal ablehnen.",
  "Kopiereffekt: Du darfst den letzten Effekt (Bonus oder Power) ein zweites Mal nutzen.",
];

function App() {
  const [card, setCard] = useState("");

  const drawRandom = (cards) => {
    const index = Math.floor(Math.random() * cards.length);
    return cards[index];
  };

  const drawCard = (type) => {
    if (type === "bonus") setCard(drawRandom(bonusCards));
    else if (type === "curse") setCard(drawRandom(curseCards));
    else if (type === "power") setCard(drawRandom(powerUpCards));
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Hide & Seek Kartenziehung</h1>
      <div className="flex gap-4 mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => drawCard("bonus")}>Bonus</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => drawCard("curse")}>Fluch</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => drawCard("power")}>Power-Up</button>
      </div>
      {card && (
        <div className="bg-white shadow p-4 rounded w-full max-w-md text-center">
          <p className="text-lg">{card}</p>
        </div>
      )}
    </div>
  );
}

export default App;
