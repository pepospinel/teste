const boardSize = 25;
const board = document.getElementById('gameBoard');

const gameState = {
  units: [],
};

// Criar tabuleiro
for (let y = 0; y < boardSize; y++) {
  for (let x = 0; x < boardSize; x++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.x = x;
    cell.dataset.y = y;
    board.appendChild(cell);
  }
}

// Adicionar unidade
function addUnit(x, y, team) {
  gameState.units.push({ x, y, team, hp: 3 });
  updateBoard();
}

// Atualizar visual do tabuleiro
function updateBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.classList.remove('teamA', 'teamB');
  });

  gameState.units.forEach(unit => {
    if (unit.hp > 0) {
      const cell = document.querySelector(
        `.cell[data-x="${unit.x}"][data-y="${unit.y}"]`
      );
      if (cell) {
        cell.classList.add(unit.team === 'A' ? 'teamA' : 'teamB');
      }
    }
  });
}

// Adiciona 3 unidades para cada time
addUnit(0, 0, 'A');
addUnit(1, 0, 'A');
addUnit(0, 1, 'A');

addUnit(24, 24, 'B');
addUnit(23, 24, 'B');
addUnit(24, 23, 'B');
