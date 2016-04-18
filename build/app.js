/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	window.onload = function start() {
	  var cursors = void 0;
	  var ayeesha = void 0;
	
	  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
	    preload: function preload() {
	      game.load.image('hell', 'assets/hell.png');
	      game.load.spritesheet('ayeesha', 'assets/ayeesha-sprite.png', 20, 35);
	    },
	    create: function create() {
	      game.physics.startSystem(Phaser.Physics.ARCADE);
	
	      var hell = game.add.sprite(game.world.centerX, game.world.centerY, 'hell');
	      hell.anchor.setTo(0.5, 0.5);
	
	      ayeesha = game.add.sprite(20, 20, 'ayeesha');
	      game.physics.arcade.enable(ayeesha);
	
	      ayeesha.body.allowGravity = false;
	      ayeesha.body.bounce.y = 0.2;
	      ayeesha.body.gravity.y = 300;
	      ayeesha.body.collideWorldBounds = true;
	
	      ayeesha.animations.add('lft', [0, 1, 2, 3, 4, 5], 6, true);
	      ayeesha.animations.add('right', [0, 1, 2, 3, 4, 5], 6, true);
	      ayeesha.play('right');
	      // this.physics.arcade.collide(ayeesha, this.layer);
	      cursors = game.input.keyboard.createCursorKeys();
	    },
	    update: function update() {
	      var speed = 120;
	      ayeesha.body.velocity.x = 0;
	      ayeesha.body.velocity.y = 0;
	
	      var move = function move() {
	        ayeesha.animations.play('right');
	      };
	
	      var moveDown = function moveDown(amount) {
	        ayeesha.body.velocity.y = amount;
	        move();
	      };
	
	      var moveUp = function moveUp(amount) {
	        ayeesha.body.velocity.y = -amount;
	        move();
	      };
	
	      var moveLeft = function moveLeft(amount) {
	        if (ayeesha.scale.x === 1) {
	          ayeesha.scale.x *= -1;
	        }
	        ayeesha.body.velocity.x = -amount;
	        move();
	      };
	
	      var moveRight = function moveRight(amount) {
	        if (ayeesha.scale.x === -1) {
	          ayeesha.scale.x *= -1;
	        }
	        ayeesha.body.velocity.x = amount;
	        move();
	      };
	
	      if (cursors.down.isDown && cursors.left.isDown) {
	        moveDown(speed);
	        moveLeft(speed);
	      } else if (cursors.down.isDown && cursors.right.isDown) {
	        moveDown(speed);
	        moveRight(speed);
	      } else if (cursors.up.isDown && cursors.left.isDown) {
	        moveUp(speed);
	        moveLeft(speed);
	      } else if (cursors.up.isDown && cursors.right.isDown) {
	        moveUp(speed);
	        moveRight(speed);
	      } else if (cursors.left.isDown) {
	        moveLeft(speed);
	      } else if (cursors.right.isDown) {
	        moveRight(speed);
	      } else if (cursors.up.isDown) {
	        moveUp(speed);
	      } else if (cursors.down.isDown) {
	        moveDown(speed);
	      } else {
	        ayeesha.animations.stop();
	        ayeesha.frame = 4;
	      }
	    }
	  });
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map