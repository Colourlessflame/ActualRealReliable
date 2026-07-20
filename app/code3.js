gdjs.Lose_32screenCode = {};
gdjs.Lose_32screenCode.localVariables = [];
gdjs.Lose_32screenCode.idToCallbackMap = new Map();
gdjs.Lose_32screenCode.GDLoseTextObjects1= [];
gdjs.Lose_32screenCode.GDLoseTextObjects2= [];
gdjs.Lose_32screenCode.GDLoseTextObjects3= [];
gdjs.Lose_32screenCode.GDRestartButtonObjects1= [];
gdjs.Lose_32screenCode.GDRestartButtonObjects2= [];
gdjs.Lose_32screenCode.GDRestartButtonObjects3= [];
gdjs.Lose_32screenCode.GDHighScoreObjects1= [];
gdjs.Lose_32screenCode.GDHighScoreObjects2= [];
gdjs.Lose_32screenCode.GDHighScoreObjects3= [];
gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects1= [];
gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects2= [];
gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects3= [];
gdjs.Lose_32screenCode.GDwave_9595textObjects1= [];
gdjs.Lose_32screenCode.GDwave_9595textObjects2= [];
gdjs.Lose_32screenCode.GDwave_9595textObjects3= [];
gdjs.Lose_32screenCode.GDAnimation_9595for_9595lossObjects1= [];
gdjs.Lose_32screenCode.GDAnimation_9595for_9595lossObjects2= [];
gdjs.Lose_32screenCode.GDAnimation_9595for_9595lossObjects3= [];
gdjs.Lose_32screenCode.GDPlayerObjects1= [];
gdjs.Lose_32screenCode.GDPlayerObjects2= [];
gdjs.Lose_32screenCode.GDPlayerObjects3= [];
gdjs.Lose_32screenCode.GDBasic_9595EnemyObjects1= [];
gdjs.Lose_32screenCode.GDBasic_9595EnemyObjects2= [];
gdjs.Lose_32screenCode.GDBasic_9595EnemyObjects3= [];
gdjs.Lose_32screenCode.GDShooterEnemyObjects1= [];
gdjs.Lose_32screenCode.GDShooterEnemyObjects2= [];
gdjs.Lose_32screenCode.GDShooterEnemyObjects3= [];
gdjs.Lose_32screenCode.GDHealingEnemyStationObjects1= [];
gdjs.Lose_32screenCode.GDHealingEnemyStationObjects2= [];
gdjs.Lose_32screenCode.GDHealingEnemyStationObjects3= [];


gdjs.Lose_32screenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("GameStorage", "HighScore");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("GameStorage", "HighScore", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("GameStorage", "MaxWave");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("GameStorage", "MaxWave", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("GameStorage", "HighScore", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("GameStorage", "MaxWave", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.unloadJSONFile("GameStorage");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.Lose_32screenCode.GDHighScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("LoseText"), gdjs.Lose_32screenCode.GDLoseTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("wave_text"), gdjs.Lose_32screenCode.GDwave_9595textObjects2);
{for(var i = 0, len = gdjs.Lose_32screenCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.Lose_32screenCode.GDHighScoreObjects2[i].getBehavior("Text").setText("Highscore:" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Lose_32screenCode.GDwave_9595textObjects2.length ;i < len;++i) {
    gdjs.Lose_32screenCode.GDwave_9595textObjects2[i].getBehavior("Text").setText("Highest wave: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Lose_32screenCode.GDLoseTextObjects2.length ;i < len;++i) {
    gdjs.Lose_32screenCode.GDLoseTextObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "drummusiclooper5000-lose-sfx-365579 (1).mp3", 1, false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Lose_32screenCode.asyncCallback21089212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lose_32screenCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("LoseText"), gdjs.Lose_32screenCode.GDLoseTextObjects2);

{for(var i = 0, len = gdjs.Lose_32screenCode.GDLoseTextObjects2.length ;i < len;++i) {
    gdjs.Lose_32screenCode.GDLoseTextObjects2[i].getBehavior("Opacity").setOpacity(gdjs.Lose_32screenCode.GDLoseTextObjects2[i].getBehavior("Opacity").getOpacity() + (20));
}
}
gdjs.Lose_32screenCode.localVariables.length = 0;
}
gdjs.Lose_32screenCode.idToCallbackMap.set(21089212, gdjs.Lose_32screenCode.asyncCallback21089212);
gdjs.Lose_32screenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lose_32screenCode.localVariables);
for (const obj of gdjs.Lose_32screenCode.GDLoseTextObjects1) asyncObjectsList.addObject("LoseText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Lose_32screenCode.asyncCallback21089212(runtimeScene, asyncObjectsList)), 21089212, asyncObjectsList);
}
}

}


};gdjs.Lose_32screenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.loadJSONFileFromStorage("GameStorage");
}

