gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.localVariables = [];
gdjs.Start_32ScreenCode.idToCallbackMap = new Map();
gdjs.Start_32ScreenCode.GDBackgroundObjects1= [];
gdjs.Start_32ScreenCode.GDBackgroundObjects2= [];
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1= [];
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects2= [];
gdjs.Start_32ScreenCode.GDTutorial_9595textObjects1= [];
gdjs.Start_32ScreenCode.GDTutorial_9595textObjects2= [];
gdjs.Start_32ScreenCode.GDPlayerObjects1= [];
gdjs.Start_32ScreenCode.GDPlayerObjects2= [];
gdjs.Start_32ScreenCode.GDBasic_9595EnemyObjects1= [];
gdjs.Start_32ScreenCode.GDBasic_9595EnemyObjects2= [];
gdjs.Start_32ScreenCode.GDShooterEnemyObjects1= [];
gdjs.Start_32ScreenCode.GDShooterEnemyObjects2= [];
gdjs.Start_32ScreenCode.GDHealingEnemyStationObjects1= [];
gdjs.Start_32ScreenCode.GDHealingEnemyStationObjects2= [];


gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Start_32ScreenCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tutorial_text"), gdjs.Start_32ScreenCode.GDTutorial_9595textObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "psychronic-let-the-games-begin-21858.mp3", 1, true, 100, 1);
}
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDBackgroundObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 15,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 130);
}
}
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDTutorial_9595textObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDTutorial_9595textObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 125,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 100);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1[k] = gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setString("Game Scene");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Transition scene", false);
}
}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Start_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTutorial_9595textObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTutorial_9595textObjects2.length = 0;
gdjs.Start_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Start_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Start_32ScreenCode.GDBasic_9595EnemyObjects1.length = 0;
gdjs.Start_32ScreenCode.GDBasic_9595EnemyObjects2.length = 0;
gdjs.Start_32ScreenCode.GDShooterEnemyObjects1.length = 0;
gdjs.Start_32ScreenCode.GDShooterEnemyObjects2.length = 0;
gdjs.Start_32ScreenCode.GDHealingEnemyStationObjects1.length = 0;
gdjs.Start_32ScreenCode.GDHealingEnemyStationObjects2.length = 0;

gdjs.Start_32ScreenCode.eventsList0(runtimeScene);
gdjs.Start_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Start_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStart_9595ButtonObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTutorial_9595textObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTutorial_9595textObjects2.length = 0;
gdjs.Start_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Start_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Start_32ScreenCode.GDBasic_9595EnemyObjects1.length = 0;
gdjs.Start_32ScreenCode.GDBasic_9595EnemyObjects2.length = 0;
gdjs.Start_32ScreenCode.GDShooterEnemyObjects1.length = 0;
gdjs.Start_32ScreenCode.GDShooterEnemyObjects2.length = 0;
gdjs.Start_32ScreenCode.GDHealingEnemyStationObjects1.length = 0;
gdjs.Start_32ScreenCode.GDHealingEnemyStationObjects2.length = 0;


return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
