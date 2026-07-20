gdjs.Transition_32sceneCode = {};
gdjs.Transition_32sceneCode.localVariables = [];
gdjs.Transition_32sceneCode.idToCallbackMap = new Map();
gdjs.Transition_32sceneCode.GDLoadingSequenceObjects1= [];
gdjs.Transition_32sceneCode.GDLoadingSequenceObjects2= [];
gdjs.Transition_32sceneCode.GDPlayerObjects1= [];
gdjs.Transition_32sceneCode.GDPlayerObjects2= [];
gdjs.Transition_32sceneCode.GDBasic_9595EnemyObjects1= [];
gdjs.Transition_32sceneCode.GDBasic_9595EnemyObjects2= [];
gdjs.Transition_32sceneCode.GDShooterEnemyObjects1= [];
gdjs.Transition_32sceneCode.GDShooterEnemyObjects2= [];
gdjs.Transition_32sceneCode.GDHealingEnemyStationObjects1= [];
gdjs.Transition_32sceneCode.GDHealingEnemyStationObjects2= [];


gdjs.Transition_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(9).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(9).getAsString());
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(9).getAsString(), false);
}
}

}


};

gdjs.Transition_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Transition_32sceneCode.GDLoadingSequenceObjects1.length = 0;
gdjs.Transition_32sceneCode.GDLoadingSequenceObjects2.length = 0;
gdjs.Transition_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Transition_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Transition_32sceneCode.GDBasic_9595EnemyObjects1.length = 0;
gdjs.Transition_32sceneCode.GDBasic_9595EnemyObjects2.length = 0;
gdjs.Transition_32sceneCode.GDShooterEnemyObjects1.length = 0;
gdjs.Transition_32sceneCode.GDShooterEnemyObjects2.length = 0;
gdjs.Transition_32sceneCode.GDHealingEnemyStationObjects1.length = 0;
gdjs.Transition_32sceneCode.GDHealingEnemyStationObjects2.length = 0;

gdjs.Transition_32sceneCode.eventsList0(runtimeScene);
gdjs.Transition_32sceneCode.GDLoadingSequenceObjects1.length = 0;
gdjs.Transition_32sceneCode.GDLoadingSequenceObjects2.length = 0;
gdjs.Transition_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Transition_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Transition_32sceneCode.GDBasic_9595EnemyObjects1.length = 0;
gdjs.Transition_32sceneCode.GDBasic_9595EnemyObjects2.length = 0;
gdjs.Transition_32sceneCode.GDShooterEnemyObjects1.length = 0;
gdjs.Transition_32sceneCode.GDShooterEnemyObjects2.length = 0;
gdjs.Transition_32sceneCode.GDHealingEnemyStationObjects1.length = 0;
gdjs.Transition_32sceneCode.GDHealingEnemyStationObjects2.length = 0;


return;

}

gdjs['Transition_32sceneCode'] = gdjs.Transition_32sceneCode;
