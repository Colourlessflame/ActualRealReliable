gdjs.StatsCode = {};
gdjs.StatsCode.localVariables = [];
gdjs.StatsCode.idToCallbackMap = new Map();
gdjs.StatsCode.GDStat_9595text4Objects1= [];
gdjs.StatsCode.GDStat_9595text4Objects2= [];
gdjs.StatsCode.GDStat_9595text2Objects1= [];
gdjs.StatsCode.GDStat_9595text2Objects2= [];
gdjs.StatsCode.GDStat_9595text3Objects1= [];
gdjs.StatsCode.GDStat_9595text3Objects2= [];
gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1= [];
gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects2= [];
gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1= [];
gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects2= [];
gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1= [];
gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects2= [];
gdjs.StatsCode.GDCostTextHealthObjects1= [];
gdjs.StatsCode.GDCostTextHealthObjects2= [];
gdjs.StatsCode.GDCostTextDamageObjects1= [];
gdjs.StatsCode.GDCostTextDamageObjects2= [];
gdjs.StatsCode.GDCostTextSpeedObjects1= [];
gdjs.StatsCode.GDCostTextSpeedObjects2= [];
gdjs.StatsCode.GDCoins_9595valueObjects1= [];
gdjs.StatsCode.GDCoins_9595valueObjects2= [];
gdjs.StatsCode.GDReturnButtonObjects1= [];
gdjs.StatsCode.GDReturnButtonObjects2= [];
gdjs.StatsCode.GDCwoinObjects1= [];
gdjs.StatsCode.GDCwoinObjects2= [];
gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1= [];
gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects2= [];
gdjs.StatsCode.GDDamageBarUpgradeObjects1= [];
gdjs.StatsCode.GDDamageBarUpgradeObjects2= [];
gdjs.StatsCode.GDSpeedBarUpgradeObjects1= [];
gdjs.StatsCode.GDSpeedBarUpgradeObjects2= [];
gdjs.StatsCode.GDPlayerObjects1= [];
gdjs.StatsCode.GDPlayerObjects2= [];
gdjs.StatsCode.GDBasic_9595EnemyObjects1= [];
gdjs.StatsCode.GDBasic_9595EnemyObjects2= [];
gdjs.StatsCode.GDShooterEnemyObjects1= [];
gdjs.StatsCode.GDShooterEnemyObjects2= [];
gdjs.StatsCode.GDHealingEnemyStationObjects1= [];
gdjs.StatsCode.GDHealingEnemyStationObjects2= [];


gdjs.StatsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coins_value"), gdjs.StatsCode.GDCoins_9595valueObjects1);
gdjs.copyArray(runtimeScene.getObjects("CostTextDamage"), gdjs.StatsCode.GDCostTextDamageObjects1);
gdjs.copyArray(runtimeScene.getObjects("CostTextHealth"), gdjs.StatsCode.GDCostTextHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("CostTextSpeed"), gdjs.StatsCode.GDCostTextSpeedObjects1);
{for(var i = 0, len = gdjs.StatsCode.GDCostTextDamageObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDCostTextDamageObjects1[i].getBehavior("Text").setText("Cost: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.StatsCode.GDCostTextHealthObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDCostTextHealthObjects1[i].getBehavior("Text").setText("Cost: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.StatsCode.GDCostTextSpeedObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDCostTextSpeedObjects1[i].getBehavior("Text").setText("Cost: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.StatsCode.GDCoins_9595valueObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDCoins_9595valueObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}
}

}


};gdjs.StatsCode.asyncCallback21120084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StatsCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setString("Game Scene");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Transition scene", false);
}
gdjs.StatsCode.localVariables.length = 0;
}
gdjs.StatsCode.idToCallbackMap.set(21120084, gdjs.StatsCode.asyncCallback21120084);
gdjs.StatsCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StatsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.StatsCode.asyncCallback21120084(runtimeScene, asyncObjectsList)), 21120084, asyncObjectsList);
}
}

}


};gdjs.StatsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DamageBarUpgrade"), gdjs.StatsCode.GDDamageBarUpgradeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Health_stat_upgrade"), gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeedBarUpgrade"), gdjs.StatsCode.GDSpeedBarUpgradeObjects1);
{for(var i = 0, len = gdjs.StatsCode.GDSpeedBarUpgradeObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDSpeedBarUpgradeObjects1[i].SetValue(Math.round(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() / 100), null);
}
}
{for(var i = 0, len = gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.StatsCode.GDDamageBarUpgradeObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDDamageBarUpgradeObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), null);
}
}

