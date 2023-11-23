import {SCENE_HEIGHT, SCENE_WIDTH} from "./constants.js";
import {getSceneTimer} from "./sceneTimer.js";

const canvasScene = document.getElementById('scene');
const sceneCtx = canvasScene.getContext('2d');

const state = {}

function clearScene(ctx) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,SCENE_WIDTH,SCENE_HEIGHT)
}

export function initGame() {
    const renderFns = [clearScene, () => console.log("render")];
    const sceneTimer = getSceneTimer(renderFns, sceneCtx, state, 100);

    sceneTimer()
}
