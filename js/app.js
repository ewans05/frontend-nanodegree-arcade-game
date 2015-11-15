// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //this.row = 60;
    this.x = x;
    this.y = y;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (Math.floor((Math.random() * 100) + 99) * dt);
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
// Place the player object in a variable called player

//var enemy = new Enemy();*****

var allEnemies = [];

//var bug = new Enemy(-10, 60);
/*var enemy = function() {

};*/


for(i = 0; allEnemies.length <= 2; i++ ) {
    var bug = new Enemy(-10, 60);
    allEnemies.push(bug);
    Enemy.y += 85;
    Enemy.x -=15;
};

/*while (allEnemies.length <= 3) {
    allEnemies.push(new Enemy());
};
*/
var player = new Player();



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
