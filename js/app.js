"use strict"
// Enemies our player must avoid
 var Enemy = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (Math.floor((Math.random() * (200 - 75)) + 75) * dt);
    if (this.x >= 505) {
        allEnemies.splice();
        this.x = enemyXPos();
        //makeBugs();
    };
    //this.reset();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 205;
    this.y = 425;
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.update = function() {

};
Player.prototype.reset = function() {
    player = new Player;
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);     
};

Player.prototype.handleInput = function(keyCode) {
    if(keyCode == 'left') {
        this.x -= 30;
    } else if (keyCode == 'right') {
        this.x += 30;
    } else if (keyCode == 'up') {
        this.y -= 30;
    } else {
        this.y += 30;
    }

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

//Create random off-screen enemy x start coordinates
var enemyXPos = function() {
    return ((Math.random() * (-400 - (-5))) + -5);
};

//Create bugs
var enemyRow = [60, 145, 230];
function makeBugs() {
    for(var i = 0; allEnemies.length <= 2; i++ ) {
        var bug = new Enemy(enemyXPos(), enemyRow[i]);
        allEnemies.push(bug);
    }
};
makeBugs();
console.log(allEnemies);


// Place the player object in a variable called player
var player = new Player();
/*


Player.prototype.checkCollisions = function() {
    for (i = 0; i <= allEnemies.length; i++) {
        if (allEnemies[i].x == player.x + 30 && 
        allEnemies[i].y == player.y + 30) {
            player.reset();
        }
    }
};*/

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
