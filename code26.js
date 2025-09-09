gdjs.Lvl4_95RatingCode = {};
gdjs.Lvl4_95RatingCode.localVariables = [];
gdjs.Lvl4_95RatingCode.GDBGObjects1= [];
gdjs.Lvl4_95RatingCode.GDBGObjects2= [];
gdjs.Lvl4_95RatingCode.GDBGObjects3= [];
gdjs.Lvl4_95RatingCode.GDSunRaysObjects1= [];
gdjs.Lvl4_95RatingCode.GDSunRaysObjects2= [];
gdjs.Lvl4_95RatingCode.GDSunRaysObjects3= [];
gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects1= [];
gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects2= [];
gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects3= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects1= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects2= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects3= [];
gdjs.Lvl4_95RatingCode.GDFadeWObjects1= [];
gdjs.Lvl4_95RatingCode.GDFadeWObjects2= [];
gdjs.Lvl4_95RatingCode.GDFadeWObjects3= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595LeftObjects1= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595LeftObjects2= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595LeftObjects3= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595RightObjects1= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595RightObjects2= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595RightObjects3= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595JumpObjects1= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595JumpObjects2= [];
gdjs.Lvl4_95RatingCode.GDBtn_9595JumpObjects3= [];


gdjs.Lvl4_95RatingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rating_Title"), gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects2);
{for(var i = 0, len = gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects2.length ;i < len;++i) {
    gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects2[i].getBehavior("Animation").setAnimationName("3Star");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rating_Title"), gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects2);
{for(var i = 0, len = gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects2.length ;i < len;++i) {
    gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects2[i].getBehavior("Animation").setAnimationName("2Star");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rating_Title"), gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects1);
{for(var i = 0, len = gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects1[i].getBehavior("Animation").setAnimationName("1Star");
}
}}

}


};gdjs.Lvl4_95RatingCode.asyncCallback19016156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl4_95RatingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}gdjs.Lvl4_95RatingCode.localVariables.length = 0;
}
gdjs.Lvl4_95RatingCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl4_95RatingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl4_95RatingCode.asyncCallback19016156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lvl4_95RatingCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Home"), gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects1.length;i<l;++i) {
    if ( gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects1[k] = gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects1[i];
        ++k;
    }
}
gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Lvl4_95RatingCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Lvl4_95RatingCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.Lvl4_95RatingCode.GDFadeWObjects1);
{for(var i = 0, len = gdjs.Lvl4_95RatingCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.Lvl4_95RatingCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl4_95RatingCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
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


gdjs.Lvl4_95RatingCode.eventsList0(runtimeScene);
}


{


gdjs.Lvl4_95RatingCode.eventsList2(runtimeScene);
}


};

gdjs.Lvl4_95RatingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl4_95RatingCode.GDBGObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDBGObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDBGObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDSunRaysObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDSunRaysObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDSunRaysObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDFadeWObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDFadeWObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDFadeWObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595JumpObjects3.length = 0;

gdjs.Lvl4_95RatingCode.eventsList3(runtimeScene);
gdjs.Lvl4_95RatingCode.GDBGObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDBGObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDBGObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDSunRaysObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDSunRaysObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDSunRaysObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDRating_9595TitleObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595HomeObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDFadeWObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDFadeWObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDFadeWObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl4_95RatingCode.GDBtn_9595JumpObjects3.length = 0;


return;

}

gdjs['Lvl4_95RatingCode'] = gdjs.Lvl4_95RatingCode;
