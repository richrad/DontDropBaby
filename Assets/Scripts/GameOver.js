#pragma strict
#pragma implicit
#pragma downcast

var babyGUI: GUISkin;

function Update () {
    // Code for OnMouseDown in the iPhone. Unquote to test.
    var hit : RaycastHit;
    for (var i = 0; i < Input.touchCount; ++i) {
        if (Input.GetTouch(i).phase == TouchPhase.Began) {
        // Construct a ray from the current touch coordinates
        var ray = camera.ScreenPointToRay (Input.GetTouch(i).position);
        if (Physics.Raycast (ray,hit)) {
            hit.transform.gameObject.SendMessage("OnMouseDown");
          }
       }
   }
}

/*function OnGUI()
{
	GUI.skin = babyGUI;
	if(Baby.gameOver == 1)
	{	
		if (GUI.Button(Rect(Screen.width/2-75,Screen.height/2-55,150,120),"Play Again"))
    	{
    		Baby.gameOver = 0;
    		Score.score = 0;
			Application.LoadLevel("Game");
    	}
	}
}*/