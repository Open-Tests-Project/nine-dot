"use strict";

var contants = require("src/pages/index/contants");

var RADIUS = 30 * contants.FACTOR;

var circles = [
    {
        cx: 170 * contants.FACTOR,
        cy: 170 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 170 * contants.FACTOR,
        cy: 250 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 170 * contants.FACTOR,
        cy: 330 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 250 * contants.FACTOR,
        cy: 170 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 250 * contants.FACTOR,
        cy: 250 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 250 * contants.FACTOR,
        cy: 330 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 330 * contants.FACTOR,
        cy: 170 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 330 * contants.FACTOR,
        cy: 250 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 330 * contants.FACTOR,
        cy: 330 * contants.FACTOR,
        r: RADIUS
    }
];


module.exports = circles;