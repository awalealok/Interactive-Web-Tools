
    function showTool(id) {
      document.querySelectorAll('.tool').forEach(el => el.style.display = 'none');
      document.getElementById(id).style.display = 'block';
    }

    const quotes = [
      "Believe you can and you're halfway there.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "The only limit to our realization of tomorrow is our doubts of today."
    ];

    function generateQuote() {
      const text = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quoteText").textContent = text;
    }
    // Name generator
const people = [
    { name: "Albert Einstein", img: "https://m.media-amazon.com/images/I/71ChH2YknlS._AC_UF1000,1000_QL80_.jpg" },
    { name: "C.V.Raman", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1Z_QDgXhwY9CUy-KACwjSiMtEn-AclGX4g&s" },
    { name: "Charles Darwin", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVftZdZIW8gJqn5SkN4RU4LfNA3XIO64b3A&s" },
    { name: "A.P.J Abdul Kalam", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlgH38gMHKOb6-i7xrxSkt1mRP2tFH5opDg&s" },
    { name: "Michael Faraday", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjoYbi6PoqO1TGjwfCo121jOeLxF6Bv-OBw&s" }
  ];

  function generateName() {
    const person = people[Math.floor(Math.random() * people.length)];
    document.getElementById("nameOutput").textContent = person.name;
    document.getElementById("nameImage").src = person.img;
    document.getElementById("nameImage").alt = person.name;
    document.getElementById("nameImage").style.display = "block";
  }
    function generateColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    function getContrastColor(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      const luminance = (0.299*r + 0.587*g + 0.114*b) / 255;
      return luminance > 0.5 ? '#000' : '#fff';
    }

    function generatePalette() {
      const container = document.getElementById("paletteOutput");
      container.innerHTML = "";
      for (let i = 0; i < 5; i++) {
        const color = generateColor();
        const div = document.createElement("div");
        div.textContent = color;
        div.style.backgroundColor = color;
        div.style.color = getContrastColor(color);
        container.appendChild(div);
      }
    }
    const elements = [
  { symbol: "H", name: "Hydrogen", type: "nonmetal", state: "gas" },
  { symbol: "He", name: "Helium", type: "nonmetal", state: "gas" },
  { symbol: "Li", name: "Lithium", type: "metal", state: "solid" },
  { symbol: "Be", name: "Beryllium", type: "metal", state: "solid" },
  { symbol: "B", name: "Boron", type: "metalloid", state: "solid" },
  { symbol: "C", name: "Carbon", type: "nonmetal", state: "solid" },
  { symbol: "N", name: "Nitrogen", type: "nonmetal", state: "gas" },
  { symbol: "O", name: "Oxygen", type: "nonmetal", state: "gas" },
  { symbol: "F", name: "Fluorine", type: "nonmetal", state: "gas" },
  { symbol: "Ne", name: "Neon", type: "nonmetal", state: "gas" }
];

function generatePeriodic() {
  const table = document.getElementById('periodicOutput');
  table.innerHTML = ''; // Clear previous content

  const stateFilter = document.getElementById('stateFilter').value;
  const typeFilter = document.getElementById('typeFilter').value;

  const filtered = elements.filter(el =>
    (stateFilter === 'all' || el.state === stateFilter) &&
    (typeFilter === 'all' || el.type === typeFilter)
  );

  filtered.forEach(el => {
    const div = document.createElement('div');
    div.className = 'element';
    div.innerHTML = `<strong>${el.symbol}</strong><br>${el.name}`;
    div.title = `${el.name} (${el.type}, ${el.state})`;

    div.addEventListener('mouseenter', (e) => {
      const tooltip = document.getElementById('tooltip');
      tooltip.textContent = `${el.name} (${el.type}, ${el.state})`;
      tooltip.style.display = 'block';
      tooltip.style.left = e.pageX + 'px';
      tooltip.style.top = e.pageY + 'px';
    });

    div.addEventListener('mouseleave', () => {
      const tooltip = document.getElementById('tooltip');
      tooltip.style.display = 'none';
    });

    table.appendChild(div);
  });
}


  