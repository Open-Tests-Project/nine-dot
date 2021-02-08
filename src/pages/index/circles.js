"use strict";

var contants = require("src/pages/index/contants");

var RADIUS = 25 * contants.FACTOR;

var circles = [
    {
        cx: 185 * contants.FACTOR,
        cy: 135 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 185 * contants.FACTOR,
        cy: 200 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 185 * contants.FACTOR,
        cy: 265 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 250 * contants.FACTOR,
        cy: 135 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 250 * contants.FACTOR,
        cy: 200 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 250 * contants.FACTOR,
        cy: 265 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 315 * contants.FACTOR,
        cy: 135 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 315 * contants.FACTOR,
        cy: 200 * contants.FACTOR,
        r: RADIUS
    },
    {
        cx: 315 * contants.FACTOR,
        cy: 265 * contants.FACTOR,
        r: RADIUS
    },
];


module.exports = circles;