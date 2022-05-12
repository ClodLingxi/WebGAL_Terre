const express = require('express');
const manageGame = express.Router();
const getGameList = require("../service/getGameList")
const createNewGame = require("../service/createNewGame");
const updateGameConfig = require("../service/updateGameConfig");
const ejectGame = require("../service/ejectGame");

manageGame.get('/gameList', async (req, res) => {
    let gameList;
    gameList = await getGameList();
    res.send(gameList);
})

//测试游戏管理api
manageGame.get('/test', (req, res) => {
    res.send('ManageGame Test OK!');
})

// 创建新游戏：将模板复制到新建的游戏目录下
manageGame.get('/createGame/*', async (req, res) => {
    let url = req.url;
    url = url.split('/');
    let gameName = url[url.length - 1];
    gameName = decodeURI(gameName);
    console.log(gameName);
    let createResult;
    createResult = await createNewGame(gameName);
    if (createResult) {
        res.send('OK')
    } else {
        res.send('AlreadyExist');
    }
})

//修改游戏配置
manageGame.post('/config', async (req, res) => {
    const editGame = req.body.currentEditGame;
    const config = req.body.config;
    const stat = await updateGameConfig(editGame, config);
    if (stat === 'success')
        res.send('OK');
    else
        res.send('fail');
})

// 导出游戏

manageGame.post('/export', async (req, res) => {
    const gameName = req.body.gameName;
    const platform = req.body.platform;
    await ejectGame(gameName, platform);
    res.send('OK');
});


module.exports = manageGame;