{ //Subevents
gdjs.Lose_32screenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LoseText"), gdjs.Lose_32screenCode.GDLoseTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lose_32screenCode.GDLoseTextObjects1.length;i<l;++i) {
    if ( gdjs.Lose_32screenCode.GDLoseTextObjects1[i].getBehavior("Opacity").getOpacity() != 255 ) {
        isConditionTrue_0 = true;
        gdjs.Lose_32screenCode.GDLoseTextObjects1[k] = gdjs.Lose_32screenCode.GDLoseTextObjects1[i];
        ++k;
    }
}
gdjs.Lose_32screenCode.GDLoseTextObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Lose_32screenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.Lose_32screenCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lose_32screenCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Lose_32screenCode.GDRestartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lose_32screenCode.GDRestartButtonObjects1[k] = gdjs.Lose_32screenCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.Lose_32screenCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setString("Game Scene");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Transition scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Upgrade_button"), gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects1[k] = gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setString("Stats");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Transition scene", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Lose_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lose_32screenCode.GDLoseTextObjects1.length = 0;
gdjs.Lose_32screenCode.GDLoseTextObjects2.length = 0;
gdjs.Lose_32screenCode.GDLoseTextObjects3.length = 0;
gdjs.Lose_32screenCode.GDRestartButtonObjects1.length = 0;
gdjs.Lose_32screenCode.GDRestartButtonObjects2.length = 0;
gdjs.Lose_32screenCode.GDRestartButtonObjects3.length = 0;
gdjs.Lose_32screenCode.GDHighScoreObjects1.length = 0;
gdjs.Lose_32screenCode.GDHighScoreObjects2.length = 0;
gdjs.Lose_32screenCode.GDHighScoreObjects3.length = 0;
gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects1.length = 0;
gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects2.length = 0;
gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects3.length = 0;
gdjs.Lose_32screenCode.GDwave_9595textObjects1.length = 0;
gdjs.Lose_32screenCode.GDwave_9595textObjects2.length = 0;
gdjs.Lose_32screenCode.GDwave_9595textObjects3.length = 0;
gdjs.Lose_32screenCode.GDAnimation_9595for_9595lossObjects1.length = 0;
gdjs.Lose_32screenCode.GDAnimation_9595for_9595lossObjects2.length = 0;
gdjs.Lose_32screenCode.GDAnimation_9595for_9595lossObjects3.length = 0;
gdjs.Lose_32screenCode.GDPlayerObjects1.length = 0;
gdjs.Lose_32screenCode.GDPlayerObjects2.length = 0;
gdjs.Lose_32screenCode.GDPlayerObjects3.length = 0;
gdjs.Lose_32screenCode.GDBasic_9595EnemyObjects1.length = 0;
gdjs.Lose_32screenCode.GDBasic_9595EnemyObjects2.length = 0;
gdjs.Lose_32screenCode.GDBasic_9595EnemyObjects3.length = 0;
gdjs.Lose_32screenCode.GDShooterEnemyObjects1.length = 0;
gdjs.Lose_32screenCode.GDShooterEnemyObjects2.length = 0;
gdjs.Lose_32screenCode.GDShooterEnemyObjects3.length = 0;
gdjs.Lose_32screenCode.GDHealingEnemyStationObjects1.length = 0;
gdjs.Lose_32screenCode.GDHealingEnemyStationObjects2.length = 0;
gdjs.Lose_32screenCode.GDHealingEnemyStationObjects3.length = 0;

gdjs.Lose_32screenCode.eventsList2(runtimeScene);
gdjs.Lose_32screenCode.GDLoseTextObjects1.length = 0;
gdjs.Lose_32screenCode.GDLoseTextObjects2.length = 0;
gdjs.Lose_32screenCode.GDLoseTextObjects3.length = 0;
gdjs.Lose_32screenCode.GDRestartButtonObjects1.length = 0;
gdjs.Lose_32screenCode.GDRestartButtonObjects2.length = 0;
gdjs.Lose_32screenCode.GDRestartButtonObjects3.length = 0;
gdjs.Lose_32screenCode.GDHighScoreObjects1.length = 0;
gdjs.Lose_32screenCode.GDHighScoreObjects2.length = 0;
gdjs.Lose_32screenCode.GDHighScoreObjects3.length = 0;
gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects1.length = 0;
gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects2.length = 0;
gdjs.Lose_32screenCode.GDUpgrade_9595buttonObjects3.length = 0;
gdjs.Lose_32screenCode.GDwave_9595textObjects1.length = 0;
gdjs.Lose_32screenCode.GDwave_9595textObjects2.length = 0;
gdjs.Lose_32screenCode.GDwave_9595textObjects3.length = 0;
gdjs.Lose_32screenCode.GDAnimation_9595for_9595lossObjects1.length = 0;
gdjs.Lose_32screenCode.GDAnimation_9595for_9595lossObjects2.length = 0;
gdjs.Lose_32screenCode.GDAnimation_9595for_9595lossObjects3.length = 0;
gdjs.Lose_32screenCode.GDPlayerObjects1.length = 0;
gdjs.Lose_32screenCode.GDPlayerObjects2.length = 0;
gdjs.Lose_32screenCode.GDPlayerObjects3.length = 0;
gdjs.Lose_32screenCode.GDBasic_9595EnemyObjects1.length = 0;
gdjs.Lose_32screenCode.GDBasic_9595EnemyObjects2.length = 0;
gdjs.Lose_32screenCode.GDBasic_9595EnemyObjects3.length = 0;
gdjs.Lose_32screenCode.GDShooterEnemyObjects1.length = 0;
gdjs.Lose_32screenCode.GDShooterEnemyObjects2.length = 0;
gdjs.Lose_32screenCode.GDShooterEnemyObjects3.length = 0;
gdjs.Lose_32screenCode.GDHealingEnemyStationObjects1.length = 0;
gdjs.Lose_32screenCode.GDHealingEnemyStationObjects2.length = 0;
gdjs.Lose_32screenCode.GDHealingEnemyStationObjects3.length = 0;


return;

}

gdjs['Lose_32screenCode'] = gdjs.Lose_32screenCode;
