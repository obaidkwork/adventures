gdjs.Lvl1_95GameOverCode = {};
gdjs.Lvl1_95GameOverCode.localVariables = [];
gdjs.Lvl1_95GameOverCode.GDBGObjects1= [];
gdjs.Lvl1_95GameOverCode.GDBGObjects2= [];
gdjs.Lvl1_95GameOverCode.GDBG_9595CloudsObjects1= [];
gdjs.Lvl1_95GameOverCode.GDBG_9595CloudsObjects2= [];
gdjs.Lvl1_95GameOverCode.GDGameOver_9595TitleObjects1= [];
gdjs.Lvl1_95GameOverCode.GDGameOver_9595TitleObjects2= [];
gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects1= [];
gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects2= [];
gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects1= [];
gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects2= [];
gdjs.Lvl1_95GameOverCode.GDFadeWObjects1= [];
gdjs.Lvl1_95GameOverCode.GDFadeWObjects2= [];
gdjs.Lvl1_95GameOverCode.GDBtn_9595LeftObjects1= [];
gdjs.Lvl1_95GameOverCode.GDBtn_9595LeftObjects2= [];
gdjs.Lvl1_95GameOverCode.GDBtn_9595RightObjects1= [];
gdjs.Lvl1_95GameOverCode.GDBtn_9595RightObjects2= [];
gdjs.Lvl1_95GameOverCode.GDBtn_9595JumpObjects1= [];
gdjs.Lvl1_95GameOverCode.GDBtn_9595JumpObjects2= [];


gdjs.Lvl1_95GameOverCode.asyncCallback19839788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl1_95GameOverCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}gdjs.Lvl1_95GameOverCode.localVariables.length = 0;
}
gdjs.Lvl1_95GameOverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl1_95GameOverCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl1_95GameOverCode.asyncCallback19839788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lvl1_95GameOverCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Home"), gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects1.length;i<l;++i) {
    if ( gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects1[k] = gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects1[i];
        ++k;
    }
}
gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Lvl1_95GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Lvl1_95GameOverCode.asyncCallback19840828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl1_95GameOverCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl1_Intro", false);
}gdjs.Lvl1_95GameOverCode.localVariables.length = 0;
}
gdjs.Lvl1_95GameOverCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl1_95GameOverCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl1_95GameOverCode.asyncCallback19840828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lvl1_95GameOverCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Retry"), gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects1.length;i<l;++i) {
    if ( gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects1[k] = gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects1[i];
        ++k;
    }
}
gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Lvl1_95GameOverCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Lvl1_95GameOverCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.Lvl1_95GameOverCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.Lvl1_95GameOverCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.Lvl1_95GameOverCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl1_95GameOverCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.adMob.showInterstitial();
}}

}


{


gdjs.Lvl1_95GameOverCode.eventsList1(runtimeScene);
}


{


gdjs.Lvl1_95GameOverCode.eventsList3(runtimeScene);
}


};

gdjs.Lvl1_95GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl1_95GameOverCode.GDBGObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBGObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBG_9595CloudsObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBG_9595CloudsObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDGameOver_9595TitleObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDGameOver_9595TitleObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDFadeWObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDFadeWObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595JumpObjects2.length = 0;

gdjs.Lvl1_95GameOverCode.eventsList4(runtimeScene);
gdjs.Lvl1_95GameOverCode.GDBGObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBGObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBG_9595CloudsObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBG_9595CloudsObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDGameOver_9595TitleObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDGameOver_9595TitleObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595RetryObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDFadeWObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDFadeWObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl1_95GameOverCode.GDBtn_9595JumpObjects2.length = 0;


return;

}

gdjs['Lvl1_95GameOverCode'] = gdjs.Lvl1_95GameOverCode;
