import React, { Component } from "react";
import Phaser from "phaser";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: "phaser-target",
            physics: {
                default: "arcade",
                arcade: {
                    debug: true
                }
            },
            scene: {
                preload: preload,
                create: create,
                update: update
            },
            player_speed: 150
        };
        var game = new Phaser.Game(config);
        var player;
        var cursors;

        function preload() {
            this.load.setBaseURL("http://labs.phaser.io");
            this.load.image("block", "assets/sprites/phaser3-logo.png");
        };
        function create() {
            cursors = this.input.keyboard.createCursorKeys();
            player = this.physics.add.sprite(400, 300, "block");
        };
        function update() {
            player.setVelocity(0);
            if (cursors.left.isDown && !cursors.right.isDown) {
                player.setVelocityX(-config.player_speed);
            }
            if (cursors.right.isDown && !cursors.left.isDown) {
                player.setVelocityX(config.player_speed);
            }
            if (cursors.up.isDown && !cursors.down.isDown) {
                player.setVelocityY(-config.player_speed);
            }
            if (cursors.down.isDown && !cursors.up.isDown) {
                player.setVelocityY(config.player_speed);
            }
        };
    }

    render() {
        return <section id="phaser-target" />;
    }
}
