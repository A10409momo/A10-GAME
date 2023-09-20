let startContainer = document.getElementById('start-container');
let gameContainer = document.getElementById('game-container');
let gameText = document.getElementById('game-text');
let currentLevel = 1;

function startGame() {
    startContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');

    // 遊戲開始，顯示遊戲選項
    gameText.innerHTML = "選擇要玩的遊戲：<br>";
    gameText.innerHTML += '<button onclick="startAdventure()">冒險遊戲</button>';
}

function startAdventure() {
    gameText.innerHTML = "你開始了一場刺激的冒險。<br>";
    gameText.innerHTML += "你來到一個神秘的地方，面前有三條路。<br>";
    gameText.innerHTML += '<button onclick="continueAdventure(\'left\')">走左邊的路</button>';
    gameText.innerHTML += '<button onclick="continueAdventure(\'middle\')">走中間的路</button>';
    gameText.innerHTML += '<button onclick="continueAdventure(\'right\')">走右邊的路</button>';
}

function continueAdventure(choice) {
    gameText.innerHTML = "你選擇了走" + getDirectionText(choice) + "的路。<br>";
    currentLevel++;

    if (currentLevel <= 5) {
        gameText.innerHTML += "這是第 " + currentLevel + " 關。<br>";
        addLevelStory(currentLevel);
        gameText.innerHTML += '<button onclick="continueAdventure(\'left\')">繼續冒險</button>';
    } else {
        gameText.innerHTML += "恭喜你完成了所有關卡！";
    }
}

function addLevelStory(level) {
    switch (level) {
        case 2:
            gameText.innerHTML += "你發現了一個古老的神殿，裡面有一扇古老的門。<br>";
            gameText.innerHTML += '<button onclick="enterTemple()">進入神殿</button>';
            gameText.innerHTML += '<button onclick="exploreAround()">繼續四處探索</button>';
            break;
        case 3:
            gameText.innerHTML += "你發現了一個隱藏的寶藏。<br>";
            gameText.innerHTML += '<button onclick="takeTreasure()">拿取寶藏</button>';
            gameText.innerHTML += '<button onclick="leaveTreasure()">離開寶藏</button>';
            break;
        case 4:
            gameText.innerHTML += "你看到了一隻威風凜凜的龍。<br>";
            gameText.innerHTML += '<button onclick="fightDragon()">戰鬥龍</button>';
            gameText.innerHTML += '<button onclick="runAway()">逃跑</button>';
            break;
        case 5:
            gameText.innerHTML += "你來到了一個神秘的空間，這裡充滿了未知的力量。<br>";
            gameText.innerHTML += "你看到兩個神秘的門，一個門通往光明，另一個通往黑暗。<br>";
            gameText.innerHTML += '<button onclick="enterLightDoor()">進入光明之門</button>';
            gameText.innerHTML += '<button onclick="enterDarkDoor()">進入黑暗之門</button>';
            break;
        default:
            break;
    }
}

function enterTemple() {
    gameText.innerHTML += "你進入了神殿，裡面充滿了神秘的符號和寶藏。<br>";
    gameText.innerHTML += "你發現了一個古老的寶箱。<br>";
    gameText.innerHTML += '<button onclick="openChest()">打開寶箱</button>';
}

function exploreAround() {
    gameText.innerHTML += "你繼續四處探索，發現了一個神秘的洞穴。<br>";
    gameText.innerHTML += '<button onclick="enterCave()">進入洞穴</button>';
}

function takeTreasure() {
    gameText.innerHTML += "你拿取了寶藏，裡面有許多黃金和寶石。<br>";
    gameText.innerHTML += "你的財富大大增加！<br>";
}

function leaveTreasure() {
    gameText.innerHTML += "你決定離開寶藏。<br>";
    gameText.innerHTML += "或許還有更多冒險等著你。<br>";
}

function fightDragon() {
    gameText.innerHTML += "你勇敢地戰鬥龍。<br>";
    gameText.innerHTML += "經過一番激烈的戰鬥，你成功擊敗了龍。<br>";
}

function runAway() {
    gameText.innerHTML += "你害怕地逃跑了，留下了龍。<br>";
}

function enterLightDoor() {
    gameText.innerHTML += "你勇敢地選擇了進入光明之門。<br>";
    gameText.innerHTML += "你感受到無比的力量，你的冒險結束，你成為了真正的勇者。<br>";
}

function enterDarkDoor() {
    gameText.innerHTML += "你勇敢地選擇了進入黑暗之門。<br>";
    gameText.innerHTML += "你感受到無比的黑暗，你的冒險結束，你成為了黑暗的一部分。<br>";
}

function getDirectionText(choice) {
    switch (choice) {
        case 'left':
            return "左邊";
        case 'middle':
            return "中間";
        case 'right':
            return "右邊";
        default:
            return "未知方向";
    }
}

// 開始遊戲
startGame();
