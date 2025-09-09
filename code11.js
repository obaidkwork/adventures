gdjs.Lvl2_95IntroCode = {};
gdjs.Lvl2_95IntroCode.localVariables = [];
gdjs.Lvl2_95IntroCode.GDLvl2_9595IntroBGObjects1= [];
gdjs.Lvl2_95IntroCode.GDLvl2_9595IntroBGObjects2= [];
gdjs.Lvl2_95IntroCode.GDLvl2_9595IntroBGObjects3= [];
gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1= [];
gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2= [];
gdjs.Lvl2_95IntroCode.GDMainCharacterObjects3= [];
gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects1= [];
gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects2= [];
gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects3= [];
gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1= [];
gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2= [];
gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects3= [];
gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1= [];
gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects2= [];
gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects3= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects1= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects2= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects3= [];
gdjs.Lvl2_95IntroCode.GDMessageObjects1= [];
gdjs.Lvl2_95IntroCode.GDMessageObjects2= [];
gdjs.Lvl2_95IntroCode.GDMessageObjects3= [];
gdjs.Lvl2_95IntroCode.GDKeysObjects1= [];
gdjs.Lvl2_95IntroCode.GDKeysObjects2= [];
gdjs.Lvl2_95IntroCode.GDKeysObjects3= [];
gdjs.Lvl2_95IntroCode.GDFadeWObjects1= [];
gdjs.Lvl2_95IntroCode.GDFadeWObjects2= [];
gdjs.Lvl2_95IntroCode.GDFadeWObjects3= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595LeftObjects1= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595LeftObjects2= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595LeftObjects3= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595RightObjects1= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595RightObjects2= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595RightObjects3= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595JumpObjects1= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595JumpObjects2= [];
gdjs.Lvl2_95IntroCode.GDBtn_9595JumpObjects3= [];


gdjs.Lvl2_95IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2[i].getBehavior("Animation").setAnimationName("Abdullah_Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Fatima_Idle");
}
}}

}


};gdjs.Lvl2_95IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16713084);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1 */
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


};gdjs.Lvl2_95IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16715460);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1, gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2);

{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2[i].getBehavior("Animation").setAnimationName("Abdullah_Talk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Fatima_Talk");
}
}}

}


};gdjs.Lvl2_95IntroCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16720812);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1, gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects2);

{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2[i].getBehavior("Animation").setAnimationName("Abdullah_Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Fatima_Idle");
}
}}

}


};gdjs.Lvl2_95IntroCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16726364);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1, gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2);

{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2[i].getBehavior("Animation").setAnimationName("Abdullah_Talk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Fatima_Talk");
}
}}

}


};gdjs.Lvl2_95IntroCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16731908);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1, gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects2);

{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2[i].getBehavior("Animation").setAnimationName("Abdullah_Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Fatima_Idle");
}
}}

}


};gdjs.Lvl2_95IntroCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16737700);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1, gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2);

{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2[i].getBehavior("Animation").setAnimationName("Abdullah_Talk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Fatima_Talk");
}
}}

}


};gdjs.Lvl2_95IntroCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16743060);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Lvl2_95IntroCode.GDKeysObjects2 */
/* Reuse gdjs.Lvl2_95IntroCode.GDMessageObjects2 */
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMessageObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDKeysObjects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDKeysObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


};gdjs.Lvl2_95IntroCode.asyncCallback16742772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl2_95IntroCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Keys"), gdjs.Lvl2_95IntroCode.GDKeysObjects2);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.Lvl2_95IntroCode.GDMessageObjects2);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMessageObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDKeysObjects2.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDKeysObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Lvl2_95IntroCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Lvl2_95IntroCode.localVariables.length = 0;
}
gdjs.Lvl2_95IntroCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl2_95IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl2_95IntroCode.asyncCallback16742772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lvl2_95IntroCode.asyncCallback16745236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Lvl2_95IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}gdjs.Lvl2_95IntroCode.localVariables.length = 0;
}
gdjs.Lvl2_95IntroCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Lvl2_95IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Lvl2_95IntroCode.asyncCallback16745236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lvl2_95IntroCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeW"), gdjs.Lvl2_95IntroCode.GDFadeWObjects1);
gdjs.copyArray(runtimeScene.getObjects("Keys"), gdjs.Lvl2_95IntroCode.GDKeysObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.Lvl2_95IntroCode.GDMessageObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble2"), gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDFadeWObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDFadeWObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl2_95IntroCode.GDFadeWObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMessageObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl2_95IntroCode.GDMessageObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDKeysObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDKeysObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl2_95IntroCode.GDKeysObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1[i].getBehavior("Opacity").getOpacity() + (25));
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").setOpacity(gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Opacity").getOpacity() + (25));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Keys"), gdjs.Lvl2_95IntroCode.GDKeysObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.Lvl2_95IntroCode.GDMessageObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble2"), gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMessageObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDKeysObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDKeysObjects1[i].hide();
}
}{gdjs.adMob.showInterstitial();
}
{ //Subevents
gdjs.Lvl2_95IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_Proceed"), gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects1.length;i<l;++i) {
    if ( gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects1[k] = gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects1[i];
        ++k;
    }
}
gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16710228);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Char_Aunt"), gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble2"), gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects1[i].getBehavior("Animation").setAnimationName("Aunt_Talk");
}
}
{ //Subevents
gdjs.Lvl2_95IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{ //Subevents
gdjs.Lvl2_95IntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble2"), gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].hide();
}
}
{ //Subevents
gdjs.Lvl2_95IntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
{ //Subevents
gdjs.Lvl2_95IntroCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble2"), gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].hide();
}
}
{ //Subevents
gdjs.Lvl2_95IntroCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}
{ //Subevents
gdjs.Lvl2_95IntroCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 7);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Char_Aunt"), gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects1);
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble1"), gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1);
gdjs.copyArray(runtimeScene.getObjects("SpeechBubble2"), gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1);
{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects1.length ;i < len;++i) {
    gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects1[i].hide();
}
}
{ //Subevents
gdjs.Lvl2_95IntroCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 8);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
{ //Subevents
gdjs.Lvl2_95IntroCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.Lvl2_95IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl2_95IntroCode.GDLvl2_9595IntroBGObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDLvl2_9595IntroBGObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDLvl2_9595IntroBGObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDMainCharacterObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects3.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects2.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects3.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDMessageObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDMessageObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDMessageObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDKeysObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDKeysObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDKeysObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDFadeWObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDFadeWObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDFadeWObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595JumpObjects3.length = 0;

gdjs.Lvl2_95IntroCode.eventsList10(runtimeScene);
gdjs.Lvl2_95IntroCode.GDLvl2_9595IntroBGObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDLvl2_9595IntroBGObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDLvl2_9595IntroBGObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDMainCharacterObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDMainCharacterObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDMainCharacterObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDChar_9595AuntObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects1.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects2.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble1Objects3.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects1.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects2.length = 0;
gdjs.Lvl2_95IntroCode.GDSpeechBubble2Objects3.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595ProceedObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDMessageObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDMessageObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDMessageObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDKeysObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDKeysObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDKeysObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDFadeWObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDFadeWObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDFadeWObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595LeftObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595LeftObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595LeftObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595RightObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595RightObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595RightObjects3.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595JumpObjects1.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595JumpObjects2.length = 0;
gdjs.Lvl2_95IntroCode.GDBtn_9595JumpObjects3.length = 0;


return;

}

gdjs['Lvl2_95IntroCode'] = gdjs.Lvl2_95IntroCode;
