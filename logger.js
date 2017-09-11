
let logger = module.exports = {};
let levels = ['basic','mediocre','critical'];
let selectedLevel = 'basic';

logger.log = customLog;

function customLog(msg,level){
	if(levels.indexof(level)<=selectedLevel){
		console.log(msg);
	}
}