{ //Subevents
gdjs.StatsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Health_but_upgrade"), gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Health_stat_upgrade"), gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1.length;i<l;++i) {
    if ( gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1[k] = gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1[i];
        ++k;
    }
}
gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() != (( gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1.length === 0 ) ? 0 :gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1[0].MaxValue(null)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Coins_value"), gdjs.StatsCode.GDCoins_9595valueObjects1);
gdjs.copyArray(runtimeScene.getObjects("CostTextHealth"), gdjs.StatsCode.GDCostTextHealthObjects1);
/* Reuse gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).mul(3);
}
{for(var i = 0, len = gdjs.StatsCode.GDCostTextHealthObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDCostTextHealthObjects1[i].getBehavior("Text").setText("Cost: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.StatsCode.GDCoins_9595valueObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDCoins_9595valueObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SpeedBarUpgrade"), gdjs.StatsCode.GDSpeedBarUpgradeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed_But_upgrade"), gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1.length;i<l;++i) {
    if ( gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1[k] = gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1[i];
        ++k;
    }
}
gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != (( gdjs.StatsCode.GDSpeedBarUpgradeObjects1.length === 0 ) ? 0 :gdjs.StatsCode.GDSpeedBarUpgradeObjects1[0].MaxValue(null)) * 100);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Coins_value"), gdjs.StatsCode.GDCoins_9595valueObjects1);
gdjs.copyArray(runtimeScene.getObjects("CostTextSpeed"), gdjs.StatsCode.GDCostTextSpeedObjects1);
/* Reuse gdjs.StatsCode.GDSpeedBarUpgradeObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).add(100);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(7).add(2);
}
{for(var i = 0, len = gdjs.StatsCode.GDCostTextSpeedObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDCostTextSpeedObjects1[i].getBehavior("Text").setText("Cost: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.StatsCode.GDCoins_9595valueObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDCoins_9595valueObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.StatsCode.GDSpeedBarUpgradeObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDSpeedBarUpgradeObjects1[i].SetValue(Math.round(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() / 100), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DamageBarUpgrade"), gdjs.StatsCode.GDDamageBarUpgradeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Damage_but_upgrade"), gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1.length;i<l;++i) {
    if ( gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1[k] = gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1[i];
        ++k;
    }
}
gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != (( gdjs.StatsCode.GDDamageBarUpgradeObjects1.length === 0 ) ? 0 :gdjs.StatsCode.GDDamageBarUpgradeObjects1[0].MaxValue(null)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Coins_value"), gdjs.StatsCode.GDCoins_9595valueObjects1);
gdjs.copyArray(runtimeScene.getObjects("CostTextDamage"), gdjs.StatsCode.GDCostTextDamageObjects1);
/* Reuse gdjs.StatsCode.GDDamageBarUpgradeObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(6).mul(2);
}
{for(var i = 0, len = gdjs.StatsCode.GDCostTextDamageObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDCostTextDamageObjects1[i].getBehavior("Text").setText("Cost: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.StatsCode.GDCoins_9595valueObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDCoins_9595valueObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.StatsCode.GDDamageBarUpgradeObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDDamageBarUpgradeObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ReturnButton"), gdjs.StatsCode.GDReturnButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StatsCode.GDReturnButtonObjects1.length;i<l;++i) {
    if ( gdjs.StatsCode.GDReturnButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StatsCode.GDReturnButtonObjects1[k] = gdjs.StatsCode.GDReturnButtonObjects1[i];
        ++k;
    }
}
gdjs.StatsCode.GDReturnButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.StatsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Damage_but_upgrade"), gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Health_but_upgrade"), gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnButton"), gdjs.StatsCode.GDReturnButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed_But_upgrade"), gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1.length;i<l;++i) {
    if ( gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1[k] = gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1[i];
        ++k;
    }
}
gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1.length;i<l;++i) {
    if ( gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1[k] = gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1[i];
        ++k;
    }
}
gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1.length;i<l;++i) {
    if ( gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1[k] = gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1[i];
        ++k;
    }
}
gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StatsCode.GDReturnButtonObjects1.length;i<l;++i) {
    if ( gdjs.StatsCode.GDReturnButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StatsCode.GDReturnButtonObjects1[k] = gdjs.StatsCode.GDReturnButtonObjects1[i];
        ++k;
    }
}
gdjs.StatsCode.GDReturnButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "universfield-click-button-140881.mp3", 1, false, 100, 1);
}
}

}


};

gdjs.StatsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StatsCode.GDStat_9595text4Objects1.length = 0;
gdjs.StatsCode.GDStat_9595text4Objects2.length = 0;
gdjs.StatsCode.GDStat_9595text2Objects1.length = 0;
gdjs.StatsCode.GDStat_9595text2Objects2.length = 0;
gdjs.StatsCode.GDStat_9595text3Objects1.length = 0;
gdjs.StatsCode.GDStat_9595text3Objects2.length = 0;
gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1.length = 0;
gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects2.length = 0;
gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1.length = 0;
gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects2.length = 0;
gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1.length = 0;
gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects2.length = 0;
gdjs.StatsCode.GDCostTextHealthObjects1.length = 0;
gdjs.StatsCode.GDCostTextHealthObjects2.length = 0;
gdjs.StatsCode.GDCostTextDamageObjects1.length = 0;
gdjs.StatsCode.GDCostTextDamageObjects2.length = 0;
gdjs.StatsCode.GDCostTextSpeedObjects1.length = 0;
gdjs.StatsCode.GDCostTextSpeedObjects2.length = 0;
gdjs.StatsCode.GDCoins_9595valueObjects1.length = 0;
gdjs.StatsCode.GDCoins_9595valueObjects2.length = 0;
gdjs.StatsCode.GDReturnButtonObjects1.length = 0;
gdjs.StatsCode.GDReturnButtonObjects2.length = 0;
gdjs.StatsCode.GDCwoinObjects1.length = 0;
gdjs.StatsCode.GDCwoinObjects2.length = 0;
gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1.length = 0;
gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects2.length = 0;
gdjs.StatsCode.GDDamageBarUpgradeObjects1.length = 0;
gdjs.StatsCode.GDDamageBarUpgradeObjects2.length = 0;
gdjs.StatsCode.GDSpeedBarUpgradeObjects1.length = 0;
gdjs.StatsCode.GDSpeedBarUpgradeObjects2.length = 0;
gdjs.StatsCode.GDPlayerObjects1.length = 0;
gdjs.StatsCode.GDPlayerObjects2.length = 0;
gdjs.StatsCode.GDBasic_9595EnemyObjects1.length = 0;
gdjs.StatsCode.GDBasic_9595EnemyObjects2.length = 0;
gdjs.StatsCode.GDShooterEnemyObjects1.length = 0;
gdjs.StatsCode.GDShooterEnemyObjects2.length = 0;
gdjs.StatsCode.GDHealingEnemyStationObjects1.length = 0;
gdjs.StatsCode.GDHealingEnemyStationObjects2.length = 0;

gdjs.StatsCode.eventsList2(runtimeScene);
gdjs.StatsCode.GDStat_9595text4Objects1.length = 0;
gdjs.StatsCode.GDStat_9595text4Objects2.length = 0;
gdjs.StatsCode.GDStat_9595text2Objects1.length = 0;
gdjs.StatsCode.GDStat_9595text2Objects2.length = 0;
gdjs.StatsCode.GDStat_9595text3Objects1.length = 0;
gdjs.StatsCode.GDStat_9595text3Objects2.length = 0;
gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects1.length = 0;
gdjs.StatsCode.GDHealth_9595but_9595upgradeObjects2.length = 0;
gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects1.length = 0;
gdjs.StatsCode.GDDamage_9595but_9595upgradeObjects2.length = 0;
gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects1.length = 0;
gdjs.StatsCode.GDSpeed_9595But_9595upgradeObjects2.length = 0;
gdjs.StatsCode.GDCostTextHealthObjects1.length = 0;
gdjs.StatsCode.GDCostTextHealthObjects2.length = 0;
gdjs.StatsCode.GDCostTextDamageObjects1.length = 0;
gdjs.StatsCode.GDCostTextDamageObjects2.length = 0;
gdjs.StatsCode.GDCostTextSpeedObjects1.length = 0;
gdjs.StatsCode.GDCostTextSpeedObjects2.length = 0;
gdjs.StatsCode.GDCoins_9595valueObjects1.length = 0;
gdjs.StatsCode.GDCoins_9595valueObjects2.length = 0;
gdjs.StatsCode.GDReturnButtonObjects1.length = 0;
gdjs.StatsCode.GDReturnButtonObjects2.length = 0;
gdjs.StatsCode.GDCwoinObjects1.length = 0;
gdjs.StatsCode.GDCwoinObjects2.length = 0;
gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects1.length = 0;
gdjs.StatsCode.GDHealth_9595stat_9595upgradeObjects2.length = 0;
gdjs.StatsCode.GDDamageBarUpgradeObjects1.length = 0;
gdjs.StatsCode.GDDamageBarUpgradeObjects2.length = 0;
gdjs.StatsCode.GDSpeedBarUpgradeObjects1.length = 0;
gdjs.StatsCode.GDSpeedBarUpgradeObjects2.length = 0;
gdjs.StatsCode.GDPlayerObjects1.length = 0;
gdjs.StatsCode.GDPlayerObjects2.length = 0;
gdjs.StatsCode.GDBasic_9595EnemyObjects1.length = 0;
gdjs.StatsCode.GDBasic_9595EnemyObjects2.length = 0;
gdjs.StatsCode.GDShooterEnemyObjects1.length = 0;
gdjs.StatsCode.GDShooterEnemyObjects2.length = 0;
gdjs.StatsCode.GDHealingEnemyStationObjects1.length = 0;
gdjs.StatsCode.GDHealingEnemyStationObjects2.length = 0;


return;

}

gdjs['StatsCode'] = gdjs.StatsCode;
