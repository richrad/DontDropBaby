function Update () 
{
	
if(PlayAgain.gameOver == 1)
	{	
		this.renderer.enabled = true;
	}
	
if(PlayAgain.gameOver == 0)
	{	
		this.renderer.enabled = false;
	}
}

function OnMouseDown()
	{
		if (PlayAgain.gameOver == 1)
		{
			PlayAgain.gameOver = 0;
    		Score.score = 0;
    		
    		var go = GameObject.Find("GameMusic");
			Destroy(go);
			Application.LoadLevel("Title");	
	}
}