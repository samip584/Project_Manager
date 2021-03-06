const ROUTER = require('express').Router();
const TAG_CONTROLLER = require('../controller/tag.controller');

ROUTER.get('/id/:taskId', TAG_CONTROLLER.getAllTags);
ROUTER.post('/add', TAG_CONTROLLER.tagUser);
ROUTER.post('/delete', TAG_CONTROLLER.removeTag);

module.exports = ROUTER;